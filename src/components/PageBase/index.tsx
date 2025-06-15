import { useState } from 'react';
import BottomNav from '../BottomNav';
import CoffeeOverlay from '../CoffeeOverlay.tsx';
import './page-base.scss';

const PageBase: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  const openOverlay = () => {
    setOverlay(true);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  return (
    <div className='page-base'>
      <div className='page-base__wrapper'>{children}</div>
      <BottomNav connected={true} onClick={openOverlay} />
      <CoffeeOverlay open={overlay} onClose={closeOverlay} />
    </div>
  );
};

export default PageBase;
