import { LoginForm } from '@/components/Forms/loginForm'
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const LoginPage = async () => {

  const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!!session) {
      redirect('/');
    }
  return <LoginForm />
}

export default LoginPage

