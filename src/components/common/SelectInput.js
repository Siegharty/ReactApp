import React from "react";


function SelectInput(props)
{
    let wrapperClass = "form-group";

    if(props.error.length > 0) {
      wrapperClass += " has_error";
    }
    

    return (
      <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <select
            id={props.id}
            type="text"
            onChange={props.onChange}
            name={props.name}
            className="form-control"
            value={props.value}
          >
            <OptionInput />
          </select>
        </div>
        {props.error && (<div className="alert alert-danger">{props.error}</div>)}
      </div>
    );
}

function OptionInput(){
  return(
    <>
    <option value="" />
    <option value="1">Cory House</option>
    <option value="2">Scott Allen</option>
    </>
  );

}




export default SelectInput;

