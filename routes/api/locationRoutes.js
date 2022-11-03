const router = require('express').Router();
const { Location, Trip } = require('../../models');

// All Trips
router.get('/', async (req,res) => {
    try {
        const locationData = await Location.findAll({
            include: [{ model: Trip}],
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET a single card
router.get('/:id', async (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No Location card found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a card
  router.post('/', async (req, res) => {
    try {
      const locationData = await Location.create({
        reader_id: req.body.reader_id,
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a card
  router.delete('/:id', async (req, res) => {
    try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!locationData) {
        res.status(404).json({ message: 'No Location card found with that id!' });
        return;
      }
  
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  