const { Day } = require("../models/schema");

class DayController {
  static async getDays(req, res) {
    try {
      const days = await Day.query().orderBy("id", "desc");
      res.json(days);
    } catch (error) {
      res.status(400).send({ error: "API error, opps." });
    }
  }

  static async postDay(req, res) {
    const dayData = req.body;
    try {
      // check if the last item in Day is already created for today
      const lastItem = await Day.query()
        .orderBy("id", "desc")
        .limit(1);
      const dateLastItem = new Date(lastItem[0].created_at).toDateString();
      const dateNow = new Date().toDateString();
      const isSubmitted = dateLastItem === dateNow;

      if (isSubmitted) {
        res
          .status(400)
          .send({ error: "You've already submitted for today. 😏" });
      } else {
        const why = await Day.query()
          .allowInsert(
            "[woke_up_at, achievement, slept_at, mood, exercise, demo_link]"
          )
          .insertGraph(dayData);
        console.log("-----why", why);
        // Return a random inspiration quote as a success message.
        // Just me being super extra. 😎
        const quotes = [
          "I'm proud of you. -linxea 😭",
          "The purpose of life is finding the largest burden that you can bear and bearing it. - Jordan Peterson",
          "Do. Or do not. There is no try. - Yoda 🐲",
          "Work harder. - Casey Neistat 😎",
          "Success is not final; failure is not fatal: It is the courage to continue that counts. -  Winston Churchill",
          "Do not pray for an easy life, pray for the strength to endure a difficult one. - Bruce Lee 💪"
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        res.send({ message: quotes[randomIndex] });
      }
    } catch (error) {
      console.log("MAYDAY ERROR INCOMING:", error);
      res.status(400).send({ error: "API error, opps." });
    }
  }
}

module.exports = DayController;
