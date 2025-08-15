import { RegisterForm } from '@/components/Forms/registerForm'
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!!session) {
    redirect('/');
  }
  return <RegisterForm />
}

export default SignUpPage
