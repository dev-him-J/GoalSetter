const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
// descrption -Get goal
// route- GET /api/goals
// Access-Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// descrption -Set goal
// route- :POST /api/goals
// Access-Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// descrption -Update goal
// route- PUT /api/goals/:id
// Access-Private

const updateGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.findById(req.params.id);

  if (!goals) {
    throw new Error("Goal not Found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// descrption -Delete goal
// route- Delete /api/goals/:id
// Access-Private

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    throw new Error("Goal not Found");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
