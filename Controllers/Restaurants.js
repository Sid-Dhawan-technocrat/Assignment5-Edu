const Restaurants = require('../Models/Restaurants.json');

exports.getRestaurantsByCityName = (req,res) => {
    const cityId = req.params.cityName;
    const result = Restaurants.filter(item=>((parseInt(item.city_id))===cityId));
    res.status(200).json({
        message:'Restaurants list by City Name fetched successfully',
        restaurant:result
    })
}

