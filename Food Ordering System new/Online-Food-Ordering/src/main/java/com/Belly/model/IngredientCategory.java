package com.Belly.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class IngredientCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    public IngredientCategory(Long id, String name, Restaurant restaurant, List<IngredientsItems> ingredientsItems) {
        this.id = id;
        this.name = name;
        this.restaurant = restaurant;
        this.ingredientsItems = ingredientsItems;
    }

    public IngredientCategory() {
        super();
    }

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

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public List<IngredientsItems> getIngredientsItems() {
        return ingredientsItems;
    }

    public void setIngredientsItems(List<IngredientsItems> ingredientsItems) {
        this.ingredientsItems = ingredientsItems;
    }

    @JsonIgnore
    @ManyToOne
    private Restaurant restaurant;

    @JsonIgnore
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<IngredientsItems> ingredientsItems = new ArrayList<>();
}
