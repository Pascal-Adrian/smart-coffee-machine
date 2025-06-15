import { useEffect, useState } from 'react';
import './overlay.scss';
import IconButton from '../IconButton';
import CloseIcon from '../../assets/icons/24px/Cross.svg?react';

export interface OverlayProps extends React.PropsWithChildren {
  open?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({
  open = true,
  closable = true,
  onClose,
  children,
}) => {
  const [state, setState] = useState(open);

  useEffect(() => {
    setState(open);
  }, [open]);

  const handleClose = () => {
    if (closable && onClose) {
      onClose();
    } else {
      setState(false);
    }
  };

  if (!state) {
    return null;
  }

  return (
    <div className='overlay'>
      <div className='overlay__content'>
        {closable && (
          <div>
            <IconButton
              variant='default'
              icon={<CloseIcon />}
              onClick={handleClose}
            />
          </div>
        )}
        <div className='overlay__main'>{children}</div>
      </div>
    </div>
  );
};

export default Overlay;
