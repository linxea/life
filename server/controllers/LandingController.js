const path = require("path");

class LandingController {
  static async getLanding(req, res) {
    res.sendFile(path.join(__dirname + "../../../client/index.html"));
  }
}

module.exports = LandingController;
