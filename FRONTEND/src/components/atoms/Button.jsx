function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
export { Button };
