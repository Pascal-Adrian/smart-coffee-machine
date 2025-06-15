import IconButton from '../IconButton';
import Label from '../Label';
import ChevronRight from '../../assets/icons/24px/Chevron - Right.svg?react';
import WaterIcon from '../../assets/icons/16px/Water.svg?react';
import BeanIcon from '../../assets/icons/16px/Bean.svg?react';
import CleanIcon from '../../assets/icons/16px/Clean.svg?react';
import CupIcon from '../../assets/icons/16px/Cup.svg?react';
import './coffee-machine-card.scss';
import State from '../State';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectMachine } from '../../store/machineSlice';

const CoffeMachineCard: React.FC = () => {
  const machine = useSelector(selectMachine);

  const navigate = useNavigate();

  return (
    <section className='coffee-machine-card'>
      <div className='coffee-machine-card__header'>
        <h2>{machine.device_name}</h2>
        <Label type={machine.is_powered_on ? 'success' : 'warning'}>
          {machine.is_powered_on ? 'Ready' : 'Not Ready'}
        </Label>
        <IconButton
          icon={<ChevronRight />}
          variant={'transparent'}
          className='coffee-machine-card__header-button'
          onClick={() => navigate('/machine')}
        />
      </div>
      <div className='coffee-machine-card__body'>
        <img
          src={'assets/images/coffee_machine.png'}
          alt={machine.device_name}
        />
        {machine.statuses && (
          <div className='coffee-machine-card__statuses'>
            {/* @ts-expect-error - Water status is hardcoded temporarily */}
            <State type={machine.statuses?.water.status} icon={<WaterIcon />} />
            {/* @ts-expect-error - Beans status is hardcoded temporarily */}
            <State type={machine.statuses?.beans.status} icon={<BeanIcon />} />
            {/* @ts-expect-error - Cleaning status is hardcoded temporarily */}
            <State
              type={machine.statuses?.cleaning.status}
              icon={<CleanIcon />}
            />
            {/* @ts-expect-error - Cup status is hardcoded temporarily */}
            <State type={machine.statuses?.cups.status} icon={<CupIcon />} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeMachineCard;
