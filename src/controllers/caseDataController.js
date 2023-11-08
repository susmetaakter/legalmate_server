const { caseCollection } = require("../collection/collection");

const newCase = async (req, res) => {
    const newData = req.body;
    console.log(newData)
    try {
        const insertPost = await caseCollection(newData).save();
        res.status(200).json(insertPost)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getApprovedCase = async (req, res) => {
    console.log("result")
    try {
        const result = await caseCollection.find({ status: "approved" });
        // console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getAllCase = async (req, res) => {
    console.log("result")
    try {
        const result = await caseCollection.find();
        // console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}





const getPostById = async (req, res) => {
    console.log("result id")
    try {
        const result = await caseCollection.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getCaseByEmail = async (req, res) => {

    try {
        const result = await caseCollection.find({ email: req.params.email });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteCaseById = async (req, res) => {
    console.log("update id", req.params.id)
    try {
        const result = await caseCollection.findByIdAndDelete(req.params.id);
        console.log("delete ", result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateCaseById = async (req, res) => {
    // console.log("update id" , req.params.id)
    try {
        try {
            const updatedCase = await caseCollection.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        case_post: req.body.case_post,
                    },
                },
                { new: true }
            );
            res.status(200).json(updatedCase);
        } catch (error) {
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateClientCaseStatus = async (req, res) => {
    const updateBody = req.body;
    console.log(updateBody)
    try {
        // Only Status Update
        if (updateBody.email) {
            // only user collection status update
            const updateCaseStatus = await caseCollection.findOneAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        status: updateBody.status,
                    },
                },
                { new: true }
            )
            // send data client site
            res.status(200).json(updateCaseStatus);
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: 'Server Error' });
    }
};



module.exports = {
    getApprovedCase,getAllCase, getCaseByEmail, getPostById, newCase, deleteCaseById ,updateCaseById ,updateClientCaseStatus
}