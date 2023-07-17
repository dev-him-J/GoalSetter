const asyncHandler = require("express-async-handler");

// descrption -Get goal
// route- GET /api/goals
// Access-Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goal" });
});

// descrption -Set goal
// route- :POST /api/goals
// Access-Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set Goal" });
});

// descrption -Update goal
// route- PUT /api/goals/:id
// Access-Private

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal with id ${req.params.id}` });
});

// descrption -Delete goal
// route- Delete /api/goals/:id
// Access-Private

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal with id ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
