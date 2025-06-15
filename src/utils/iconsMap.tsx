import WaterIcon from '../assets/icons/16px/Water.svg?react';
import BeanIcon from '../assets/icons/16px/Bean.svg?react';
import CleanIcon from '../assets/icons/16px/Clean.svg?react';
import CupIcon from '../assets/icons/16px/Cup.svg?react';

const iconsMap = {
  water: <WaterIcon />,
  beans: <BeanIcon />,
  cleaning: <CleanIcon />,
  cup: <CupIcon />,
};

export type IconType = keyof typeof iconsMap;

export default iconsMap;
