import './icon-button.scss';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: React.ReactNode;
  variant?: 'default' | 'transparent' | 'white';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'large',
  disabled = false,
  className = '',
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`icon-button 
        icon-button--${variant}
        ${size ? `icon-button--${size}` : ''} 
        ${disabled ? 'icon-button--disabled' : ''} 
        ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
