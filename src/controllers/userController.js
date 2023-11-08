const { userCollection, lawyerCollection, clientCollection } = require("../collection/collection");

// Add A User On DataBase
const postUser = async (req, res) => {
    try {
        const newUserData = req.body;
        console.log(newUserData)
        const query = { email: newUserData.email };
        const isExist = await userCollection.findOne(query);

        if (isExist) {
            return res.status(201).send({ message: "user exist" });
        } else {
            if (newUserData.role === "attorney") {
                const newAttorney = {
                    name: newUserData.name,
                    img: newUserData.image,
                    about: "",
                    practiceArea: "",
                    contact: "",
                    location: "",
                    hourly_rate: "",
                    rating: "",
                    license: [],
                    documents: [],
                    experience: [],
                    education: [],
                    reviews: [],
                    awards: [],
                    solverCase: 0,
                    workArea: "",
                    facebook: "",
                    linkedin: "",
                    twitter: "",
                    email: newUserData.email,
                    runningSerial: 0,
                    consultationHours: "",
                    specializations: "",
                }
                const newUser = {
                    role:newUserData.role,
                    name: newUserData.name,
                    image: newUserData.image,
                    email: newUserData.email,
                    status: "pending",
                }
                const insertUser = await userCollection(newUser).save();
                const insertNewAttorney = await lawyerCollection(newAttorney).save()

            }

            const newClient = {
                name: newUserData.name,
                img: newUserData.image,
                occupation: "",
                email: newUserData.email,
                location: "",
            }

            if (newUserData.role === "client") {
                const newUser = {
                    role:newUserData.role,
                    name: newUserData.name,
                    image: newUserData.image,
                    email: newUserData.email,
                    status: "approved",
                }
                const insertUser = await userCollection(newUser).save();
            }

            const insertClient = await clientCollection(newClient).save();
            return res.status(200).json(insertClient)
        }
    } catch (error) {
        console.error(error);
        res.status(404).send({ message: "Server Broke", });
    }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
    try {
        const user = await userCollection.findOne({ email: req.params.email });
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};

// Get a user by Id
const getUserById = async (req, res) => {
    try {
        const user = await userCollection.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};

// Get All User
const getAllUser = async (req, res) => {
    try {
        const allUsers = await userCollection.find();
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
};


module.exports = { postUser, getUserByEmail, getUserById, getAllUser }