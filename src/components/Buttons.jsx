import "./Buttons.sass";

export function Button({
  children,
  className = "standard-button",
  onClick = () => {},
  type = "button",
}) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export function InvertedButton({ children, onClick }) {
  return (
    <Button className="inverted-button" onClick={onClick}>
      {children}
    </Button>
  );
}

export function IconButton() {}

export function InvisibleButton({ children, onClick }) {
  return (
    <button className="invisible-button" onClick={onClick}>
      {children}
    </button>
  );
}
