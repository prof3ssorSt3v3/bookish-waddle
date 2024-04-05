// import MyForm from '@/app/components/MyForm';
import MyForm from '@comp/MyForm';

export default function Home() {
  const ts = Date.now();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <header className="">
        <h1 className="">Home Page</h1>
      </header>
      <section>
        <h2 className="">Please fill out the form and submit</h2>
        <MyForm ts={ts} />
      </section>
    </main>
  );
}

// http://localhost:3000/api/dog
