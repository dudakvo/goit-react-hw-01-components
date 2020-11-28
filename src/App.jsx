import user from "./data/user.json";
import userSatatisic from "./data/statistical-data.json";
import firendsList from "./data/friends.json";
import transaction from "./data/transactions.json";

import Socialprofile from "./components/Socialprofile";
import Transactionhistory from "./components/Transactionhistory";
import Statistic from "./components/Statistic";
import Friendslist from "./components/Friendslist";

export default function App(props) {
  return (
    <div>
      <Socialprofile {...user} />
      <Statistic userStatistic={userSatatisic} title="USER STATISTIC" />
      <Friendslist props={firendsList} />
      <Transactionhistory transaction={transaction} />
    </div>
  );
}
