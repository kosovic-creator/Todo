'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const res = await signIn('password', {
      redirect: false,
      username,
      password,
    });

    if (res?.ok) {
      router.push('/todo'); // ili na dashboard
      router.refresh();
    } else {
      setError('Pogrešno korisničko ime ili šifra.');
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-2xl font-bold mb-4'>Prijava</h1>
    <p className='mb-4'>Molimo unesite svoje korisničko ime i šifru.</p>
    <div className='w-96 p-4 border rounded shadow'>

    <form onSubmit={handleSubmit}>
      <Input
className='p-2 mb-4'
        autoComplete="username"
        autoFocus
        id="username"
        type="text"
        name="username"
        placeholder="Korisničko ime"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <Input
      className='p-2 mb-4'
        autoComplete="current-password"
        id="password"
        autoFocus
        type="password"
        name="password"
        placeholder="Šifra"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <Button className='bg-black text-white w-full' type="submit">Prijavi se</Button>
      {error && <div style={{ color: 'red' }}>{error}</div>}

    </form>
    </div>

    <div className='mt-4'>
      <p className='text-sm'>Nemate račun? <a href="/auth/register" className='text-blue-500'>Registrirajte se</a></p>
    </div>
  </div>
  );

}
