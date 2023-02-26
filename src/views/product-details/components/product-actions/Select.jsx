const Select = ({ label, value, options, onChange }) => {
  return (
    <div key={label}>
      <label>
        {label} :{' '}
        <select value={value} onChange={onChange}>
          <option value={null} hidden disabled={options.length === 1}>
            Choose
          </option>
          {options.map((option) => (
            <option
              key={option.code}
              value={options.length > 1 ? option.code : options[0].code}
            >
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
