const getAllTasks = (req, res) => {
  res.send("WELCOME");
};

const createTask = (req, res) => {
    res.send("WELCOME to post");
    res.json(req.body);

};

const getTask = (req, res) => {
  res.json({id:req.params.id});


};

const updateTask = (req, res) => {
  res.send("WELCOME");
};

const deleteTask = (req, res) => {
  res.send("WELCOME");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
