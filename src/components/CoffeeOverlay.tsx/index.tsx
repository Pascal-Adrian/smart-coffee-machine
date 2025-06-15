import { useState } from 'react';
import Overlay from '../Overlay';
import './coffee-overlay.scss';
import Loading from './components/Loading';
import CoffeeList from './components/CoffeeList';
import type { Coffee } from '../../types';
import instance from '../../api/config';

export interface CoffeeOverlayProps {
  open: boolean;
  onClose: () => void;
}

const CoffeeOverlay: React.FC<CoffeeOverlayProps> = ({ open, onClose }) => {
  const [preparing, setPreparing] = useState<Coffee | null>(null);

  const handleClick = async (coffee: Coffee) => {
    setPreparing(coffee);
    try {
      await instance.post(`commands/coffee/${coffee.type}`);
    } catch (error) {
      console.error('Error preparing coffee:', error);
      setPreparing(null);
    }
  };

  const handleStop = () => {
    setPreparing(null);
    onClose();
  };

  const handleDone = () => {
    setPreparing(null);
    onClose();
  };

  const coffeeList: Coffee[] = [
    {
      name: 'Espresso',
      image: 'assets/images/espresso.png',
      type: 'single_brew',
      time: 30,
    },
    {
      name: 'Double Espresso',
      image: 'assets/images/espresso-double.png',
      type: 'double_brew',
      time: 45,
    },
  ];

  return (
    <Overlay open={open} onClose={onClose} closable={!preparing}>
      {preparing ? (
        <Loading
          time={preparing?.time}
          onStop={handleStop}
          onDone={handleDone}
        />
      ) : (
        <CoffeeList list={coffeeList} onClick={handleClick} />
      )}
    </Overlay>
  );
};

export default CoffeeOverlay;
