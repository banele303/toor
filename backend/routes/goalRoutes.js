const express = require("express")
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")
const router = express.Router()
const {protect}  = require('../routes/goalRoutes')
router.get("/", getGoals)

router.post("/", protect, setGoal )

router.put("/:id", protect,updateGoal)
router.delete("/:id", protect, deleteGoal)
module.exports = router;