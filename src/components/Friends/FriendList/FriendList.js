import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          id={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendListItem>
      ))}
    </ul>
  );
};
