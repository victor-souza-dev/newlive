import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from "next/router";
import setCookie from '../../../Java Script/my-workt/utils/saveCokies';

export default function Home() {
  const {register,handleSubmit} = useForm();
  const router = useRouter();

  function push(){
    router.push('/dashboard')
  }
  async function handleSigIn(data) {
    axios.post('/api/auth', data).then(response => {
      setCookie(response.data.token)
    });
    setTimeout(push,2500)
  }

  return (
    <main>
      <form onSubmit={handleSubmit(handleSigIn)}>
        <label htmlFor="email"> email</label>
        <input {...register('email')} id="email" type="email" name="email" />
        <label htmlFor="password">password</label>
        <input {...register('password')} id="password" type="password" name="password" />
        <input type="submit" value="login" />
      </form>
    </main>
  );
}
