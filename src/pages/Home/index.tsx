import CoffeMachineCard from '../../components/CoffeeMachineCard';
import PageBase from '../../components/PageBase';
import ProfileImage from '../../components/ProfileImage';
import './home.scss';

const Home: React.FC = () => {
  const { name } = {
    name: 'Adrian',
  };

  return (
    <PageBase>
      <header className='home__header'>
        <h1>Hello, {name}</h1>
        <ProfileImage />
      </header>
      <main className='home__main'>
        <CoffeMachineCard />
      </main>
    </PageBase>
  );
};

export default Home;
