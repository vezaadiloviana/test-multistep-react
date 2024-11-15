type TextFieldProps = {
  label: string;
  placeholder?: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, required, value, onChange }) => (
  <div className="mb-5">
    <label
      htmlFor={label.toLowerCase()}
      className="block mb-2 text-sm font-medium text-gray-900 text-start"
    >
      {label}
    </label>
    <input
      type="text"
      id={label.toLowerCase()}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextField;

