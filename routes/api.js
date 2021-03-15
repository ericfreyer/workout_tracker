var db = require("../models");

module.exports = function(app) {
  app.get("/api/workout", function(req, res) {
    db.workout.find({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put("/api/workout/:id", function({body, params}, res) {
    db.workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workout", (req, res) => {
    db.workout.create({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workout/range", function(req, res) {
    db.workout.find({}).limit(5)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};