const router = require('express').Router();
const { Trip, Traveller, Location } = require('../../models');

// All Trips
router.get('/', async (req,res) => {
    try {
        const tripData = await Trip.findAll({
            include: [{ model: Traveller},{ model:Location }],
        });
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET a single card
router.get('/:id', async (req, res) => {
    try {
      const tripData = await Trip.findByPk(req.params.id, {
        include: [{ model: Traveller},{ model:Location }],
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No traveller card found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a card
  router.post('/', async (req, res) => {
    try {
      const tripData = await Trip.create({
        reader_id: req.body.reader_id,
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a card
  router.delete('/:id', async (req, res) => {
    try {
      const tripData = await Trip.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No traveller card found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  