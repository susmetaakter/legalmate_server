const { ourReviewsCollection } = require("../collection/collection");


const newClientReview = async (req, res) => {
    const newData = req.body
    // console.log("newData",newData)
    try {
        const result = await ourReviewsCollection.insertMany(newData)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}



const getAllClientReview = async (req, res) => {
    try {
        const result = await ourReviewsCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports={
    getAllClientReview,newClientReview
}