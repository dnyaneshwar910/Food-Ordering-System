package com.Belly.request;

import com.Belly.model.Category;
import com.Belly.model.Food;
import com.Belly.model.IngredientsItems;

import java.util.List;

public class CreateFoodRequest {
    private String name;
    private String description;
    private Long price;
    private Category category;
    private List<String > images;

    private Long restaurantId;

    private boolean vegetarian;
    private boolean seasional;
    private List<IngredientsItems> ingredients;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public Long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(Long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public boolean isVegetarian() {
        return vegetarian;
    }

    public void setVegetarian(boolean vegetarian) {
        this.vegetarian = vegetarian;
    }

    public boolean isSeasional() {
        return seasional;
    }

    public void setSeasional(boolean seasional) {
        this.seasional = seasional;
    }

    public List<IngredientsItems> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<IngredientsItems> ingredients) {
        this.ingredients = ingredients;
    }
}
