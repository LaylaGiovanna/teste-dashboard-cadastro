import { Poppins } from 'next/font/google'
import { useEffect } from 'react';
import { useRouter } from '../../node_modules/next/router';
import { deleteCookie, hasCookie } from '../../node_modules/cookies-next/lib/index';
import Button from '../components/Button';
const poppins = Poppins({weight: ['100', '200', '500', '400', '700'], subsets:['latin']})


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = hasCookie("auth");

    if (!token) {
      router.push('/login');
    }
  }, []);

  const logout = () => {
    deleteCookie("auth");
    router.push('/login');
  }

  return (
    <header className='gap-5'>
      Dashboard
      <button onClick={logout}>Logout</button>
    </header>
  );
}
