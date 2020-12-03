import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

export default function Statistic(props) {
  const { title, userStatistic } = props;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.titile}> {title}</h2>}
      <ul className={styles.statList}>
        {userStatistic.map((staisicElement) => {
          return (
            <li className={styles.item} key={staisicElement.id}>
              <span className={styles.label}>{staisicElement.label}</span>
              <span className={styles.percentage}>
                {staisicElement.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

PropTypes.Statistic = {
  title: PropTypes.string,
  userStatistic: PropTypes.array,
};
