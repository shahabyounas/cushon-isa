import { useState } from "react";
import Card from "../../components/card/Card";
import Container from "../../components/container";
import Dropdown from "../../components/dropdown";
import styles from "./independentisapage.module.css";
import { Link } from "react-router-dom";

function IndependentISAPage() {
  const [funds, setFunds] = useState([]);

  function handleFundsUpdate(fund) {
    const fundSet = new Set(funds);
    fundSet.add(fund);
    setFunds(Array.from(fundSet));
  }

  return (
    <Container>
      <Card>
        <div className={styles.iisa_wrapper}>
          <div>
            <h3> Independent Investment Plans</h3>
            <span className="fw-bold"> Selected Funds </span>
            <ul className="list-group mt-3">
              {funds.map((fund) => {
                return (
                  <li className="list-group-item" key={fund}>
                    {fund}
                  </li>
                );
              })}
            </ul>

            <div className="mb-3 mt-4 fw-bold">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="email"
                className="form-control"
                id="amount"
                placeholder="£25.00"
              />
            </div>
          </div>
          <div className={styles.iisa_dropdown}>
            <Dropdown onSelect={handleFundsUpdate} />
          </div>
        </div>
        <div className="align-self-end">
          <div className={styles.in_card_button_wrapper}>
            <Link>
              <button type="button" className={`btn ${styles.in_card_button}`}>
                Confirm Payment
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default IndependentISAPage;
