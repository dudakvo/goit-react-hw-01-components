import PropTypes from "prop-types";
import FriendsListItem from "./FriendListItem";

export default function Friendslist(props) {
  console.log("My array: ", props);
  return (
    <ul class="friend-list">
      {/*<!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->*/}
      {props.props.map((friendItem) => {
        return <FriendsListItem {...friendItem} />;
      })}
    </ul>
  );
}

PropTypes.props = {
  props: PropTypes.array,
};
