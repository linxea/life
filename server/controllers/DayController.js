const { Day } = require("../models/schema");

class DayController {
  static async getDays(req, res) {
    try {
      const days = await Day.query();
      res.json(days);
    } catch (error) {
      res.status(400).send({ error: "Database error" });
    }
  }
}

module.exports = DayController;
