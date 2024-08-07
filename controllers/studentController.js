module.exports = {
  createStudent: (req, res) => {
    try {
      return res.send({
        response: "Student Request created successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllStudents: (req, res) => {
    try {
      return res.send({
        response: "Get all Studen's Data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteStudent: (req, res) => {
    try {
      return res.send({
        response: "Studen's Data is deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
