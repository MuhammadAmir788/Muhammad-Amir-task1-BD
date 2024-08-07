module.exports = {
  createAdmin: (req, res) => {
    try {
      return res.send({
        response: "Admin Request created successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllAdmin: (req, res) => {
    try {
      return res.send({
        response: "Get all Admin's Data",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteAdmin: (req, res) => {
    try {
      return res.send({
        response: "Admin Data is deleted successfully",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
