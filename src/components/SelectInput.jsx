import React from "react";
import { useTheme } from "../hooks";

function SelectInput({
  onChange,
  value,
  options = [],
  defaultOptionText = "Select",
}) {
  const { isLightTheme } = useTheme();

  const selectClass = isLightTheme
    ? "form-select"
    : "form-select bg-dark text-light border border-secondary";

  return (
    <select
      onChange={onChange}
      value={value}
      className={`form-select text-capitalize ${selectClass}`}
    >
      <option value="" disabled>
        {defaultOptionText}
      </option>
      {options.map((opt, index) => {
        return (
          <option value={opt} key={index}>
            {opt}
          </option>
        );
      })}
      opt
    </select>
  );
}

export default SelectInput;
