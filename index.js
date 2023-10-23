const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');;
require('dotenv').config()
const app=express();
const port= process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

//Mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wiyjou2.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const attorneysCollection = client.db('legalmateDb').collection('attorneys')
    const practiceAreasCollection = client.db('legalmateDb').collection('practiceAreas')
    const usersCollection = client.db('legalmateDb').collection('users')
    const ourReviewsCollection = client.db('legalmateDb').collection('ourReviewss')


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {}
}
run().catch(console.dir);


app.get('/', (req, res)=> {
    res.send('Justice has been served by Legalmate')
})

app.listen(port, ()=> {
    console.log(`Legalmate server is running on port: ${port}`)
})
