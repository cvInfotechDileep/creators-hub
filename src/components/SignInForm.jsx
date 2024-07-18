import { useDispatch } from 'react-redux';
import { signIn } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    dispatch(signIn());
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
