package com.Belly.service;

import com.Belly.model.IngredientCategory;
import com.Belly.model.IngredientsItems;

import java.util.List;

public interface IngredientsService {
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception;

    public IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientCategoryRestaurantById(Long id) throws Exception;

    public IngredientsItems createIngredientsItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;

    public List<IngredientsItems> findRestaurantsIngredients(Long restaurantId) throws Exception;

    public IngredientsItems updateStock(Long id) throws Exception;


}
