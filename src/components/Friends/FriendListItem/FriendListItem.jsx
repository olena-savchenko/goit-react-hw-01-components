import PropTypes from 'prop-types';
import { Friend, FriendName, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline} />
      <img src={avatar} alt={name} width="90" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
