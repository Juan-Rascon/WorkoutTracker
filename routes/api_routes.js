const express = require('express');
const router  = express.Router();
const db = require('../models')


router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .sort({day: 1})
    .then(dbTrans => {
        res.json(dbTrans);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
});

router.put('/workouts/:id', (req, res) => {
    db.Workout.update(
        {
          _id: req.params.id
        },
        {
          $push: {
            exercises: req.body
          }
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );
});

router.post('/workouts', (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbTrans => {
        res.json(dbTrans);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
});

module.exports = router;