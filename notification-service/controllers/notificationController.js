/*const express = require('express');
const router = express.Router();
const EmailService = require('../services/emailService');

const emailService = new EmailService({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const sendNotification = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await emailService.sendEmail(to, subject, message);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send('Error sending email');
  }
};

router.post('/sendEmail', sendNotification);

module.exports = {
  sendNotification: sendNotification,
  router: router
};*/
/*const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

router.post('/sendEmail', async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await emailService.sendEmail(to, subject, message);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

const sendNotification = async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await emailService.sendEmail(to, subject, message);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send('Error sending email');
  }
};

//module.exports = { sendNotification };
module.exports = {
  sendNotification: sendNotification
}
*/

const express = require('express');
const router = express.Router();
const EmailService = require('../services/emailService');

const sendNotification = async (req, res) => {
  const { to, subject, message } = req.body;

  const emailService = new EmailService({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'arwam4075@gmail.com',
      pass: 'Arwa@Ahmed2014'
    }
  });

  try {
    await emailService.sendEmail(to, subject, message);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    res.status(500).send('Error sending email');
  }
};

module.exports = { sendNotification };
