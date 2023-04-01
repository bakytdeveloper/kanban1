import React, { useState } from 'react';

import './App.css';

function App(event) {

    const [text, setText] = useState('');


    setText(event.target.value);


  return (

        <div className="input-group">
        <button className="btn btn-primary">Новый листок</button>
        <input type="text" className="form-control" value={text} onChange={changeText} placeholder="Username" >
            <h1>{text}</h1>
    </div>

  );
}

export default App;


