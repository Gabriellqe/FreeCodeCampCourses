

const getAllJobs = (req, res) => {
  res.send("get all jobs");
};
const getJob = (req, res) => {
  res.send("get single");
};
const createJob = async (req, res) => {
  res.json(req.user);

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
