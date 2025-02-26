import e from "express";
import Menu from '../models/menu.js'
const router = e.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const savedMenu = await newMenu.save();
    console.log("menu added to hotel");
    res.status(200).json({ savedMenu });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "internal server error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
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

router.get("/:tasteType", async(req,res) => {
    try {
        const data = req.params.tasteType;
        if (data == "spicy" || data == "sweet" || data == "sour") {
             const taste = await Menu.find({ taste: data });
             res.status(200).json({ taste });
        }
        else {
            res.status(404).json({error:'  spicy , sweet, sour   '})
        }
       
        
    } catch (error) {
        res.status(500).json({err:error})
    }
})

export default router