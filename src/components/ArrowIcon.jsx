export default function ArrowIcon({
  className = "supplier-link__arrow shrink-0",
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M5 16h21M18 7l9 9-9 9"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
