function TextInput({label,type='text',value,onChange}){
    return(
        <label className="flex items-center w-3/4">
            {/* shortCircuitting technique */}
            {label && <span className="text-gray-700 w-64">{label}</span>} 
            <input
                className="px-4 py-2 border border-gray-500 rounded-md w-full m-5"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={"enter a word to start"}
            />
        </label>
    );
}
export default TextInput;