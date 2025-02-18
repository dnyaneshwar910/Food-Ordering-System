import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantCategory } from "../State/Restaurant/Action";
import { getMenuItemsByRestaurantId } from "../State/Menu/Action";
import { useParams } from "react-router-dom";

const foodTypes = [
  { Label: "All", value: "all" },
  { Label: "Vegetarian only", value: "vegetarian" },
  { Label: "Non-Vegetarian", value: "non_vegetarian" },
  { Label: "Seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {
  const [selectedFoodType, setSelectedFoodType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, menu } = useSelector((store) => store);
  const { id } = useParams();

  console.log("Restaurant ID:", id);
  console.log("menu items: ", menu);
  console.log("restaurant", restaurant);

  // Handle food type selection
  const handleFilter = (e) => {
    setSelectedFoodType(e.target.value);
    console.log(e.target.value, e.target.name);
  };

  // Handle food category selection
  const handleFilterCategory = (e, value) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value, e.target.name, value);
  };

  // Fetch restaurant details and menu items
  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
  }, [dispatch, jwt, id]);

  // Fetch menu items based on filters
  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: id,
        vegetarian: selectedFoodType === "vegetarian",
        nonveg: selectedFoodType === "non_vegetarian",
        seasonal: selectedFoodType === "seasonal",
        foodCategory: selectedCategory,
      })
    );
  }, [dispatch, jwt, id, selectedCategory, selectedFoodType]);

  return (
    <div className="px-3 lg:px-16">
      <section>
        <h3 className="text-gray-500 py-2 mt-5">Home/India/Indian Fast Food/3</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
                alt="Cafe"
              />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} md={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={restaurant.restaurant?.images[1]}
                  alt="Restaurant Interior"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  className="w-full h-[40vh] object-cover"
                  src={restaurant.restaurant?.images[2]}
                  alt="Restaurant View"
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h1>
          <p className="text-gray-500 flex items-center mt-1">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-2">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Nigadi Pune</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00 AM - 10:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            {/* Food Type Filter */}
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-10" component="fieldset">
                <RadioGroup onChange={handleFilter} name="food_type" value={selectedFoodType}>
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.Label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            {/* Food Category Filter */}
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Categories
              </Typography>
              <FormControl className="py-10 space-y-10" component="fieldset">
                <RadioGroup onChange={handleFilterCategory} name="food_category" value={selectedCategory}>
                  {restaurant.categories?.map((item, index) => (
                    <FormControlLabel
                      key={item.id || index} // Fixed duplicate key issue
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        {/* Menu Items Display */}
        <div className="space-y-5 lg:w-[80%] filter lg:pl-10">
          {menu.menuItems?.map((item) => (
            <MenuCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
