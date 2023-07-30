/*const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const kafkaProducer = require('../kafka-producer');

// Route to place an order
router.post('/', async (req, res) => {
  try {
    const order = new Order({
      customerName: req.body.customerName,
      productName: req.body.productName,
      quantity: req.body.quantity,
      totalPrice: req.body.totalPrice,
      orderDate: Date.now()
    });

    // Save the order to the database
    const savedOrder = await order.save();

    // Publish the order to Kafka topic
    kafkaProducer.produceOrder(savedOrder);

    res.status(201).send(savedOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();

    res.send(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const kafkaProducer = require('../kafka-producer');

// Route to place an order
router.post('/', async (req, res) => {
  try {
    const order = new Order({
      user_id: req.body.userId,
      product_id: req.body.productId,
      quantity: req.body.quantity,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    });

    // Save the order to the database
    Order.create(order, (err, savedOrder) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        // Publish the order to Kafka topic
        kafkaProducer.produceOrder(savedOrder);

        res.status(201).send(savedOrder);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route to get all orders
router.get('/', async (req, res) => {
  try {
    Order.getAll((err, orders) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.send(orders);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
