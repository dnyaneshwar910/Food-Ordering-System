import { Accordion, AccordionSummary, AccordionDetails, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { categorizeIngredients } from '../State/util/categrizelngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

// const demo = [
//     {
//         Category: "Nuts & Seeds",
//         Ingredients: ["Cashews"]
//     },
//     {
//         Category: "Protein",
//         Ingredients: ["Ground Beef", "Bacon Strips"]
//     },
// ];

const MenuCard = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch = useDispatch();
    const [isAvailable] = React.useState(true);
    console.log("items: ", item)
    const handleCheckBoxChange = (itemName) => {
            console.log("item Name: ",itemName)
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName));

        }
        else {
            setSelectedIngredients([...selectedIngredients, itemName]);
        }
    }

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients,
            },
        };
        dispatch(addItemToCart(reqData));
        console.log("reqData: ", reqData);
    };



    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex justify-between items-center">
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className="w-[7rem] h-[7rem] object-cover"
                            src={item.image[1]}
                            alt="Burger"
                        />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl:">
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <p>₹ {item.price}</p>
                            <p className='text-gray-400'> {item.description} </p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddItemToCart}>
                    <div className="flex gap-5 flex-wrap">
                        {Object.keys(categorizeIngredients(item.ingredients)).map((category, index) => (
                            <div key={index}> {/* ✅ Add a unique key here */}
                                <p>{category}</p>
                                <FormGroup>
                                    {categorizeIngredients(item.ingredients)[category].map((item) => (
                                        <FormControlLabel
                                            key={item.id}  // ✅ Ensuring unique key
                                            control={
                                                <Checkbox onChange={() => handleCheckBoxChange(item.name)} />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className="pt-5">
                        <Button
                            type='submit'
                            variant='contained'
                            disabled={false}
                        >
                            {isAvailable ? "Add to Cart" : "Out of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuCard;
