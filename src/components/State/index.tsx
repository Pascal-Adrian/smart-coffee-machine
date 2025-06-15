import Perfect from '../../assets/state/Perfect.svg?react';
import Good from '../../assets/state/Good.svg?react';
import Low from '../../assets/state/Low.svg?react';
import Critical from '../../assets/state/Critical.svg?react';
import { createElement } from 'react';
import './state.scss';

export type StateType = 'perfect' | 'good' | 'low' | 'critical';

export interface StateProps {
  type: StateType;
  icon: React.ReactNode;
}

const stateMap: Record<StateProps['type'], React.FC> = {
  perfect: Perfect,
  good: Good,
  low: Low,
  critical: Critical,
};

const State: React.FC<StateProps> = ({ type, icon, ...props }) => {
  return (
    <div className='state'>
      {createElement(stateMap[type], {
        ...props,
      })}
      <div className='state__icon'>{icon}</div>
    </div>
  );
};

export default State;
