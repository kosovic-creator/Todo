'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Korisničko ime"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Šifra"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Prijavi se</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}
