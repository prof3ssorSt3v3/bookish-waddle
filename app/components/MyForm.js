'use client';
//client side form component
import { handleForm } from '@app/actions';

const MyForm = ({ ts, christian, func }) => {
  //onSubmit={(ev)=>handleForm()}

  function someFunc(ev) {
    ev.preventDefault();
    console.log('thanks...');
    let url = 'http://localhost:3000/api/dog';
    let fd = new FormData(document.getElementById('myform'));
    fetch(url, {
      method: 'GET',
      body: fd,
      headers: {
        accept: 'application/json',
      },
    }).then((resp) => {});

    //we can talk to localStorage or cacheAPI...
  }
  return (
    <>
      <h2 className="text-2xl text-amber-300">Form created at {ts}</h2>
      <form id="myform" className="p-8" action={handleForm}>
        <p className="p-4">
          <input type="text" name="username" placeholder="username" className="px-2 py-1 text-blue-500" />
        </p>
        <p className="p-4">
          <input type="text" name="email" placeholder="email" className="px-2 py-1 text-blue-500" />
          <input type="checkbox" name="alive" value="yes" />
        </p>
        <p className="p-4">
          <button name="one" className="bg-blue-500 text-white px-2 py-1">
            Delete Data
          </button>
          <button name="two" className="bg-blue-500 text-white px-2 py-1">
            Add Data
          </button>
        </p>
      </form>
    </>
  );
};

export default MyForm;

/*

function handleForm(ev){
  let form = ev.target; //form html element
  ev.preventDefault();
  let fd = new FormData(form);
  fetch(url, {
    method: 'POST',
    body: fd
  })
}


/ - home page with <Form> client side /pages.js
/ottawa - show weather and links to movies and food  [location]/page.js
/ottawa/movies?w=sunny   [location]/movies/page.js
/ottawa/food?w=foggy     [location]/food/page.js

*/
