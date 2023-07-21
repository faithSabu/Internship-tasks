// App.js
import './App.css';
import { useState } from 'react';
import Login from './Login';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      email: 'user1@amail.com',
      password: 'pass1',
    },
    {
      email: 'user2@amail.com',
      password: 'pass2',
    },
  ];

  const errors = {
    email: 'invalid email address',
    password: 'invalid password',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, password } = document.forms[0];
    const userData = database.find((user) => user.email === email.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: 'password', message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: 'email', message: errors.email });
    }
  };

  const renderErrorMessage = (name) => {
    return (
      name === errorMessages.name && (
        <div className='error'>{errorMessages.message}</div>
      )
    );
  };

  return (
    <>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        renderErrorMessage={renderErrorMessage}
        isSubmitted={isSubmitted}
      />
    </>
  );
}

export default App;
