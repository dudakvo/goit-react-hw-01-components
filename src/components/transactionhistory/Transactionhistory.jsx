import PropTypes from "prop-types";
import styles from "./Transactionhistory.module.css";

export default function Transactions(props) {
  let item = 0;
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.transaction.map((transaction) => {
          const { id, type, amount, currency } = transaction;
          item += 1;
          return (
            <tr key={id} className={item % 2 ? styles.even : styles.odd}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

PropTypes.Transactions = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
