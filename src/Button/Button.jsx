import s from "./Button.module.scss";

export const Button = ({ id, aria, text, btnClass, onClick }) => {
  return (
    <button
      type="button"
      id={id}
      aria-label={aria}
      className={`${s.btn} ${btnClass}`}
      onClick={onClick}
    >
      <span>{text.charAt(0).toUpperCase() + text.slice(1)}</span>
    </button>
  );
};
