import Friends from "./friendsList";
import AddFriend from "./forms/addFriend";
import { SideBarProps } from "../types";
import { useState } from "react";

function SideBar({ friendsList, onAddFriend, onHandleSelectFriend }: SideBarProps) {
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  function toggleAddFriend() {
    setIsAddFriendOpen((isAddFriendOpen) => !isAddFriendOpen);
  }

  return (
    <div className="sidebar">
      <Friends friendsList={friendsList} onHandleSelectFriend={onHandleSelectFriend}></Friends>

      {!isAddFriendOpen && (
        <button className="button" onClick={toggleAddFriend}>
          Add Friend
        </button>
      )}
      {isAddFriendOpen && <AddFriend onAddFriend={onAddFriend}></AddFriend>}
      {isAddFriendOpen && (
        <button className="button" onClick={toggleAddFriend}>
          Close
        </button>
      )}
    </div>
  );
}

export default SideBar;
