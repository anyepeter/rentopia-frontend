import { useState } from "react";

const SelectDropdown = ({ name, value, options }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  console.log(selectedValue)
  const handleOptions = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
  };

  return (
    <select name={name} value={selectedValue} onChange={handleOptions}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;