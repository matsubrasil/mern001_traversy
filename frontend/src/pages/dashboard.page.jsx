import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoalForm } from '../components';

export const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user?.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  );
};
