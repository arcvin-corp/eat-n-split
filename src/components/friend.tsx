import { ReactElement } from "react";
import { FriendProps } from "../types";

export default function Friend({ friend, onHandleSelectFriend }: FriendProps) {
  function handleSelectFriend() {
    onHandleSelectFriend(friend);
  }

  let infoElement: ReactElement | null = null;
  if (friend.owes === 0) {
    infoElement = <p>You and {friend.name} are even</p>;
  } else if (friend.owes < 0) {
    infoElement = (
      <p className="green">
        {friend.name} owes you {Math.abs(friend.owes)}€
      </p>
    );
  } else {
    infoElement = (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.owes)}€
      </p>
    );
  }

  return (
    <li>
      <img src={friend.imageSrc} alt={friend.name} />
      <h3>{friend.name}</h3>
      {infoElement}
      <button className="button" onClick={handleSelectFriend}>
        {friend.selected ? "Close" : "Select"}
      </button>
    </li>
  );
}
