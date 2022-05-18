import React from "react";

const InputField = ({ 
    type, 
    value, 
    placeholder, 
    onChange, 
    errorMessage 
}) => {
  return (
    // <div> </div> -> 삭제 <React.Fragment> <React.Fragment> / <> </>
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ></input>
      <br />
      <div style={{ color: "red" }}>{errorMessage}</div>
        </>
  );
};

export default InputField;