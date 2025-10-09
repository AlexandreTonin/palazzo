import clsx from "clsx";

export function CircleButton({ icon, ...props }) {
  return (
    <button
      className={clsx(
        "btn btn-circle bg-white border-none w-10 h-10",
        props.className
      )}
    >
      {icon}
    </button>
  );
}
