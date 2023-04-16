// import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <span class="status">Online: {friend.isOnline}</span>
            <img
              class="avatar"
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
