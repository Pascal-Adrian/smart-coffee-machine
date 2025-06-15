import { useEffect, useState } from 'react';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CupIcon from '../../../assets/icons/24px/Cup.svg?react';
import Button from '../../Button';

export interface LoadingProps {
  time: number;
  onStop: () => void;
  onDone: () => void;
}

const Loading: React.FC<LoadingProps> = ({ time, onStop, onDone }) => {
  const [progress, setProgress] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(time);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    setRemainingSeconds(time);

    const startTime = Date.now();
    const duration = time * 1000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      const remaining = Math.max(time - Math.floor(elapsed / 1000), 0);

      setProgress(Math.floor(newProgress));
      setRemainingSeconds(remaining);

      if (elapsed >= duration) {
        clearInterval(interval);
        setLoading(false);
        setProgress(100);
        setRemainingSeconds(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [time]);

  const handleButton = () => {
    if (loading) {
      setLoading(false);
      setProgress(0);
      setRemainingSeconds(time);
      onStop();
    } else {
      setLoading(true);
      setProgress(0);
      setRemainingSeconds(time);
      onDone();
    }
  };

  return (
    <div className='loading-container'>
      <div className='loading-container__content'>
        <div className='loading-container__progress'>
          <CircularProgressbarWithChildren
            value={progress}
            styles={buildStyles({
              pathColor: loading ? '#0f0f0f' : '#69C8A6',
            })}
            strokeWidth={4}
          >
            <div>{loading ? `${remainingSeconds}s` : <CupIcon />}</div>
          </CircularProgressbarWithChildren>
        </div>
        <h3>{loading ? 'Brewing...' : 'Enjoy your coffee!'}</h3>
        <p>
          {loading
            ? `Brewing your coffee, please wait...`
            : `Don't forget to put a cup for the next brew.`}
        </p>
      </div>
      {!loading && (
        <Button
          variant='primary'
          onClick={handleButton}
          className='loading-container__button'
          disabled={loading}
        >
          Done
        </Button>
      )}
    </div>
  );
};

export default Loading;
