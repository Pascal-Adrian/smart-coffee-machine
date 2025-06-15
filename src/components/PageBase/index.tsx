import BottomNav from '../BottomNav';
import Overlay from '../Overlay';
import './page-base.scss';

const PageBase: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='page-base'>
      {children}
      <BottomNav connected={true} />
      <Overlay>
        <h1>Some content</h1>
      </Overlay>
    </div>
  );
};

export default PageBase;
