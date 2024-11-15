type SelectProps = {
  label: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ label, options, placeholder, required, value, onChange }) => (
  <div className="mb-5">
    <label
      htmlFor={label.toLowerCase()}
      className="block mb-2 text-sm font-medium text-gray-900 text-start"
    >
      {label}
    </label>
    <select
      id={label.toLowerCase()}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
      required={required}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {/* {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))} */}
      {options?.map((option, idx) => (
        <option key={idx} value={typeof option === 'string' ? option : option.value}>
          {typeof option === 'string' ? option : option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;