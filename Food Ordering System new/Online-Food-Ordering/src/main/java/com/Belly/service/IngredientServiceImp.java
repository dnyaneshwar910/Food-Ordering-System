package com.Belly.service;

import com.Belly.model.IngredientCategory;
import com.Belly.model.IngredientsItems;
import com.Belly.model.Restaurant;
import com.Belly.repository.IngredientCategoryRepository;
import com.Belly.repository.IngredientReItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImp implements IngredientsService {

    @Autowired
    private IngredientReItemRepository ingredientReItemRepository;

    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);
        return ingredientCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> opt = ingredientCategoryRepository.findById(id);
        if (opt.isEmpty()) {
            throw new Exception("Ingredient category not found");
        }
        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryRestaurantById(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingredientCategoryRepository.findByRestaurantId(id);
    }

//    @Override
//    public IngredientsItems createIngredientsItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
//
//        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
//        IngredientCategory category = findIngredientCategoryById(categoryId);
//        IngredientsItems item = new IngredientsItems();
//        item.setRestaurant(restaurant);
//        item.setName(ingredientName);
//        item.setCategory(category);
//        IngredientsItems ingredient=ingredientReItemRepository.save(item);
//        category.getIngredientsItems().add(ingredient);
//        return ingredient;
//    }

    @Override
    public IngredientsItems createIngredientsItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = findIngredientCategoryById(categoryId);

        // Check if the ingredient already exists
        Optional<IngredientsItems> existingIngredient = ingredientReItemRepository.findByNameAndRestaurantIdAndCategoryId(ingredientName, restaurantId, categoryId);

        if (existingIngredient.isPresent()) {
            throw new Exception("Ingredient already exists!");
        }

        IngredientsItems item = new IngredientsItems();
        item.setRestaurant(restaurant);
        item.setName(ingredientName);
        item.setCategory(category);

        // Save only if it does not exist
        IngredientsItems ingredient = ingredientReItemRepository.save(item);

        // Ensure category items list is updated correctly
        category.getIngredientsItems().add(ingredient);

        return ingredient;
    }


    @Override
    public List<IngredientsItems> findRestaurantsIngredients(Long restaurantId) throws Exception {

        return ingredientReItemRepository.findRestaurantById(restaurantId);

    }

    @Override
    public IngredientsItems updateStock(Long id) throws Exception {
        Optional<IngredientsItems> optional = ingredientReItemRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("Ingredient item not found");
        }
        IngredientsItems ingredient = optional.get();
        ingredient.setInStock(!ingredient.isInStock());
        return ingredientReItemRepository.save(ingredient);
    }
}
