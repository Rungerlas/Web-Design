import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [input, setInput] = useState('');
  const [pics, setPics] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setInput('');
    fetch(`https://restcountries.com/v2/name/${input}`)
      .then((res) => {
        if (res.status === 404) {
          alert('Country Not Exists, please re-enter');
          throw response;
        }
        return res.json();
      })
      .then((data) => {
        if (data[0] !== undefined) {
          pics.push(data[0]);
          setPics([...pics]);
        } else {
          alert('Country Not Exists, please re-enter');
        }
      });
  };

  const handleDelete = (name) => {
    if (pics) {
      const newPics = pics.filter((pic) => pic.name !== name);
      setPics(newPics);
    }
  };

  return (
    <div className="center">
      <input value={input} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {pics &&
        pics.map((item, index) => {
          return (
            <div key={index} className="gridDisplay">
              <div className="grid-item">
                <button onClick={() => handleDelete(item.name)}>
                  {item.name}
                </button>
                <img src={item.flag} alt="pic" className="picture" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default App;
