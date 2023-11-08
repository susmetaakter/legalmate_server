const { lawyerCollection, userCollection } = require("../collection/collection");

const addLawyer = async (req, res) => {
  const newData = req.body
  try {
    const result = await lawyerCollection(newData).save()
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
const addLawyers = async (req, res) => {
  const newData = req.body
  try {
    const result = await lawyerCollection.insertMany(newData)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


const getAllLawyer = async (req, res) => {
  try {
    const result = await lawyerCollection.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getLawyer = async (req, res) => {
  const id = req.params.id
  try {
    const result = await lawyerCollection.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
const getLawyerByEmail = async (req, res) => {
  const email = req.params.email
  try {
    const result = await lawyerCollection.findOne({ email: email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteLawyer = async (req, res) => {
  const id = req.params.id
  try {
    const result = await lawyerCollection.findByIdAndDelete()(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}



const updateAttorneyLicense = async (req, res) => {
  const updateBody = req.body;
  console.log(updateBody)
  try {
    const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
      { email: updateBody.email },
      {
        $set: {
          license: updateBody.license
        },
      },
      { new: true }
    );
    res.status(200).json(updateAttorneyData);
  } catch (error) {
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyDocument = async (req, res) => {
  const updateBody = req.body;
  console.log(updateBody.newDocuments)
  try {
    const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
      { email: updateBody.email },
      {
        $set: {
          documents: updateBody.newDocuments
        },
      },
      { new: true }
    );
    console.log(updateAttorneyData)
    res.status(200).json(updateAttorneyData);
  } catch (error) {
    res.status(400).send({ message: 'Server Error' });
  }
};

const deleteAttorneyDocument = async (req, res) => {
  const { id, position } = req.body;
  console.log("index number", id, position)
  try {
    const lawyer = await lawyerCollection.findById(id);
    console.log(lawyer.documents)
    lawyer.documents.splice(position, 1);
    await lawyer.save();
    return res.status(200).json({ message: 'education history removed successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyReviews = async (req, res) => {
  const updateBody = req.body;
  // console.log(updateBody)
  try {
    // Only Status Update
    if (updateBody.email) {
      // console.log(updateBody.newReview)
      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            reviews: updateBody.newReview,
          },
        },
        { new: true }
      );
      // console.log("updateAttorneyData",updateAttorneyData)
      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyProfile = async (req, res) => {
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
            name: updateBody.name,
          },
        },
        { new: true }
      )
      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            practiceArea: updateBody.practiceArea,
            name: updateBody.name,
            location: updateBody.location,
            hourly_rate: updateBody.hourlyRate,
            about: updateBody.about
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyStatus = async (req, res) => {
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
      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            status: updateBody.status,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


const updateAttorneyEducation = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            education: updateBody.newEducations,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


const deleteAttorneyEducation = async (req, res) => {
  const { id, position } = req.body;
  console.log("index number", id, position)
  try {
    const lawyer = await lawyerCollection.findById(id);
    console.log(lawyer.education)
    lawyer.education.splice(position, 1);
    await lawyer.save();
    return res.status(200).json({ message: 'education history removed successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


const updateAttorneyExperience = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            experience: updateBody.newExperience,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const deleteAttorneyExperience = async (req, res) => {
  const { id, position } = req.body;
  console.log("index number", id, position)
  try {
    const lawyer = await lawyerCollection.findById(id);
    console.log(lawyer.experience)
    lawyer.experience.splice(position, 1);
    await lawyer.save();
    return res.status(200).json({ message: 'experience history removed successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


const updateAttorneyAwards = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            awards: updateBody.newAwards,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


const deleteAttorneyAward = async (req, res) => {
  const { id, position } = req.body;
  // console.log("index number", id, position)
  try {
    const lawyer = await lawyerCollection.findById(id);
    // console.log(lawyer.awards)
    lawyer.awards.splice(position, 1);
    await lawyer.save();
    return res.status(200).json({ message: 'experience history removed successfully' });
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

// Update Attorney Profile
const updateAttorneyProfilePhoto = async (req, res) => {
  const attorneyId = req.params.id;
  const updateData = req.body;
  console.log(updateData)
  try {
    // Use findByIdAndUpdate to update the document
    const updatedAttorney = await lawyerCollection.findByIdAndUpdate(
      attorneyId,
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
    if (!updatedAttorney) {
      return res.status(404).json({ message: 'Attorney not found' });
    }

    res.status(200).json(updatedAttorney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  addLawyer, addLawyers, getAllLawyer, getLawyer, getLawyerByEmail, deleteLawyer, updateAttorneyLicense, updateAttorneyReviews, updateAttorneyProfile, updateAttorneyEducation, updateAttorneyExperience, updateAttorneyAwards, updateAttorneyProfilePhoto, deleteAttorneyEducation, deleteAttorneyExperience, deleteAttorneyAward, updateAttorneyDocument, deleteAttorneyDocument ,updateAttorneyStatus
}