const Hamburger = ({ toggleHamburger, showMenu }) => {
  return (
    <>
      <div className="hamburger" onClick={toggleHamburger}>
        <div className={`burger burger1 ${showMenu ? 'burger1Active' : null}`}></div>
        <div className={`burger burger2 ${showMenu ? 'burger2Active' : null}`}></div>
        <div className={`burger burger3 ${showMenu ? 'burger3Active' : null}`}></div>
      </div>
    </>
  );
};

export default Hamburger;
