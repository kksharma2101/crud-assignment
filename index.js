require("dotenv").config();
const express = require("express");
const { userRoute } = require("./routes/userRoutes.js");

const app = express();

const PORT = process.env.PORT || 7070;

const cors = require("cors");

app.use(cors());
app.use(express.json()); //middleware to work with json data

app.use("/", userRoute); // user route

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server Started on PORT NO:${PORT}`);
});
