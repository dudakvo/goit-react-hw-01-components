import PropTypes from "prop-types";
import styles from "./Friendslistitem.module.css";

export default function FriendListItem(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <li key={id} className={styles.container}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

PropTypes.props = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
