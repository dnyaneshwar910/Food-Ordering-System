package com.Belly.repository;

import com.Belly.model.IngredientsItems;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

//public interface IngredientReItemRepository extends JpaRepository<IngredientsItems, Long> {
//
//List<IngredientsItems> findRestaurantById(Long id);
//}
public interface IngredientReItemRepository extends JpaRepository<IngredientsItems, Long> {
    List<IngredientsItems> findRestaurantById(Long id);

    // New method to check if an ingredient already exists
    Optional<IngredientsItems> findByNameAndRestaurantIdAndCategoryId(String name, Long restaurantId, Long categoryId);
}
