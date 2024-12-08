import doctorImage from '../../assets/doctorInfo.svg'
import { Link } from 'react-router-dom';

function AboutSection()
{
    return (
        <section className="about-person">
            <div className="about-person-image">
                <img src={doctorImage} alt="DoctorImage" />
            </div>
            <div className="about-person-info card-container">
                <h3>Кто я?</h3>
                <p>Я - Еремина Юлия Борисовна, врач с опытом работы в гинекологии <b>более 15 лет</b> и уже год как практикующий сексолог</p>
            </div>
            <div className="about-person-education card-container">
                <h3>Образование</h3>
                <p>С моим образованием вы можете ознакомиться здесь</p>
                <div className='about-person-education-button'>
                    <Link to='/'><div>&gt;</div></Link>
                </div>
            </div>
            <div className="about-person-methodology card-container">
                <p>
                    <b>Методика работы</b> со мной, <br/> как с сексологом, заключается в поиске истинной причины проблем, а не её скрытого проявления. 
                </p>
                <p>
                    Лечим болезнь, а не симптом!
                </p>
            </div>
        </section>
    )
}

export default AboutSection;