import { Link } from "react-router-dom";
import styles from "./card.module.css";

function InvestmentPlanCard(props) {
  return (
    <div className={styles.in_card}>
      <h4> {props.title} </h4>
      <div className={styles.card_description}>
        <p> {props.description} </p>
        <span> {props.icon} </span>
      </div>
      <div className={styles.in_card_button_wrapper}>
        <Link to={props.detailsPath}>
          <button type="button" className={`btn ${styles.in_card_button}`}> Learn more </button>
        </Link>
      </div>
    </div>
  );
}

export default InvestmentPlanCard;
