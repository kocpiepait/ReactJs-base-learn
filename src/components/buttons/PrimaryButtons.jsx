import classNames from "classnames";
export default function PrimaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "bg-primary rounded-full text-white py-4 px-10",
    className,
  ]);

  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
