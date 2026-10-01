export default function GridBackground({
  children,
  className = "",
}) {
  return (
    <section
      className={`relative overflow-hidden bg-brand-blue ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--grid-line-color) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--grid-line-color) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "var(--grid-cell-size) var(--grid-cell-size)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}