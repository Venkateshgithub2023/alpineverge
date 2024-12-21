const Connect = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegisterRedirect = () => {
    console.log('Redirecting to Register page...');
    // Logic for redirecting to register page can go here
  };

  return (
    <section>
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Not a user?{' '}
        <button onClick={handleRegisterRedirect} style={{ border: 'none', background: 'none', color: 'blue', cursor: 'pointer' }}>
          Register
        </button>
      </p>
    </section>
  );
};

export default Connect;
