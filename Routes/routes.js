const express = require('express');

var CityListController=require('../Controllers/City');

var RestaurantsController=require('../Controllers/Restaurants');

var MealTypesController=require('../Controllers/mealType');
const router =express.Router();

router.get('/getCityList',CityListController.getCityList)
router.get('/getRestaurantsByCityName/:cityName',RestaurantsController.getRestaurantsByCityName)
router.get('/widget',MealTypesController.getMealtypes)
module.exports = router;
