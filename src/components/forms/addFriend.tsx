import { FormEvent, useState } from "react";
import { FriendData } from "../../types";

export default function AddFriend({ onAddFriend }: { onAddFriend: (friendData: FriendData) => void }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleAddFriend(e: FormEvent) {
    e.preventDefault();
    if (name && imgUrl) {
      onAddFriend({
        id: Date.now(),
        imageSrc: imgUrl,
        name: name,
        info: "",
        selected: false,
        owes: 0,
      });
      setName("");
      setImgUrl("");
    }
  }
  return (
    <form className="form-add-friend" onSubmit={(e) => handleAddFriend(e)}>
      <label htmlFor="friendName">🙍Name</label>
      <input type="text" id="friendName" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="imgUrl">📷Image URL</label>
      <input type="text" id="imgUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />

      <button className="button">Add Friend</button>
    </form>
  );
}
