import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
        <img src={Logo} alt="" className="logo"/>
        {menuOpened === false && mobile === true ? (
          <div style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px'
          }}
            onClick={() => setMenuOpened(true)}
          >
            <img 
              src={Bars} 
              alt="" 
              style={{
                width: '1.5rem', 
                height: '1.5rem'
              }}
            /> 
          </div>
          ) : (
          <ul className="header-menu">
            <li>
              <RouterLink
                style={{"text-decoration":"none",color:"white"}}
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to='/'
                smooth={true}
              >
                Home
              </RouterLink>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <Link 
                onClick={() => setMenuOpened(false)}
                to='programs'
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
            <Link 
                onClick={() => setMenuOpened(false)}
                to='reasons'
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setMenuOpened(false)}
                to='plans'
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li >
             <RouterLink style={{"text-decoration":"none",color:"white"}} to="#testimonial" onClick={() => window.alert("hello")}>
                Testimonials
              </RouterLink>
            </li>
            <li>
              <RouterLink style={{"text-decoration":"none",color:"white"}} to="/blog?items=3" onClick={() => setMenuOpened(false)}>
                Blog
              </RouterLink>
            </li>
          </ul>
        )}
    </div>
  )
}

export default Header