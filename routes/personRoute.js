import express from "express";
import Person from '../models/person.js'
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("data saved", savedPerson);
    res.status(200).json({
      savedPerson,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "internal server error",
    });
  }
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const data = await Person.find({ work: workType });
      console.log("data fetched");
      res.status(200).json({ data });
    } else
      res.status(404).json({
        success: false,
        message:
          " Invalid work-type fplease mention between chef,waiter,manager",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "internal server error",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "internal server error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await Person.findByIdAndUpdate( id, data,{
      new: true,
      runValidators:true
    })

    if (!response) {
      return res.status(404).json({error:'Person not found'})
    }

    console.log('data updated')
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "internal server error",
    });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Person.findByIdAndDelete(id);
    if (!response) {
    return  res.status(404).json({error:`person not found havind id:${id}`})
    }
    console.log('Data deleted')
    res.status(200).json({message:"deleted successfully"})
  } catch (error) {
     console.log(error);
     res.status(500).json({
       error: "internal server error",
     });
  }
})


export default router