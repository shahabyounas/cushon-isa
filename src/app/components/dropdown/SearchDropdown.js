

export function SearchDropDown(props) {
  const opts = ["Cushon", "FTSE 100", "NetWest", "HSBC"];
  const { title = "", options = opts } = props;

  function selectItemHandler(event){
    event.preventDefault()


    if(event.target.value && typeof props.onSelect == 'function'){
        props.onSelect(event.target.value)
    }
  }
  return (
    <>
      { title && <label htmlFor="searchDataList" className="form-label">{title}</label>}
      <input className="form-control" onChange={selectItemHandler} list="datalistOptions" id="searchDataList" placeholder="Type to Choose Funds..." /> 
      <datalist id="datalistOptions">
      {options.map((option) => {
          return (
            <option key={option} value={option} />
          );
        })}
      </datalist>
    </>
  );
}
