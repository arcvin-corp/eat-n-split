import { useState } from "react";
import SideBar from "./components/sidebar";
import SplitBill from "./components/forms/splitBill";
import { FriendData } from "./types";

export default function App() {
  const [friendsList, setFriendsList] = useState<FriendData[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<FriendData>();

  function handleAddFriend(friendData: FriendData) {
    setFriendsList((friendsList) => [...friendsList, friendData]);
  }

  function handleSelectFriend(friendData: FriendData) {
    setFriendsList((friendsList) =>
      friendsList.map((friend) => {
        if (friend.id === friendData.id) {
          const changedFriendData = { ...friend, selected: !friend.selected };
          setSelectedFriend(changedFriendData);
          return changedFriendData;
        } else {
          return { ...friend, selected: false };
        }
      })
    );
  }

  function handleSplitBill(id: number, amount: number) {
    setFriendsList((friendsList) =>
      friendsList.map((friend) => {
        if (friend.id === id) {
          return { ...friend, owes: friend.owes + amount };
        } else {
          return { ...friend };
        }
      })
    );
  }

  return (
    <div className="app">
      <SideBar
        friendsList={friendsList}
        onAddFriend={handleAddFriend}
        onHandleSelectFriend={handleSelectFriend}
      ></SideBar>
      {selectedFriend && <SplitBill selectedFriend={selectedFriend} onHandleSplitBill={handleSplitBill}></SplitBill>}
    </div>
  );
}
