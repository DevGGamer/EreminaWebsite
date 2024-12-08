const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");
const https = require('https');
const fs = require('node:fs');

const app = express();

const port = 3000;

const privateKey = fs.readFileSync('/etc/ssl/certs/ssl-cert-snakeoil.pem', 'utf8');
const certificate = fs.readFileSync('/etc/ssl/certs/ca-certificates.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate, passphrase: "mery"};

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'sm11.hosting.reg.ru', 
    port: 1127,
    secure: true, 
    auth: {
        user: '3236', 
        pass: 'OjtkDhXwMHGYopPSsI', 
    },
});

app.post('/send-email', async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res.status(400).json({ error: 'Не все поля заполнены' });
        }

        const mailOptions = {
            from: '"EREMINA WEBSITE" <doctor_eremina@ereminawebsite.pro>',
            to, 
            subject,
            text, 
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Сообщение отправлено:', info.messageId);
        res.json({ message: 'Сообщение отправлено успешно' });

    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
        res.status(500).json({ error: 'Ошибка при отправке сообщения' });
    }
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});