'use client';
//client side form component
import { handleForm } from '@/app/actions';

const MyForm = ({ ts }) => {
  return (
    <>
      <h2 className="text-2xl text-amber-300">Form created at {ts}</h2>
      <form className="p-8" action={handleForm}>
        <p className="p-4">
          <input type="text" name="username" placeholder="username" className="px-2 py-1 text-blue-500" />
        </p>
        <p className="p-4">
          <input type="text" name="email" placeholder="email" className="px-2 py-1 text-blue-500" />
        </p>
        <p className="p-4">
          <button className="bg-blue-500 text-white px-2 py-1">Send Data</button>
        </p>
      </form>
    </>
  );
};

export default MyForm;
