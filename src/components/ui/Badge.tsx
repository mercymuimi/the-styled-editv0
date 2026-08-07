export default function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-(--surface-alt) px-4 py-2 text-xs tracking-widest text-(--primary)"
    >
      {children}
    </span>
  );
}
