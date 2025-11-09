import { useCallback, useEffect, useState } from 'react';
import instance from '../../api/config';
import CoffeMachineCard from '../../components/CoffeeMachineCard';
import PageBase from '../../components/PageBase';
import ProfileImage from '../../components/ProfileImage';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser, setUser } from '../../store/userSlice';
import {
  selectMachine,
  setMachine,
  setStatuses,
} from '../../store/machineSlice';
import './home.scss';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const user = useAppSelector(selectUser);
  const machine = useAppSelector(selectMachine);

  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      const { data } = await instance.get(`/users/${1}`);
      dispatch(setUser(data));
      console.log('User data fetched:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserDataClb = useCallback(fetchUserData, [dispatch]);

  const fetchMachineData = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get(`/devices/${1}`);
      dispatch(setMachine(data));
      console.log('Machine data fetched:', data);
    } catch (error) {
      console.error('Error fetching machine data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMachineStatistics = async () => {
    try {
      const { data } = await instance.get(`/sensors/statistics/${1}`);
      dispatch(setStatuses(data.statuses));
      console.log('Machine statistics fetched:', data);
    } catch (error) {
      console.error('Error fetching machine statistics:', error);
    }
  };

  const updateMachineData = async () => {
    try {
      await instance.get(`/commands/coffee/read_sensors`);
    } catch (error) {
      console.error('Error updating machine data:', error);
    }
  };

  useEffect(() => {
    fetchUserDataClb();
  }, [fetchUserDataClb]);

  const handleConnectClick = async () => {
    await updateMachineData();
    await fetchMachineData();
    await fetchMachineStatistics();
  };

  return (
    <PageBase>
      <header className='home__header'>
        <h1>Hello{user.name && `, ${user.name}`}</h1>
        <ProfileImage />
      </header>
      <main className='home__main'>
        {Object.keys(machine).length > 0 && machine?.statuses ? (
          <CoffeMachineCard />
        ) : (
          <div className='home__placeholder'>
            <div className='home__placeholder-content'>
              <img src='assets/images/flash_awaits.png' />
              <div>
                <h3>Coffee maker awaits here</h3>
                <p>
                  Connect your coffee maker and start brewing your perfect cup.
                </p>
              </div>
            </div>
            <Button
              variant='secondary'
              loading={loading}
              onClick={handleConnectClick}
            >
              Connect
            </Button>
          </div>
        )}
      </main>
    </PageBase>
  );
};

export default Home;
