import user from "./data/user.json";
import userSatatisic from "./data/statistical-data.json";
import firendsList from "./data/friends.json";
import transaction from "./data/transactions.json";

import SocialProfile from "./components/socialprofile/Socialprofile";
import TransactionHistory from "./components/transactionhistory/Transactionhistory";
import Statistic from "./components/statistic/Statistic";
import FriendsList from "./components/friendslist/Friendslist";
import styles from "./App.module.css";

export default function App(props) {
  return (
    <div className={styles.container}>
      <div className={styles.userProps}>
        <div>
          <SocialProfile {...user} />
          <Statistic userStatistic={userSatatisic} title="USER STATISTIC" />
        </div>
        <FriendsList props={firendsList} />
      </div>
      <TransactionHistory transaction={transaction} />
    </div>
  );
}
