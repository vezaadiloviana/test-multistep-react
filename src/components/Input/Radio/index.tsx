type RadioProps = {
  label: string;
  options: { label: string; value: string }[];
  required: boolean;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({ label, options, required, selectedValue, onChange }) => (
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 text-start">
      {label}
    </label>
    <div className="flex">
      {options.map((option, idx) => (
        <div className="flex items-center me-4" key={idx}>
          <input
            id={option.value}
            type="radio"
            name={label.toLowerCase()}
            value={option.value}
            checked={selectedValue === option.value}
            className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            required={required}
            onChange={onChange}
          />
          <label
            htmlFor={option.value}
            className="ms-2 text-sm font-medium text-gray-900 cursor-pointer"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default Radio;