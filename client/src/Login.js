import React, { useState } from 'react';
import Layout from './Layout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Make a request to the server to check the email and username combination
    try {
      const response = await fetch('/api/check-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username }),
      });

      if (response.ok) {
        // Assuming the server responds with a JSON object indicating success or failure
        const data = await response.json();

        if (data.success) {
          // Successful login, you might redirect the user or perform additional actions
          console.log('Login successful');
        } else {
          // Invalid email and username combination
          console.log('Invalid email and username combination');
        }
      } else {
        // Handle non-2xx HTTP responses
        console.error('Failed to check login');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
    }
  };
    console.log('Login Form Submitted:', { email, username });
  

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Form Submitted:', { firstName, lastName, registerUsername, registerEmail });
  };

  return (
    <Layout>
        <h1>Register or Log in:</h1>
        <div>
        {/* Login Section */}
        <section>
          <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </section>

      {/* Register Section */}
      <section>
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <br />
          <label>
            Username:
            <input type="text" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
          </label>
          <br />

          {/* Radio buttons */}
          <div>
            <label>
              <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={() => setSelectedOption('option1')} />
              Option 1
            </label>
            <label>
              <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={() => setSelectedOption('option2')} />
              Option 2
            </label>
            <label>
              <input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={() => setSelectedOption('option3')} />
              Option 3
            </label>
          </div>

          {/* Dropdown menu */}
          <label>
            I would describe myself as:
            <select value={selectedDropdown} onChange={(e) => setSelectedDropdown(e.target.value)}>
              <option value="Content Consumer">Content Consumer</option>
              <option value="Family/Friend">Family/Friend</option>
              <option value="Talent Seeker">Talent Seeker</option>
            </select>
          </label>

          {/* Checkboxes */}
          <div>
            <label>
              <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} />
              Save your login data on this browser?
            </label>
            <br></br>
            <label>
              <input type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />
              Read the Terms and Conditions
            </label>
            <br></br>
            <label>
              <input type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} />
              Receive Quarterly Email Updates?
            </label>
          </div>

          <br />
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
    </Layout>
  );
}

export default Login;