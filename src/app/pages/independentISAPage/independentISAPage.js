import { useState } from "react";
import { toast } from 'react-toastify'
import Card from "../../components/card/Card";
import Toast from "../../components/toast";
import Container from "../../components/container";
import PaymentConfirmModal from "../../components/modal/PaymentConfirmModal";
import { SearchDropDown } from "../../components/dropdown";
import Modal from "../../components/modal";
import styles from "./independentisapage.module.css";
import { useISAForm } from "./hooks/useISAForm";


const MAX_INVESTMENT_FUNDS = 1
const MAX_FUNDS_SELECTION = "You can only select one funds at the moment"
const FUND_ALREADY_SELECTED = "Please choose a different fund"

function IndependentISAPage() {
  const [funds, setFunds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmBtnDisabled, setConfirmBtnDisabled] = useState(true)
  const {
    state: formData , 
    eventHandler: handleFormChange, 
    updateStateHandler} = useISAForm({ amount: 0, fund: null})

  function handleCloseModal(){
    setIsModalOpen(false)
  }

  function validate(data, requiredKeys = []){

    let isValid = true;


    const keys = Object.keys(data).filter((key) => requiredKeys.includes(key))

    let missingKeys= []

    keys.forEach((field) => {
      if(!formData[field]){
        missingKeys.push(field)
      }
    })

    if(missingKeys.length){
      isValid = false
    }

    return {
      isValid, 
      missingKeys
    }
  }
  function handleOnConfirm(data){

    const validateForm = validate(formData, ['fund', 'amount'])

    if(!validateForm.isValid){
       toast.error(`The require field(s) ${validateForm.missingKeys.join(",")} missing`)
       return
    }

    if(data.cAmount != formData.amount){
      toast.error('Please enter the correct investment amount')
      return
    }else {
      setConfirmBtnDisabled(false)
    }

    setIsModalOpen(true)
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

    updateStateHandler(fund)
    setFunds([fund])
  }

  return (
    <Container>
      <Modal 
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleOnConfirm}
        confirmBtnDisabled={confirmBtnDisabled}
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
              <button type="button" onClick={handleOnConfirm} className={`btn ${styles.in_card_button}`}>
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
