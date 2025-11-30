function PageHeader({ children, className }) {
  return (
    <h1
      className={`text-5xl md:text-6xl font-extrabold text-center mb-6 leading-snug ${className}`}
    >
      {children}
    </h1>
  );
}

export { PageHeader };
