'use server';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleForm(formData) {
  'use server';
  //handle the data from MyForm client side component
  console.log(formData);
  const username = encodeURIComponent(formData.get('username'));
  const email = encodeURIComponent(formData.get('email'));
  //send somewhere new
  redirect(`/${username}?em=${email}`);
  //reload the home page at '/'
  if (username === 'Steve') {
    revalidatePath('/'); //empty the cached version and replace it
  } else {
    redirect(`/${username}?em=${email}`);
  }
}
