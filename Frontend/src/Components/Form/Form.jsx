import './Form.css'

function Form()
{
    return (
    <form>
        <div className="form-field">
            <h1>Записаться на консультацию</h1>
            <div className="name-field">
                <div className="field">
                    <label htmlFor="inputFirstName" className="form-label">Имя</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="" />
                </div>

                <div className="field">
                    <label htmlFor="inputSecondName" className="form-label">Фамилия</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="" />
                </div>
            </div>

            <div className="field">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="field">
                <label htmlFor="inputNumber" className="form-label">Номер телефона</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="" />
            </div>

            <div className="field">
                <label htmlFor="inputService" className="form-label">Услуга</label>
                <select id="inputService" className="form-select">
                    <option>Сексолог</option>
                    <option>Гинеколог</option>
                </select>
            </div>

            <div className="field">
                <label htmlFor="inputFormat" className="form-label">Формат встречи</label>
                <select id="inputFormat" className="form-select">
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