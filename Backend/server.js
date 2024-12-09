const express = require('express');
const nodemailer = require('nodemailer');
const cors = require("cors");

const app = express();

const port = 8080;

app.use(cors({
    origin: 'https://ereminawebsite.pro/'
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.selcloud.ru', 
    port: 1127,
    secure: true, 
    auth: {
        user: '3236', 
        pass: 'OjtkDhXwMHGYopPSsI', 
    },
});

app.get('/api', async (req, res) => {
    console.log("Hello");
})

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
        res.status(200).json({ message: 'Письмо успешно отправлено' });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        let errorMessage = 'Произошла ошибка'; 
        if (error.response) {
            errorMessage = `Ошибка SMTP: ${error.response.text}`;
        } else if (error.message) {
            errorMessage = `Ошибка: ${error.message}`;
        }
        res.status(500).json({ error: errorMessage }); 
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});