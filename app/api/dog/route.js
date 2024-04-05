// GET http://localhost:3000/api/dog
/*
fetch(url, {
  method: 'GET',
  next: {revalidate: 0}
})

*/
import { NextResponse } from 'next/server';

export async function GET(request) {
  // return NextResponse.json({ name: 'Eduardo', id: 3212312 });

  return new Response('{"name":"Eduardo", "id":123456}', {
    headers: {
      'content-type': 'application/json',
    },
  });
}
