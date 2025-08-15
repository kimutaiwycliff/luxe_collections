import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { ForgotPasswordForm } from '@/components/Forms/ForgotPasswordForm';

const ForgotPasswordPage = async () => {

  const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (session) {
      redirect('/');
    }
  return (
   <ForgotPasswordForm />
  )
}

export default ForgotPasswordPage