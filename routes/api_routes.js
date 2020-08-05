const express = require('express');
const router  = express.Router();
const db = require('../models')


router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbTrans => {
        res.json(dbTrans);
    })
    .catch(err =>{
        res.status(400).json(err);
    })
});

router.put('/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: [req.body] })
    .then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
});

router.post('/workouts', (req, res) => {
    db.Workout.create({day:new Date(), exercises:[]})
    .then(dbTrans => {
        res.json(dbTrans);
    })
     .catch(err =>{
        res.status(400).json(err);
    })
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