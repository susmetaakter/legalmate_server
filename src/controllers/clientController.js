const { clientCollection, userCollection } = require("../collection/collection");

const newClient = async (req, res) => {
    const newData = req.body
    console.log(newData)
    try {
        const result = await clientCollection(newData).save()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllClient = async (req, res) => {
    try {
        const result = await clientCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getClient = async (req, res) => {

    try {
        const result = await clientCollection.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getClientByEmail = async (req, res) => {

    try {
        const result = await clientCollection.findOne({ email: req.params.email });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


const updateClientStatus = async (req, res) => {
    const updateBody = req.body;
    console.log(updateBody)
    try {
        // Only Status Update
        if (updateBody.email) {
            // only user collection status update
            const updateUserData = await userCollection.findOneAndUpdate(
                { email: updateBody.email },
                {
                    $set: {
                        status: updateBody.status,
                    },
                },
                { new: true }
            )
            const updateClientData = await clientCollection.findOneAndUpdate(
                { email: updateBody.email },
                {
                    $set: {
                        status: updateBody.status,
                    },
                },
                { new: true }
            );

            // send data client site
            res.status(200).json(updateClientData);
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: 'Server Error' });
    }
};
const updateClientDetails = async (req, res) => {
    const updateBody = req.body;
    console.log(updateBody)
    try {
     
        if (updateBody.email) {
            //  user collection  update
            const updateUserData = await userCollection.findOneAndUpdate(
                { email: updateBody.email },
                {
                    $set: {
                        name: updateBody.name,
                    },
                },
                { new: true }
            )
            const updateClientData = await clientCollection.findOneAndUpdate(
                { email: updateBody.email },
                {
                    $set: {
                        name: updateBody.name,
                        location: updateBody.location,
                        occupation: updateBody.occupation,
                    },
                },
                { new: true }
            );

            // send data client site
            res.status(200).json(updateClientData);
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: 'Server Error' });
    }
};


const updateClientProfilePhoto = async (req, res) => {
    
    const updateData = req.body;
    console.log(updateData)
    try {
      
      const updatedClient = await clientCollection.findOneAndUpdate(
        { email: updateData.email },
        {
          $set: {
            img: updateData.url,
          },
        },
        { new: true }
      );
  
      const updateUserData = await userCollection.findOneAndUpdate(
        { email: updateData.email },
        {
          $set: {
            image: updateData.url,
          },
        },
        { new: true }
      )
      if (!updatedClient) {
        return res.status(404).json({ message: 'client not found' });
      }
  
      res.status(200).json(updatedClient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  


module.exports = {
    newClient, getAllClient, getClient, getClientByEmail, updateClientStatus ,updateClientDetails ,updateClientProfilePhoto

}