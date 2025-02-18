# Food Ordering System

A comprehensive **Food Ordering System** built using **Spring Boot** for the backend, **React** for the frontend, **MySQL** for the database, and **Stripe** for payment processing. This project is designed to simulate a food delivery platform similar to **Swiggy** or **Zomato**, providing an online solution for restaurant owners, customers, and admins.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [System Design](#system-design)
- [User Roles](#user-roles)
- [API Endpoints](#api-endpoints)
- [Frontend Features](#frontend-features)
- [How to Run](#how-to-run)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Contributions](#contributions)

## Project Overview

This **Food Ordering System** is designed to handle the entire food ordering process from browsing restaurants to placing an order and completing the payment. The system supports three types of users:

- **Restaurant Owners**: Can manage their restaurant’s menu, prices, and view customer orders.
- **Admin**: Oversees the entire system, manages user roles, and views analytics.
- **Customers**: Browse menus, place orders, and make payments for food.

The system is fully responsive and includes various features such as menu management, real-time order tracking, and integration with **Stripe** for payment processing.

## Technologies Used

- **Backend**: 
  - **Java** (Spring Boot, Hibernate, JPA)
  - **JWT** for authentication and authorization
  - **Stripe API** for payment processing
  - **MySQL** for database management
- **Frontend**: 
  - **React** (with Redux for state management)
  - **CSS** for styling
- **Tools**:
  - **Maven** for project management
  - **Postman** for API testing
  - **IntelliJ IDEA** for backend development

## Features

### Admin Features
- **User Management**: Admin can manage users, assign roles, and view user activity.
- **Analytics**: Admin has access to system-wide analytics and reports (e.g., number of orders, revenue, etc.).
- **Restaurant Management**: Admin can manage the list of restaurants and their respective menus.

### Restaurant Owner Features
- **Menu Management**: Restaurant owners can add, update, or delete menu items with prices and images.
- **Order Management**: Restaurant owners can view orders placed by customers and manage their order status (e.g., preparing, completed).
- **Real-time Notifications**: Receive notifications when a new order is placed.

### Customer Features
- **Browse Menus**: Customers can browse various restaurants and their menus.
- **Order Placement**: Customers can add items to their cart, place orders, and make payments.
- **Order Tracking**: Customers can track the status of their orders in real-time.
- **Payment Integration**: Stripe payment gateway integration for secure and seamless payment.

## System Design

### Database Schema

- **Users**: Store user information (Customer, Restaurant Owner, Admin).
- **Restaurants**: Information about restaurants including name, address, and contact details.
- **Menu Items**: Details about food items such as name, price, and description.
- **Orders**: Stores order details such as customer info, restaurant info, order status, and payment status.
- **Payments**: Stores payment transaction details using Stripe.

### Architecture

- The system follows a **3-tier architecture**:
  - **Presentation Layer**: React-based frontend responsible for user interaction.
  - **Business Logic Layer**: Spring Boot handles order management, authentication, and communication with the database.
  - **Data Layer**: MySQL database stores all the data related to users, restaurants, and orders.

## User Roles

- **Admin**: The superuser with full access to manage all aspects of the system.
  - Can manage users, restaurants, and access system analytics.
- **Restaurant Owner**: A user who manages a specific restaurant’s menu and order fulfillment.
  - Can add, update, or delete menu items and view orders.
- **Customer**: The user who places orders from available restaurants.
  - Can browse menus, place orders, track orders, and make payments.

## API Endpoints

The backend exposes several API endpoints for communication between the frontend and the server.

### Authentication
- **POST** `/api/auth/login` - User login endpoint.
- **POST** `/api/auth/register` - User registration endpoint.

### Restaurant
- **GET** `/api/restaurants` - Fetch all restaurants.
- **GET** `/api/restaurants/{id}` - Fetch a specific restaurant by ID.

### Menu
- **GET** `/api/menus/{restaurantId}` - Fetch the menu for a specific restaurant.
- **POST** `/api/menus` - Add a new menu item (Restaurant Owner only).
- **PUT** `/api/menus/{id}` - Update a menu item (Restaurant Owner only).

### Order
- **POST** `/api/orders` - Place a new order.
- **GET** `/api/orders/{userId}` - Fetch orders for a specific user.
- **PUT** `/api/orders/{id}` - Update the order status (Restaurant Owner only).

### Payment
- **POST** `/api/payments` - Process a payment using Stripe.

## Frontend Features

- **Responsive Design**: The UI is fully responsive and works well across different devices.
- **User-friendly Navigation**: Easy-to-navigate interface for customers to browse menus and place orders.
- **Real-time Updates**: Order statuses and payment statuses are updated in real-time.
- **Order History**: Customers can view their past orders and order statuses.

## How to Run

### Prerequisites

Make sure you have the following installed:

- **Java 11** or higher
- **MySQL** database
- **Node.js** and **npm** for React development
- **Stripe account** for payment gateway integration

### Running the Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/dnyaneshwar910/Food-Ordering-System.git
