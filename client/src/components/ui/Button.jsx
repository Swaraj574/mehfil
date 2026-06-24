const Button = ({
  children,
  variant = "primary",
}) => {
  const styles = {
    primary:
      "bg-[var(--gold)] text-[var(--ink)]",

    secondary:
      "border border-[var(--ink)]",

    ghost:
      "border border-[var(--gold)] text-[var(--gold)]",
  };

  return (
    <button
      className={`
      px-8 py-3 transition
      hover:scale-105
      ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
};

export default Button;