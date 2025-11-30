function Input({ value, onChange, placeholder }) {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full p-4 pl-14 rounded-3xl 
          bg-white/90 backdrop-blur-md 
          border border-transparent 
          shadow-xl
          placeholder-gray-400 text-gray-800
          focus:outline-none focus:ring-2 focus:ring-orange-400
          transition duration-300
        "
      />
      <svg
        className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </div>
  );
}
export { Input };
