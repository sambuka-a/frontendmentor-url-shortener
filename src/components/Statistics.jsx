import statBrRecogn from '../assets/icon-brand-recognition.svg';
import statDetRec from '../assets/icon-detailed-records.svg';
import statFulCustom from '../assets/icon-fully-customizable.svg';

const Statistics = () => {
  const content = [
    {
      id: 0,
      img: statBrRecogn,
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      id: 1,
      img: statDetRec,
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      id: 2,
      img: statFulCustom,
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ];

  return (
    <div className="stats-container container">
      <div className="stats-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="stats-cards-container">
        {content.map((i) => (
          <div key={i.id} className="stats-cards">
            <div className="stats-card-img">
              <img src={i.img} />
            </div>
            <div className="stats-card-title">
              <h3>{i.title}</h3>
            </div>
            <div className="stats-card-descr">
              <p>{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
