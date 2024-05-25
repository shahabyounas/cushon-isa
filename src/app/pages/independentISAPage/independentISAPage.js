import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import Card from "../../components/card/Card";
import Toast from "../../components/toast";
import Container from "../../components/container";
import { SearchDropDown } from "../../components/dropdown";
import styles from "./independentisapage.module.css";


const MAX_INVESTMENT_FUNDS = 1
const MAX_FUNDS_SELECTION = "You can only select one funds at the moment"
const FUND_ALREADY_SELECTED = "Please choose a different fund"

function IndependentISAPage() {
  const [funds, setFunds] = useState([]);



  function handleFundsUpdate(fund) {
    if(funds.includes(fund)){
      toast.error(FUND_ALREADY_SELECTED)
      return
    }

    if(funds.length > MAX_INVESTMENT_FUNDS){
      toast.error(MAX_FUNDS_SELECTION)
      return
    }

    setFunds([fund])
  }



  return (
    <Container>
      <Toast />
      <Card>
        <div className={styles.iisa_wrapper}>
          <div>
            <h3> Independent Investment Plans</h3>

            <div className="mb-3 mt-4 fw-bold">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
              <span className="fw-bold"> Selected Funds </span>
              <div>
                <SearchDropDown onSelect={handleFundsUpdate} />
              </div>
              </div>
              <ul className="list-group mt-3">
                {funds.map((fund) => {
                  return (
                    <li className="list-group-item" key={fund}>
                      {fund}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="form-label fw-bold">
                Amount
              </label>
              <input
                type="email"
                className="form-control"
                id="amount"
                placeholder="£25.00"
              />
            </div>

          <div className="align-self-end mt-3">
          <div className={styles.in_card_button_wrapper}>
            <Link>
              <button type="button" className={`btn ${styles.in_card_button}`}>
                Confirm Payment
              </button>
            </Link>
          </div>
        </div>
        </div>
      </Card>
    </Container>
  );
}

export default IndependentISAPage;
