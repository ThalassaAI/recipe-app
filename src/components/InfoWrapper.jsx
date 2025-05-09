function InfoWrapper({ children, className }) {
  return (
    <div
      className={`border border-secondary-subtle rounded-3 p-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default InfoWrapper;
