

export const isPresentInFavorites = (Favorites, restaurant) => {
    for (let item of Favorites) {
        if (item.id === restaurant.id) {
            return true;
        }
    }
    return false;
}