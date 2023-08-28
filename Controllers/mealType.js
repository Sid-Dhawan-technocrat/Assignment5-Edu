const mealTypes = require('../Models/mealTypes.json')

exports.getMealtypes=(req,res)=>{
    
    res.status(200).json({
        message:'MealTypes loaded successfully',
        result:mealTypes,
    })
}