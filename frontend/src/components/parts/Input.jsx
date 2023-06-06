import React from 'react';

function Input({value,placeholder,type,name,changeValue}) {
  return (
    <div>
    <input value={value} type={type} placeholder={placeholder} name={name} onChange={(e) => changeValue(e.target.value)} />
    </div>
  );
}

export default Input;
