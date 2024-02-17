import PropTypes from 'prop-types';

const LoginInput = ({ title, inputType }) => {
    const firstLetterToUpperCase = (title) => {
        const textToArray = title.split('');
        for(let i = 0; i < textToArray.length; i++){
            if(i === 0) textToArray[i] = textToArray[i].toUpperCase(); 
        }
        return textToArray.join('');
    }

    return (
        <div className="py-4">
            <span className='text-md mb-6'>{firstLetterToUpperCase(title)}</span>
            <input 
                type={inputType} 
                className="border border-gray-300 w-full p-2
                rounded-md placeholder:font-light
                placeholder:text-gray-500" 
                name={title} 
                id={title}
            />
        </div>
    );
}

LoginInput.propTypes = {
    title: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired
};

export default LoginInput;