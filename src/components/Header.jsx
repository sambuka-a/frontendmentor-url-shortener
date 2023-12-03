import Hamburger from './Hamburger.jsx';
import siteLogo from '../assets/logo.svg';
import { useMediaQuery } from 'react-responsive';

import { useState, useEffect } from 'react';
import MainNav from './MainNav.jsx';

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  const isDesktopOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    // Add or remove the class based on the showHamburger state
    if (showHamburger) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showHamburger]);

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
    // Toggle a class on the body to disable scrolling
    if (!showHamburger) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  return (
    <div className="header-container container">
      {!isDesktopOrMobile ? (
        <div className="header-content">
          <img src={siteLogo} alt="logo" />
          <MainNav type={'desktop'} />
        </div>
      ) : (
        <div className="header-content">
          <div className="header-mobile">
            <img src={siteLogo} alt="logo" />
            <Hamburger toggleHamburger={toggleHamburger} showMenu={showHamburger} />
          </div>
          <MainNav type={'mobile'} showHamburger={showHamburger} />
        </div>
      )}
    </div>
  );
};

export default Header;
