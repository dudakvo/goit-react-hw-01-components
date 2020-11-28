export default function FriendListItem(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <li key={id}>
      <span class="status">{isOnline ? "оонлайн" : "оффлайн"}</span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
