import React from 'react';

const page = (props) => {
  //ALL page.js components will have
  // props.params, props.searchParams, props.children

  const params = props.params; //all the [folders]
  const searchParams = props.searchParams; // querystring

  let partOne = params.thing;
  let partTwo = params.jb;

  return (
    <div>
      <h1>JB page.js inside /[thing]/[jb]</h1>
      <h2>{partOne}</h2>
      <h2>{JSON.stringify(searchParams)}</h2>
    </div>
  );
};

export default page;

// <form action="http://localhost:3000/other/page">
// <form action={someServerAction}>
