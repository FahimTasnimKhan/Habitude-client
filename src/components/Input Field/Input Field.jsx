// ---------------------------------------------------------------------------
// Input Field Component - UI Only (No register, No errors)
// ---------------------------------------------------------------------------

const InputField = ({
  name,
  label,
  icon: Icon,
  type,
  placeholder,
  defaultValue,
  rows = 3,
  options = [],
}) => {
  const isTextArea = type === 'textarea';
  const isSelect = type === 'select';

  const baseStyle = 'border border-gray-300 text-white bg-white/10 rounded-lg';

  return (
    <div>
      {/* Label */}
      <label htmlFor={name} className="text-[#E6EAD0]/90 text-sm font-medium">
        {label}
      </label>

      {/* Wrapper */}
      <div className="relative">
        {/* Icon */}
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon />
          </div>
        )}

        {/* TextArea */}
        {isTextArea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            rows={rows}
            defaultValue={defaultValue}
            className={`${baseStyle} mt-1 block w-full px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 sm:text-sm`}
          ></textarea>
        ) : isSelect ? (
          /* Select Field */
          <select
            id={name}
            name={name}
            defaultValue=""
            className={`${baseStyle} mt-1 block w-full px-3 py-2 shadow-sm focus:outline-none sm:text-sm`}
          >
            <option value="">
              {placeholder || `Select a ${label.toLowerCase()}`}
            </option>

            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          /* Standard Input */
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={`${baseStyle} w-full p-2 ${
              Icon ? 'pl-10' : 'pl-4'
            } focus:outline-none focus:ring-2 focus:ring-[#A3B18A] placeholder:text-white/60`}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
