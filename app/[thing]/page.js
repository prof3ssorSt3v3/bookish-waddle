//

import Link from 'next/link';
// import ButtonHome from '../components/ButtonHome';
import ButtonHome from '@comp/ButtonHome';

const Page = async ({ params, searchParams }) => {
  const { thing } = params;
  //thing is the folder name
  //searchParams is the queryString object
  const { em } = searchParams;

  let resp = await fetch('http://localhost:3000/api', { headers: { accept: 'application/json' } });
  if (resp.ok) {
    //we got our data
  }
  if (resp.status === 465) {
    let data = await resp.json();
    let message = data.message;

    return (
      <main className="flex  flex-col items-center justify-between p-24">
        <h1>{message}</h1>
      </main>
    );
  }

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <header>
        <h1>{decodeURIComponent(thing)} Route Page</h1>
        <h2 className="md:text-3xl sm:text-base text-amber-900 dark:text-amber-300">Message sent from {decodeURIComponent(em)}</h2>
      </header>
      <section className="py-6">
        <Link href="/" className="text-amber-400">
          Go back to Form
        </Link>
      </section>

      <ButtonHome />
    </main>
  );
};

export default Page;
