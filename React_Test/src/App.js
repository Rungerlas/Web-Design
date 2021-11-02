import './style.css';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [pics, setPics] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPics(data.slice(0, 20));
      });
  }, []);

  const handleDelete = (id) => {
    const newPic = pics.filter((pic) => pic.id !== id);
    setPics(newPic);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // const handleSelect = (input) => {
  //   const prevPic = pics;
  //   if (input !== "") {
  //     const newPic = pics.filter((pic) => pic.title.includes(input));
  //     setPics(newPic);
  //   } else {
  //     setPics(prevPic);
  //   }
  // };

  // const renderPic = () => {

  //       return (
  //         <div className="list" key={pict.id}>
  //           <img src={pict.url} alt="img"></img>
  //           <div onClick={() => handleDelete(pict.id)}>{pict.title}</div>
  //         </div>
  //       );
  //     })
  //   );
  // };

  return (
    <div className="App">
      <input value={input} onChange={handleChange}></input>

      <div className="list-container">
        {pics
          .filter((pic) => pic.title.includes(input))
          .map((pict) => {
            return (
              <div className="list" key={pict.id}>
                <img src={pict.url} alt="img"></img>
                <div onClick={() => handleDelete(pict.id)}>{pict.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
