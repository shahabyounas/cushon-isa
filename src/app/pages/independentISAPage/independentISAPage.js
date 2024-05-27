import { useState } from "react";
import { toast } from 'react-toastify'
import Card from "../../components/card/Card";
import Toast from "../../components/toast";
import Container from "../../components/container";
import PaymentConfirmModal from "../../components/modal/PaymentConfirmModal";
import { SearchDropDown } from "../../components/dropdown";
import Modal from "../../components/modal";
import styles from "./independentisapage.module.css";


const MAX_INVESTMENT_FUNDS = 1
const MAX_FUNDS_SELECTION = "You can only select one funds at the moment"
const FUND_ALREADY_SELECTED = "Please choose a different fund"

function IndependentISAPage() {
  const [funds, setFunds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ amount: 0, fund: null})
  function handleOpenModal(){
    setIsModalOpen(true)
  }

  function handleCloseModal(){
    setIsModalOpen(false)
  }

  function onConfirm(){
    // Call the database
  }

  function handleFormChange(e){
    e.preventDefault()

    setFormData(pre => ({ ...pre, [e.target.name] : e.target.value }))
  }


  function handleFundsUpdate(fund) {
    if(funds.includes(fund)){
      toast.error(FUND_ALREADY_SELECTED)
      return
    }

    if(funds.length > MAX_INVESTMENT_FUNDS){
      toast.error(MAX_FUNDS_SELECTION)
      return
    }

    setFormData(pre => ({ ...pre, fund }))
    setFunds([fund])
  }

  return (
    <Container>
      <Modal 
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={onConfirm}
        >
          <PaymentConfirmModal amount={formData.amount} />
      </Modal>
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
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="£25.00"
                onChange={handleFormChange}
              />
            </div>

          <div className="align-self-end mt-3">
          <div className={styles.in_card_button_wrapper}>
              <button type="button" onClick={handleOpenModal} className={`btn ${styles.in_card_button}`}>
                Confirm Payment
              </button>
          </div>
        </div>
        </div>
      </Card>
    </Container>
  );
}

export default IndependentISAPage;
