import './Form.css'
import React, { useState } from 'react';

function Form()
{
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [service, setService] = useState('');
    const [format, setFormat] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log({ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ to: email, subject: "Запись на услугу", text: "test" }),
            });

            const response = await fetch('http://ereminawebsite.pro:8080/api/send-email', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ to: email, subject: "Запись на услугу", text: "test" }),
            });

            if (!response.ok) {
                const errorData = await response.json(); // Получаем данные об ошибке от сервера
                throw new Error(errorData.error || 'Ошибка при отправке');
            }

            setName('');
            setEmail('');
            setService('');

        } catch (error) {
                //Handle errors from API, different from HTTP errors
                if(error.message.startsWith("HTTP error")){
                    alert(`Ошибка при отправке: ${error.message}`);
                }else{
                    alert(`Ошибка: ${error.message}`);
                }
        }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-field">
            <h1>Записаться на консультацию</h1>
            <div className="name-field">
                <div className="field">
                    <label htmlFor="inputFirstName" className="form-label">Имя</label>
                    <input type="text" value = {name} onChange = {(e) => setName(e.target.value)} className="form-control" id="inputAddress2" placeholder="" />
                </div>

                <div className="field">
                    <label htmlFor="inputSecondName" className="form-label">Фамилия</label>
                    <input type="text" value = {surname} onChange = {(e) => setSurname(e.target.value)} className="form-control" id="inputAddress2" placeholder="" />
                </div>
            </div>

            <div className="field">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" value = {email} onChange = {(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" />
            </div>

            <div className="field">
                <label htmlFor="inputNumber" className="form-label">Номер телефона</label>
                <input type="text" value = {number} onChange = {(e) => setNumber(e.target.value)} className="form-control" id="inputAddress" placeholder="" />
            </div>

            <div className="field">
                <label htmlFor="inputService" className="form-label">Услуга</label>
                <select id="inputService" className="form-select" onChange={(e) => setService(e.target.value)}>
                    <option>Сексолог</option>
                    <option>Гинеколог</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="inputFormat" className="form-label">Формат встречи</label>
                <select id="inputFormat" className="form-select" onChange={(e) => setFormat(e.target.value)}>
                    <option>Онлайн</option>
                    <option>Очный</option>
                </select>
            </div>

            <div className="field">
                <button type="submit" className="button-registration">Записаться</button>
            </div>
        </div>
        <div className="form-description">
            <h1>Информация о приеме</h1>
            <p>dada</p>
        </div>
    </form>
    )
}

export default Form;