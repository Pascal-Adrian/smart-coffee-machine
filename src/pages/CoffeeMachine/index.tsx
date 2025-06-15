import PageBase from '../../components/PageBase';
import Label from '../../components/Label';
import State, { type StateType } from '../../components/State';
import IconButton from '../../components/IconButton';
import Arrow from '../../assets/icons/24px/Arrow.svg?react';
import HelpIcon from '../../assets/icons/24px/Help.svg?react';
import RinseIcon from '../../assets/icons/24px/Rinse.svg?react';
import SleepIcon from '../../assets/icons/24px/Sleep.svg?react';
import CleanIcon from '../../assets/icons/24px/Clean.svg?react';
import iconsMap, { type IconType } from '../../utils/iconsMap';
import './coffee-machine.scss';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectMachine, togglePowerState } from '../../store/machineSlice';
import instance from '../../api/config';

const CoffeeMachine: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const machine = useAppSelector(selectMachine);

  const rinseCall = async () => {
    try {
      await instance.post(`commands/coffee/cleaning`);
      dispatch(togglePowerState());
      setTimeout(() => {
        dispatch(togglePowerState());
      }, 30000);
    } catch (error) {
      console.error('Error sending rinse command:', error);
    }
  };

  const sleepCall = async () => {
    try {
      await instance.post(`commands/coffee/power_toggle`);
      dispatch(togglePowerState());
    } catch (error) {
      console.error('Error sending sleep command:', error);
    }
  };

  const stateTextMap = {
    water: {
      suffix: '%',
      text: 'water',
    },
    beans: {
      suffix: '%',
      text: 'beans',
    },
    cleaning: {
      suffix: 'days',
      text: 'cleaning',
    },
    cups: {
      suffix: 'cups',
      text: 'made today',
    },
  };

  return (
    <PageBase>
      <header className='coffee-machine__header'>
        <IconButton
          icon={<Arrow />}
          variant='white'
          onClick={() => navigate(-1)}
        />
        <h1>{machine.device_name}</h1>
        <IconButton icon={<HelpIcon />} variant='white' />
      </header>
      <section className='coffee-machine__main-section'>
        <div className='coffee-machine__image'>
          <img
            src={'assets/images/coffee_machine.png'}
            alt={machine.device_name}
          />
          <Label type={machine.is_powered_on ? 'success' : 'warning'}>
            {machine.is_powered_on ? 'Ready' : 'Not Ready'}
          </Label>
        </div>
        <div className='coffee-machine__controls'>
          <div>
            <IconButton
              icon={<RinseIcon />}
              variant='white'
              onClick={rinseCall}
              disabled={!machine.is_powered_on}
            />
            <label>Rinse</label>
          </div>
          <div>
            <IconButton
              icon={<SleepIcon />}
              variant='white'
              onClick={sleepCall}
            />
            <label>Sleep</label>
          </div>
          <div>
            <IconButton
              icon={<CleanIcon />}
              variant='white'
              disabled={!machine.is_powered_on}
            />
            <label>Clean</label>
          </div>
        </div>
      </section>
      <section className='coffee-machine__summary'>
        <h3>Summary</h3>
        <div className='coffee-machine__summary-cards'>
          {machine.statuses &&
            Object.entries(machine.statuses).map(([key, value]) => (
              <div key={key} className='coffee-machine__summary-card'>
                <State
                  type={value.status as StateType}
                  icon={iconsMap[key as IconType]}
                />
                <div>
                  <h4>
                    {value.value}{' '}
                    {stateTextMap[key as keyof typeof stateTextMap].suffix}
                  </h4>
                  <span>
                    {stateTextMap[key as keyof typeof stateTextMap].text}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className='coffee-machine__statistics'>
        <h3>Statistics</h3>
        <ul className='coffee-machine__statistics-list'>
          <li>
            <h4>Made coffee</h4>
            <span>{machine.number_of_coffee} cups</span>
          </li>
          <li>
            <h4>Time in use</h4>
            <span>{machine.total_active_time} minutes</span>
          </li>
          <li>
            <h4>Cleaned</h4>
            <span>{machine.statuses?.cleaning.value} days ago</span>
          </li>
        </ul>
      </section>
    </PageBase>
  );
};

export default CoffeeMachine;
