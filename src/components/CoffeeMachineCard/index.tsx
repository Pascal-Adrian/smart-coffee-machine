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

const CoffeMachineCard: React.FC = () => {
  const { name, image, statuses } = {
    name: 'Caffe Corso',
    image: 'assets/images/coffee_machine.png',
    statuses: {
      water: {
        status: 'perfect',
      },
      beans: {
        status: 'perfect',
      },
      cleaning: {
        status: 'perfect',
      },
      cup: {
        status: 'perfect',
      },
    },
  };

  const navigate = useNavigate();

  return (
    <section className='coffee-machine-card'>
      <div className='coffee-machine-card__header'>
        <h2>{name}</h2>
        <Label>Ready</Label>
        <IconButton
          icon={<ChevronRight />}
          variant={'transparent'}
          className='coffee-machine-card__header-button'
          onClick={() => navigate('/machine')}
        />
      </div>
      <div className='coffee-machine-card__body'>
        <img src={image} alt={name} />
        <div className='coffee-machine-card__statuses'>
          {/* @ts-expect-error - Water status is hardcoded temporarily */}
          <State type={statuses.water.status} icon={<WaterIcon />} />
          {/* @ts-expect-error - Beans status is hardcoded temporarily */}
          <State type={statuses.beans.status} icon={<BeanIcon />} />
          {/* @ts-expect-error - Cleaning status is hardcoded temporarily */}
          <State type={statuses.cleaning.status} icon={<CleanIcon />} />
          {/* @ts-expect-error - Cup status is hardcoded temporarily */}
          <State type={statuses.cup.status} icon={<CupIcon />} />
        </div>
      </div>
    </section>
  );
};

export default CoffeMachineCard;
