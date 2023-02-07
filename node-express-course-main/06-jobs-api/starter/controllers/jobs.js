

const getAllJobs = (req, res) => {
  res.send("get all jobs");
};
const getJob = (req, res) => {
  res.send("get single");
};
const createJob = (req, res) => {
  res.send("create");
};
const updateJob = (req, res) => {
  res.send("update");
};
const deleteJob = (req, res) => {
  res.send("delete");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
