package com.Belly.service;

import com.Belly.dto.RestaurantDto;
import com.Belly.model.*;
import com.Belly.repository.AddressRepository;
import com.Belly.repository.RestaurantRepository;
import com.Belly.repository.UserRepository;
import com.Belly.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImp implements RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository UserRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
        try {
            // Create and persist Address first
            Address address = new Address();
            address.setStreetAddress(req.getAddress().getStreetAddress());
            address.setCity(req.getAddress().getCity());
            address.setStateProvince(req.getAddress().getStateProvince());
            address.setPostalCode(req.getAddress().getPostalCode());
            address.setCountry(req.getAddress().getCountry());
            
            // Save address and flush to ensure it's in the database
            entityManager.persist(address);
            entityManager.flush();

            // Create Restaurant with the persisted address
            Restaurant restaurant = new Restaurant();
            restaurant.setAddress(address);
            restaurant.setContactInformation(req.getContactInformation());
            restaurant.setCuisineType(req.getCuisineType());
            restaurant.setDescription(req.getDescription());
            restaurant.setName(req.getName());
            restaurant.setImages(req.getImages());
            restaurant.setOpeningHours(req.getOpeningHours());
            restaurant.setRestaurantDate(LocalDateTime.now());
            restaurant.setOwner(user);
            restaurant.setOpen(true);

            // Save restaurant
            entityManager.persist(restaurant);
            entityManager.flush();
            
            return restaurant;
        } catch (Exception e) {
            throw new RuntimeException("Error creating restaurant: " + e.getMessage(), e);
        }
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRequest) throws Exception {

        Restaurant restaurant = findRestaurantById(restaurantId);
        if (restaurant.getCuisineType() != null){
            restaurant.setCuisineType(updateRequest.getCuisineType());
        }
        if (restaurant.getDescription() != null){
            restaurant.setDescription(updateRequest.getDescription());
        }
        if(restaurant.getName() != null){
            restaurant.setName(updateRequest.getName());
        }

        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        restaurantRepository.delete(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAllWithDetails();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> opt = restaurantRepository.findById(id);
        if (opt.isEmpty()) {
            throw new Exception("Restaurant not found with id: " + id);
        }
        return opt.get();
    }

    @Override
    public Restaurant getRestaurantByUserId(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
        if (restaurant == null) {
            throw new Exception("Restaurant not found with owner id"+userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavorite(Long restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);

        RestaurantDto dto = new RestaurantDto();
        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());
        dto.setTitle(restaurant.getName());
        dto.setId(restaurantId);

        boolean isFavorite = false;
        List<RestaurantDto> favorites = user.getFavorites();
        for (RestaurantDto favorite: favorites) {
            if (favorite.getId().equals(restaurantId)) {
                isFavorite = true;
                break;
            }
        }
        // If The Restoaurant is already favorite remove it; add to favorites

        if (isFavorite) {
            favorites.removeIf(favorite -> favorite.getId().equals(restaurantId));
        }
        else {
            favorites.add(dto);
        }
        UserRepository.save(user);
        return dto;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        Restaurant restaurant = findRestaurantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }
}
