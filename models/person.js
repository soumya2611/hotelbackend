import mongoose from "mongoose";

//Defining person schema...

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

//CREATING MODEL
const Person =
mongoose.models.person || mongoose.model("person", personSchema,"Staff-Detail");
export default Person;