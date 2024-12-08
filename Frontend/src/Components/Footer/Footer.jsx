import './Footer.css'
import { Link } from 'react-router-dom';

function Footer()
{
    const navItemNames = [
        {
            title: 'Обо мне',
            link: '/'
        }, 
        {
            title: 'Услуги',
            link: '/services'
        }, 
        {
            title: 'Гайды',
            link: '/guides'
        }];

    return (
        <footer>
            <div className='footer-navigation'>
            {
                navItemNames.map((item, index) => (
                    <Link key = {index} to={item.link}>{item.title}</Link>
                ))
            }
            <br />
            <a className = "agreement" href="#">Политика конфиденциальности</a>
            </div>

            <div className='social-contact'>
                <h3>Мои группы</h3>
                <a href="#">Telegram</a>
                <a href="#">ВКонтакте</a>
                <br />
                <a className = "agreement" href="#">Пользовательское соглашение</a>
            </div>
        </footer>
    )
}

export default Footer;