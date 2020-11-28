import PropTypes from "prop-types";

export default function Transactions(props) {
  console.log(
    "🚀 ~ file: Transactionhistory.jsx ~ line 4 ~ Transactions ~ props",
    props
  );
  return (
    <table class="transaction-history">
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
          return (
            <tr key={id}>
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
