package com.Belly.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class IngredientsItems {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public IngredientsItems(Long id, String name, IngredientCategory category, Restaurant restaurant, boolean inStock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.restaurant = restaurant;
        this.inStock = inStock;
    }

    private String name;

    @ManyToOne
    private IngredientCategory category;

    @JsonIgnore
    @ManyToOne
    private Restaurant restaurant;

    private boolean inStock = true;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public IngredientCategory getCategory() {
        return category;
    }

    public void setCategory(IngredientCategory category) {
        this.category = category;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public boolean isInStock() {
        return inStock;
    }

    public void setInStock(boolean inStock) {
        this.inStock = inStock;
    }

    public IngredientsItems() {
        super();
    }
}
