exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("days")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("days").insert([
        {
          id: 1,
          exercise: false,
          achievement: "I started dev.to 🤗.",
          demo_link: "http://dev.to/linxea",
          mood: "Good vibes",
          created_at: "2018-05-28T16:00:00.000Z"
        },
        {
          id: 2,
          exercise: false,
          achievement: "I created my youtube channel 😱.",
          demo_link: "https://www.youtube.com/channel/UCA6sSSOlSJiQY2o10QF5KQw",
          mood: "Psyched",
          created_at: "2018-09-07T16:00:00.000Z"
        },
        {
          id: 3,
          exercise: false,
          achievement: "I built a Street Fighter website.",
          demo_link:
            "https://dev.to/linxea/build-a-cool-thing-street-fighter-website-16j",
          mood: "Random",
          created_at: "2018-10-29T16:00:00.000Z"
        },
        {
          id: 4,
          exercise: false,
          achievement: "I built a freaking life app to track mah life.",
          demo_link: "http://dev.to/linxea",
          mood: "Sleepy as always",
          created_at: "2018-11-10T00:00:00.000Z"
        }
      ]);
    });
};
