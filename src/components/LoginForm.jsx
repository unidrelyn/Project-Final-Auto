import { useState } from 'react';
import authService from '../services/AuthService';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login method from authentication service
      const user = await authService.login(email, password);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;