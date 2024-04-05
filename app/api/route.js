// http://localhost:3000/api

export async function GET(request) {
  try {
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    if (Math.round(Math.random())) {
      //50% failure rate
      throw new Error('failed fetch');
    }
    let data = await resp.json();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err) {
    return new Response('{"error":6374623, "message":"nope no worky"}', {
      headers: {
        'content-type': 'application/json',
      },
      status: 465,
    });
  }
}
