import PropTypes from 'prop-types';
import FriendsListItem from '../Friendslistitem/FriendListItem';
import styles from './Friendslist.module.css';

export default function FriendsList(props) {
  return (
    <ul className={styles.friendsList}>
      {/*<!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->*/}
      {props.props.map(friendItem => {
        return <FriendsListItem {...friendItem} />;
      })}
    </ul>
  );
}

PropTypes.props = {
  props: PropTypes.array,
};
