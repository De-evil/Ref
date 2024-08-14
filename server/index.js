const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mongoDB configuration
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://manosanto1999:ymvRcwYBhmZHG3rZ@event-planners.9rnvii0.mongodb.net/?retryWrites=true&w=majority&appName=Event-Planners";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Create a collection of documents
    const WorkCollection = client.db("EventManagement").collection("Works");
    
    // insert works to the db: POST method
    app.post("/upload-work", async (req, res) => {
      const data = req.body;
      const result = await WorkCollection.insertOne(data);
      res.send(result);
    });

    // Get all works from the database
    // app.get("/all-works", async(req, res) => {
    //   const works =  WorkCollection.find();
    //   const result = await works.toArray();
    //   res.send(result);
    // });

    // Update a work data: Update methods
    app.patch("/work/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateWorkData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true};

      const updateDoc = {
        $set: {
          ...updateWorkData
        }
      }

      //update

      const result = await WorkCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    // Delete a work data
    app.delete("/work/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await WorkCollection.deleteOne(filter);
      res.send(result);  
    });

    // find by category
    app.get("/all-works", async(req, res) =>{
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await WorkCollection.find(query).toArray();
      res.send(result);
    })

    // to get single data
    app.get("/work/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await WorkCollection.findOne(filter);
      res.send(result);
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;
// const cors = require("cors");

// //middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // mongoDB configuration
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = "mongodb+srv://manosanto1999:ymvRcwYBhmZHG3rZ@event-planners.9rnvii0.mongodb.net/?retryWrites=true&w=majority&appName=Event-Planners";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Create a collection of documents
//     const WorkCollection = client.db("EventManagement").collection("Works");

//     // insert works to the db: POST method
//     app.post("/upload-work", async (req, res) => {
//       const data = req.body;
//       const result = await WorkCollection.insertOne(data);
//       res.send(result);
//     });

//     // Update a work data: Update method
//     app.patch("/work/:id", async (req, res) => {
//       const id = req.params.id;
//       const updateWorkData = req.body;

//       if (!ObjectId.isValid(id)) {
//         return res.status(400).send('Invalid ObjectId');
//       }

//       const filter = { _id: new ObjectId(id) };
//       const options = { upsert: true };

//       const updateDoc = {
//         $set: {
//           ...updateWorkData
//         }
//       };

//       const result = await WorkCollection.updateOne(filter, updateDoc, options);
//       res.send(result);
//     });

//     // Delete a work data
//     app.delete("/work/:id", async (req, res) => {
//       const id = req.params.id;

//       if (!ObjectId.isValid(id)) {
//         return res.status(400).send('Invalid ObjectId');
//       }

//       const filter = { _id: new ObjectId(id) };
//       const result = await WorkCollection.deleteOne(filter);
//       res.send(result);
//     });

//     // find by category
//     app.get("/all-works", async (req, res) => {
//       let query = {};
//       if (req.query?.category) {
//         query = { category: req.query.category };
//       }
//       const result = await WorkCollection.find(query).toArray();
//       res.send(result);
//     });

//     // to get single data
//     app.get("/work/:id", async (req, res) => {
//       const id = req.params.id;

//       if (!ObjectId.isValid(id)) {
//         return res.status(400).send('Invalid ObjectId');
//       }

//       const filter = { _id: new ObjectId(id) };
//       const result = await WorkCollection.findOne(filter);
//       res.send(result);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
