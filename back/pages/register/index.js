import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Home() {
  const {register,handleSubmit} = useForm();

  async function handleSigIn(data) {
    axios.post('/api/register', data);
  }

  return (
    <main>
      <form onSubmit={handleSubmit(handleSigIn)}>
      <label htmlFor="username">username</label>
      <input {...register('username')} id="username" type="text" name="username" />
        <label htmlFor="email"> email</label>
        <input {...register('email')} id="email" type="email" name="email" />
        <label htmlFor="password">password</label>
        <input {...register('password')} id="password" type="password" name="password" />
        <input type="submit" value="login" />
      </form>
    </main>
  );
}
