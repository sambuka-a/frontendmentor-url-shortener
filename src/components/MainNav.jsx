import Button from './Button';

const MainNav = ({ type, showHamburger }) => {
  return (
    <nav
      className={`${type === 'desktop' ? 'navDesktop' : showHamburger ? 'mobile' : 'mobile-hide'}`}>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className={`${type === 'desktop' ? 'headerButtons' : 'headerButtons_active'}`}>
        <Button type="login">Log In</Button>
        <Button type="signup"> Sign Up</Button>
      </div>
    </nav>
  );
};

export default MainNav;
