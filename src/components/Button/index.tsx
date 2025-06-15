import Spinner from '../Spinner';
import './button.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'normal';
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  icon = null,
  variant = 'primary',
  size = 'normal',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`button 
        button--${variant} 
        ${size ? `button--${size}` : ''} 
        ${disabled ? 'button--disabled' : ''} 
        ${loading ? 'button--loading' : ''}
        ${className}`}
    >
      {loading ? (
        <Spinner className='button__spinner' />
      ) : (
        <>
          {icon && <span className='button__icon'>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
