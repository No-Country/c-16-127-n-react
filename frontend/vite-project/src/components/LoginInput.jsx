import PropTypes from "prop-types";
import { firstLetterToUpperCase } from "../utils/utils";
const LoginInput = ({ title, inputType, value, onchange }) => {
  return (
    <div className="py-4">
      <span className="text-md mb-6">{firstLetterToUpperCase(title)}</span>
      <input
        type={inputType}
        className="border border-gray-300 w-full p-2
                rounded-md placeholder:font-light
                placeholder:text-gray-500"
        name={title}
        id={title}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
};

LoginInput.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default LoginInput;
