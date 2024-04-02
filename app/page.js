import MyForm from '@/app/components/MyForm';

export default function Home() {
  const ts = Date.now();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <header>
        <h1>Home Page</h1>
      </header>
      <section>
        <h2>Please fill out the form and submit</h2>
        <MyForm ts={ts} />
      </section>
    </main>
  );
}
