'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleForm(formData) {
  'use server';
  //handle the data from MyForm client side component
  console.log(formData);
  const username = formData.get('username');
  const email = formData.get('email');
  //send somewhere new
  redirect(`/${encodeURIComponent(username)}?em=${encodeURIComponent(email)}`);
  //reload the home page at '/'
  revalidatePath('/');
}
