import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div id="contact" className='col'>
        <h1>Contact Me</h1>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
}

export default Form;