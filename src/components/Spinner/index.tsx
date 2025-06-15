import SpinnerIcon from '../../assets/icons/24px/Spinner.svg?react';
import type { SVGRProps } from '../../types/commonInterfaces';
import './spinner.scss';

const Spinner: React.FC<SVGRProps> = ({ className = '', ...props }) => {
  return <SpinnerIcon {...props} className={`spinner ${className}`} />;
};

export default Spinner;
