import PropTypes from 'prop-types';
import {
  Friend,
  FriendName,
  Status,
} from '../FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Friend key={id}>
      <Status isOnline={isOnline}></Status>
      <img class="avatar" src={avatar} alt={name} width="90" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};
