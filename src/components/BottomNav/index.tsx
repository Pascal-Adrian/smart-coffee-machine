import { Link } from 'react-router';
import HouseIcon from '../../assets/icons/24px/House.svg?react';
import CupIcon from '../../assets/icons/24px/Cup.svg?react';
import StatisticsIcon from '../../assets/icons/24px/mage_chart-fill.svg?react';
import Button from '../Button';
import './bottom-nav.scss';

export interface BottomNavProps {
  connected?: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ connected = false }) => {
  return (
    <nav className='bottom-nav'>
      <ul>
        <li>
          <Link to='/' className='bottom-nav__link'>
            <HouseIcon />
          </Link>
        </li>
        {connected && (
          <li>
            <Button className='bottom-nav__button'>
              <CupIcon />
            </Button>
          </li>
        )}
        <li>
          <Link to='/statistics' className='bottom-nav__link'>
            <StatisticsIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
