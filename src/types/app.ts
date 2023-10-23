export interface FriendData {
  id: number;
  imageSrc: string;
  name: string;
  info?: string;
  selected: boolean;
  owes: number;
}

export interface SideBarProps {
  friendsList: FriendData[];
  onAddFriend: (friendData: FriendData) => void;
  onHandleSelectFriend: (friendData: FriendData) => void;
}

export interface FriendsListProps {
  friendsList: FriendData[];
  onHandleSelectFriend: (friendData: FriendData) => void;
}

export interface FriendProps {
  friend: FriendData;
  onHandleSelectFriend: (friendData: FriendData) => void;
}
