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

const CoffeeMachine: React.FC = () => {
  const navigate = useNavigate();

  const { name, image, state, ready, statistics } = {
    name: 'Caffe Corso',
    image: 'assets/images/coffee_machine.png',
    ready: true,
    state: {
      water: {
        status: 'perfect',
        number: 50,
      },
      beans: {
        status: 'perfect',
        number: 50,
      },
      cup: {
        status: 'perfect',
        number: 4,
      },
      cleaning: {
        status: 'perfect',
        number: 50,
      },
    },
    statistics: {
      coffees: 100,
      time_in_use: 94,
      cleaned: 4,
    },
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
    cup: {
      suffix: 'cups',
      text: 'made today',
    },
  };

  const statisticsTextMap = {
    coffees: {
      suffix: 'cups',
      text: 'Made coffee',
    },
    time_in_use: {
      suffix: 'days',
      text: 'Time in use',
    },
    cleaned: {
      suffix: 'times',
      text: 'Cleaned',
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
        <h1>{name}</h1>
        <IconButton icon={<HelpIcon />} variant='white' />
      </header>
      <section className='coffee-machine__main-section'>
        <div className='coffee-machine__image'>
          <img src={image} alt={name} />
          <Label type={ready ? 'success' : 'warning'}>
            {ready ? 'Ready' : 'Not Ready'}
          </Label>
        </div>
        <div className='coffee-machine__controls'>
          <div>
            <IconButton icon={<RinseIcon />} variant='white' />
            <label>Rinse</label>
          </div>
          <div>
            <IconButton icon={<SleepIcon />} variant='white' />
            <label>Sleep</label>
          </div>
          <div>
            <IconButton icon={<CleanIcon />} variant='white' />
            <label>Clean</label>
          </div>
        </div>
      </section>
      <section className='coffee-machine__summary'>
        <h3>Summary</h3>
        <div className='coffee-machine__summary-cards'>
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className='coffee-machine__summary-card'>
              <State
                type={value.status as StateType}
                icon={iconsMap[key as IconType]}
              />
              <div>
                <h4>
                  {value.number}{' '}
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
          {Object.entries(statistics).map(([key, value]) => (
            <li key={key}>
              <h4>
                {statisticsTextMap[key as keyof typeof statisticsTextMap].text}
              </h4>
              <span>
                {value}{' '}
                {
                  statisticsTextMap[key as keyof typeof statisticsTextMap]
                    .suffix
                }
              </span>
            </li>
          ))}
        </ul>
      </section>
    </PageBase>
  );
};

export default CoffeeMachine;
