import './label.scss';

export interface LabelProps extends React.PropsWithChildren {
  type?: 'success' | 'warning';
}

const Label: React.FC<LabelProps> = ({ type = 'success', children }) => {
  return <label className={`label label--${type}`}>{children}</label>;
};
export default Label;
