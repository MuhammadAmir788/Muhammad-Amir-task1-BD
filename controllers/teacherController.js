module.exports = {
  createTeacher: (req, res) => {
    try {
      return res.send({
        response: "Teacher's Request created Successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllTeachers: (req, res) => {
    try {
      return res.send({
        response: "Get all Teacher's Data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteTeacher: (req, res) => {
    try {
      return res.send({
        response: "teacher Data is deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
