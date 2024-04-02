//

import Link from 'next/link';

const Page = ({ params, searchParams }) => {
  const { thing } = params; //folder name
  //searchParams is the queryString object
  const { em } = searchParams;

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <header>
        <h1>{decodeURIComponent(thing)} Route Page</h1>
        <h2>Message sent from {decodeURIComponent(em)}</h2>
      </header>
      <section className="p-4">
        <Link href="/" className="text-amber-400">
          Go back to Form
        </Link>
      </section>
    </main>
  );
};

export default Page;
