const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");

const app = express();

const port = 8080;

app.use(cors({
    origin: 'https://ereminawebsite.pro'
}));
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

app.post('/api/send-email', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});