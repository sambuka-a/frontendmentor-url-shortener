const Button = ({ type, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        type === 'Get Started'
          ? 'hero-btn'
          : type === 'login'
          ? 'login-btn'
          : type === 'shortener'
          ? 'shortener-btn'
          : 'signup-btn'
      }>
      {children}
    </button>
  );
};

export default Button;
