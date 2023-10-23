import { FriendsListProps } from "../types";
import Friend from "./friend";

export default function Friends({ friendsList, onHandleSelectFriend }: FriendsListProps) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend friend={friend} key={friend.id} onHandleSelectFriend={onHandleSelectFriend}></Friend>
      ))}
    </ul>
  );
}
