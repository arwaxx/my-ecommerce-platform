/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const notificationController = require('./controllers/notificationController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notifications', notificationController.sendNotification);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Notification service is listening on port ${PORT}`);
});*/

/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const notificationController = require('./controllers/notificationController');

const { sendNotification } = require('./controllers/notificationController');

//app.post('/notifications', sendNotification);
app.post('/notifications', (req, res) => sendNotification(req, res));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/notifications', notificationController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Notification service is listening on port ${PORT}`);
});*/

const express = require('express');
const app = express();

const { sendNotification } = require('./controllers/notificationController');
console.log({sendNotification});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/notifications', function(req, res){
  sendNotification(req, res); // invoke the sendNotification function
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Notification service is listening on port ${PORT}`);
});



