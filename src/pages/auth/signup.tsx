import { getLayout } from 'components/Layout';
import { PageType } from 'interfaces/pageType';
import { Signup } from 'modules/auth/Signup';

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
