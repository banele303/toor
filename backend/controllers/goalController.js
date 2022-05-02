const expressAsyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc get Goal
//Route  Get/api/goals
//Access Private
const getGoals = expressAsyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
//@desc get Goal
//Route  Get/api/goals
//Access Private
const setGoal = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});



//@desc Put Goal
//Route  PUT /api/goals
//Access Private
const updateGoal = expressAsyncHandler(async (req, res) => {
    
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("No id Found");
  }
 
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new:true
  });
  res.status(200).json(updatedGoal);
});

//@desc Delete Goal
//Route  Delete/api/goals
//Access Private
const deleteGoal = expressAsyncHandler(async (req, res) => {
     
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("No id Found");
  }
  await goal.remove()
  res.status(200).json({ id:req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
