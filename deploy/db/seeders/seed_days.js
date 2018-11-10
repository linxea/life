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
          achievement: "I built a life app.",
          youtube_link: "http://dev.to/linxea",
          mood: "Sleepy as always"
        },
        {
          id: 2,
          exercise: false,
          achievement: "I created a holographic website.",
          youtube_link: "http://dev.to/linxea",
          mood: "Moody"
        }
      ]);
    });
};
