import mark from '../../assets/mark.svg'

function AdvantagesSection()
{
    return (
        <section className="advantages-section">
            <div className="advantages-cards">
                <div className="advantages-card">
                    <div className="advantages-card-header">
                        Преимущества онлайн приёма
                    </div>
                    <div className="advantages-card-content">
                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Удобство</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Доступность</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Анонимность</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Экономия времени</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Гибкость в расписании</p>
                        </div>
                    </div>
                </div>

                <div className="advantages-card">
                    <div className="advantages-card-header">
                        Преимущества очного приёма
                    </div>
                    <div className="advantages-card-content">
                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Широкая возможность обследования</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Нет техническим проблемам!</p>
                        </div>

                        <div className="advantages-card-content-item">
                            <img src={mark} alt="mark" />
                            <p>Личный контакт</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='advantages-description'>
                Каждый из этих факторов важен при выборе между онлайн и очной консультацией. 
                Получение качественной медицинской помощи — в любом формате — должно оставаться приоритетом!
            </div>
        </section>
    )
}

export default AdvantagesSection;