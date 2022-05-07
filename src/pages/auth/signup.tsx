import { getLayout } from 'client/components/Layout';
import { PageType } from 'client/interfaces/pageType';
import { Signup } from 'client/modules/auth/Signup';

const SignupPage: PageType = () => {
  return (
    <div>
      <h1>Регистрация</h1>

      <Signup />
    </div>
  );
};

SignupPage.getLayout = getLayout;

export default SignupPage;
