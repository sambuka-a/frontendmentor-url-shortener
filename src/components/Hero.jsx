import Button from './Button';

import heroBackgroundPic from '../assets/illustration-working.svg';

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="hero-image">
        <img src={heroBackgroundPic} alt="section-background-picture" />
      </div>
      <div className="hero-details">
        <h1>More then Just Shorter Links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <Button type="Get Started">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
