const router = require('express').Router();
const { Traveller, Trip } = require('../../models');

// All Trips
router.get('/', async (req,res) => {
    try {
        const travellerData = await Traveller.findAll({
            include: [{ model: Trip}],
        });
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET a single card
router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller card found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a card
  router.post('/', async (req, res) => {
    try {
      const travellerData = await Traveller.create({
        reader_id: req.body.reader_id,
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a card
  router.delete('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller card found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  