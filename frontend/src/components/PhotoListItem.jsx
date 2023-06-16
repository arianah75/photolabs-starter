import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  const [isFavorited, setIsFavorited] = useState(false); // new state variable

  const handleFavIconClick = () => {
    setIsFavorited(!isFavorited); // flip the isFavorited state
  }

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Image by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info">
          <h2>{username}</h2>
          <p>Photo ID: {id}</p>
          <p className="photo-list__user-location">Location: {location.city}, {location.country}</p>
        </div>
      </div>
      <div onClick={handleFavIconClick}> {/* Added div wrapper here */}
        <FavIcon favorited={isFavorited} fill={isFavorited ? '#C80000' : '#EEEEEE'} /> 
      </div>
    </div>
  );
}

PhotoListItem.defaultProps = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada',
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: 'Joe Example',
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
