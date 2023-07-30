/*const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

const Order = function(order) {
  this.orderId = order.orderId;
  this.customerId = order.customerId;
  this.orderDate = order.orderDate;
  this.orderAmount = order.orderAmount;
};

Order.create = (newOrder, result) => {
  connection.query('INSERT INTO orders SET ?', newOrder, (err, res) => {
    if (err) {
      console.error('Error creating new order: ', err);
      result(err, null);
    } else {
      console.log('Created new order: ', { id: res.insertId, ...newOrder });
      result(null, { id: res.insertId, ...newOrder });
    }
  });
};

Order.findById = (orderId, result) => {
  connection.query('SELECT * FROM orders WHERE orderId = ?', orderId, (err, res) => {
    if (err) {
      console.error('Error finding order by id: ', err);
      result(err, null);
    } else if (res.length) {
      console.log('Found order: ', res[0]);
      result(null, res[0]);
    } else {
      result({ message: `Order with id ${orderId} not found` }, null);
    }
  });
};

Order.getAll = (result) => {
  connection.query('SELECT * FROM orders', (err, res) => {
    if (err) {
      console.error('Error getting all orders: ', err);
      result(err, null);
    } else {
      console.log('Got all orders: ', res);
      result(null, res);
    }
  });
};

Order.updateById = (orderId, order, result) => {
  connection.query('UPDATE orders SET ? WHERE orderId = ?', [order, orderId], (err, res) => {
    if (err) {
      console.error('Error updating order: ', err);
      result(err, null);
    } else if (res.affectedRows === 0) {
      result({ message: `Order with id ${orderId} not found` }, null);
    } else {
      console.log('Updated order: ', { orderId: orderId, ...order });
      result(null, { orderId: orderId, ...order });
    }
  });
};

Order.remove = (orderId, result) => {
  connection.query('DELETE FROM orders WHERE orderId = ?', orderId, (err, res) => {
    if (err) {
      console.error('Error deleting order: ', err);
      result(err, null);
    } else if (res.affectedRows === 0) {
      result({ message: `Order with id ${orderId} not found` }, null);
    } else {
      console.log('Deleted order with id: ', orderId);
      result(null, res);
    }
  });
};

module.exports = Order;*/


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

const Order = function(order) {
  this.id = order.id;
  this.user_id = order.user_id;
  this.product_id = order.product_id;
  this.quantity = order.quantity;
  this.created_at = order.created_at;
};

Order.create = (newOrder, result) => {
  connection.query('INSERT INTO orders SET ?', newOrder, (err, res) => {
    if (err) {
      console.error('Error creating new order: ', err);
      result(err, null);
    } else {
      console.log('Created new order: ', { id: res.insertId, ...newOrder });
      result(null, { id: res.insertId, ...newOrder });
    }
  });
};

Order.findById = (orderId, result) => {
  connection.query('SELECT * FROM orders WHERE id = ?', orderId, (err, res) => {
    if (err) {
      console.error('Error finding order by id: ', err);
      result(err, null);
    } else if (res.length) {
      console.log('Found order: ', res[0]);
      result(null, res[0]);
    } else {
      result({ message: `Order with id ${orderId} not found` }, null);
    }
  });
};

Order.getAll = (result) => {
  connection.query('SELECT * FROM orders', (err, res) => {
    if (err) {
      console.error('Error getting all orders: ', err);
      result(err, null);
    } else {
      console.log('Got all orders: ', res);
      result(null, res);
    }
  });
};

Order.updateById = (orderId, order, result) => {
  connection.query('UPDATE orders SET ? WHERE id = ?', [order, orderId], (err, res) => {
    if (err) {
      console.error('Error updating order: ', err);
      result(err, null);
    } else if (res.affectedRows === 0) {
      result({ message: `Order with id ${orderId} not found` }, null);
    } else {
      console.log('Updated order: ', { id: orderId, ...order });
      result(null, { id: orderId, ...order });
    }
  });
};

Order.remove = (orderId, result) => {
  connection.query('DELETE FROM orders WHERE id = ?', orderId, (err, res) => {
    if (err) {
      console.error('Error deleting order: ', err);
      result(err, null);
    } else if (res.affectedRows === 0) {
      result({ message: `Order with id ${orderId} not found` }, null);
    } else {
      console.log('Deleted order with id: ', orderId);
      result(null, res);
    }
  });
};

module.exports = Order;
