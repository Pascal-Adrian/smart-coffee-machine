import ProfileIcon from '../../assets/icons/24px/Profile.svg?react';
import './profile-image.scss';

export interface ProfileImageProps {
  src?: string;
  onClick?: () => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, onClick }) => {
  return (
    <button onClick={onClick} className='profile-image'>
      {src ? (
        <img src={src} alt='Profile' className='profile-image__image' />
      ) : (
        <ProfileIcon />
      )}
    </button>
  );
};

export default ProfileImage;
