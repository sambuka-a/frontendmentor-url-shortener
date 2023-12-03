import { useState, useRef, useEffect } from 'react';
import Button from './Button';

const Shortener = ({ handleShortUrl, error, loading }) => {
  const [value, setValue] = useState('');
  const [wrongUrl, setWrongUrl] = useState(false);
  const inputRef = useRef();
  const urlValidationRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setValue((prevState) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0 && urlValidationRegex.test(value)) {
      handleShortUrl(value);
      setWrongUrl(false);
    } else {
      setWrongUrl(true);
    }
    setValue('');
  };

  return (
    <div className="container shortener-container">
      <div className="shortener-form-container">
        <form className="shortener-form" onSubmit={handleSubmit}>
          <input
            className={error ? 'error' : ''}
            ref={inputRef}
            onChange={handleChange}
            value={value}
            type="text"
            name="title"
            placeholder="Your link"
          />
          <Button type="shortener">{`${loading ? 'Loading' : 'Shorten It!'}`}</Button>
        </form>
        <div className="shortener-error">
          <p>{wrongUrl ? 'Wrong Url' : error ? 'error' : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Shortener;
