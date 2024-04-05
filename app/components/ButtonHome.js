'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ButtonHome = () => {
  const router = useRouter();
  const [thing, setThing] = useState(7);

  return (
    <section className="p-4">
      <p>{thing}</p>
      <p
        onClick={() => {
          setThing(Math.floor(Math.random() * 10));
        }}
      >
        Add One
      </p>
      <p onClick={(ev) => router.push('/')}>Go Back with a Click</p>
      <p onClick={(ev) => router.refresh()}>Refresh the Page</p>
    </section>
  );
};

export default ButtonHome;
