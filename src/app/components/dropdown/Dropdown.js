
import styles from './dropdown.module.css'
function Dropdown(props) {
  const opts = ["Cushon", "FTSE 100", "NetWest", "HSBC"];
  const { title = "Choose Funds", options = opts } = props;

  function selectItemHandler(option){
    if(typeof props.onSelect == 'function'){
        props.onSelect(option)
    }
  }
  return (
    <div className={`dropdown ${styles['dropdown-menu']}`}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {options.map((option) => {
          return (
            <li key={option} className="dropdown-item" role="button" onClick={() => selectItemHandler(option)}>
              <span>
                {option}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
