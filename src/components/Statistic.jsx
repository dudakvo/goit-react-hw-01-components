import PropTypes from "prop-types";

export default function Statistic(props) {
  const { title, userStatistic } = props;
  return (
    <section class="statistics">
      {title && <h2 class="title"> {title}</h2>}
      <ul class="stat-list">
        {userStatistic.map((staisicElement) => {
          return (
            <li class="item" key={staisicElement.id}>
              <span class="label">{staisicElement.label}</span>
              <span class="percentage">{staisicElement.percentage}</span>
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
