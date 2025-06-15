import type { Coffee } from '../../../types';

export interface CoffeeListProps {
  list: Coffee[];
  onClick: (coffee: Coffee) => void;
}

const CoffeeList: React.FC<CoffeeListProps> = ({ list, onClick }) => {
  return (
    <ul className='coffee-list'>
      {list.map((coffee, index) => (
        <li key={index} className='coffee-list__item'>
          <button onClick={() => onClick(coffee)}>
            <img
              src={coffee.image}
              alt={coffee.name}
              className='coffee-list__image'
            />
            <span className='coffee-list__name'>{coffee.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CoffeeList;
