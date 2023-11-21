import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ //mongoose.Schema is a constructor function used to create a new schema for MongoDB documents.
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema); //users is the name of collection database and userSchema is the schema we created above.
