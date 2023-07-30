/*const nodemailer = require('nodemailer');

class EmailService {
  constructor(smtpConfig) {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  sendEmail(to, subject, body) {
    const mailOptions = {
      from: 'myecommerceplatform@example.com',
      to: to,
      subject: subject,
      html: body
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}

module.exports = EmailService;*/


/*const nodemailer = require('nodemailer');

class EmailService {
  constructor(smtpConfig) {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  async sendEmail(to, subject, body) {
    const mailOptions = {
      from: 'myecommerceplatform@example.com',
      to: to,
      subject: subject,
      html: body
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      throw error;
    }
  }
}

module.exports = EmailService;*/

const nodemailer = require('nodemailer');

class EmailService {
  constructor(smtpConfig) {
    this.transporter = nodemailer.createTransport(smtpConfig);
  }

  async sendEmail(to, subject, body) {
    const mailOptions = {
      from: 'arwam4075@gmail.com',
      to: to,
      subject: subject,
      html: body
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      throw error;
    }
  }
}

module.exports = EmailService;
