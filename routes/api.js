const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = function (app) {

  router.get("/api/workouts", function(req, res) {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
          res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
  });

  router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
}

module.exports = router;