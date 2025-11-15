const InputField = ({
  label,
  name,
  type,
  placeholder,
  icon: Icon,
  register,
  errors,
  validationRules,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>

      <div className="relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={`block w-full ${
            Icon ? 'pl-10' : 'pl-3'
          } pr-3 py-2 border rounded-md bg-white/10 text-white`}
          {...register(name, validationRules)}
        />
      </div>

      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
