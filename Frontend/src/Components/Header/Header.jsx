import './Header.css'
import logo from '../../assets/logo.svg'
import personal from '../../assets/personal.svg'
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';

function Header()
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

        const [activeIndex, setActiveIndex] = useState(0); 
        const location = useLocation();
    
        useEffect(() => {
            const pathname = location.pathname;
            const index = navItemNames.findIndex(name => name.link === pathname);
            setActiveIndex(index >= 0 ? index : 0);
        }, [location]); 
    
        const handleNavigationClick = (index) => {
            setActiveIndex(index);
    
            scroll.scrollTo(index, {
                duration: 1000,
                smooth: 'easeInOutCubic',
            });
        };
    
        const [toggle, setToggle] = useState(false); 
        const handleToggleClick = () => {
            setToggle(!toggle);
        }

    return (
    <>
        <header>
            <div className='company'>
                <div className='company-logo'>
                    <img src={logo} alt="Logo" />
                </div>

                <div className='company-name'>
                    <span>EREMINA WEBSITE</span>
                </div>
            </div>
            <hr />
            <nav>
                <div className='navigation'>
                    <button className='nav-toggle shadow' onClick={() => handleToggleClick()}>Меню</button>
                    <div className='navigation-buttons'>
                        <ul className={toggle ? 'active' : ''}>
                            {
                                navItemNames.map((item, index) => {
                                return (
                                    <li key={item.title} className={activeIndex == index ? "selected-page shadow" : ""} >
                                        <Link to={item.link} onClick={() => handleNavigationClick(index)}>{item.title}</Link>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='navigation-personal'>
                        <button className='booking-button shadow'>Запись на приём</button>
                        <a className = 'personal-account shadow' href="#"><img src={personal} alt="Personal" /></a>
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    </>
    );
}

export default Header;