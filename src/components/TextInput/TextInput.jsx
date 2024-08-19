function TextInput({label,type='text',value,onChange}){
    return(
        <label>
            {/* shortCircuitting technique */}
            {label && <span className="text-gray-700">{label}</span>} 
            <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
            />
        </label>
    );
}
export default TextInput;