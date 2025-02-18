package com.Belly.controller;

import com.Belly.model.IngredientCategory;
import com.Belly.model.IngredientsItems;
import com.Belly.request.IngredientCategoryRequest;
import com.Belly.request.IngredientRequest;
import com.Belly.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class ingredientController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody IngredientCategoryRequest req) throws Exception {
        IngredientCategory item = ingredientsService.createIngredientCategory(req.getName(),req.getRestaurantId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItems> createIngredientItem(
            @RequestBody IngredientRequest req) throws Exception {
        IngredientsItems item = ingredientsService.createIngredientsItem(req.getRestaurantId(),req.getName(),req.getCategoryId());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientsItems> updateIngredientStock(
            @RequestBody IngredientRequest req,
            @PathVariable Long id
            ) throws Exception {
            IngredientsItems item = ingredientsService.updateStock(id);

        return new ResponseEntity<>(item, HttpStatus.OK);
    }

//    @GetMapping("/restaurant/{id}")
//    public ResponseEntity<List<IngredientsItems> > getRestaurantIngredient(
//            @RequestBody IngredientRequest req,
//            @PathVariable Long id
//    ) throws Exception {
//        List<IngredientsItems> item = ingredientsService.findRestaurantsIngredients(id);
//
//        return new ResponseEntity<>(item, HttpStatus.OK);
//    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItems>> getRestaurantIngredient(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientsItems> item = ingredientsService.findRestaurantsIngredients(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }


    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory > > getRestaurantIngredientCategory(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientCategory> item = ingredientsService.findIngredientCategoryRestaurantById(id);

        return new ResponseEntity<>(item, HttpStatus.OK);
    }
}
