export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-14 flex items-center justify-center gap-4 text-center">
      <span className="h-px w-12 bg-white/70" />
      <h2 className="text-3xl font-semibold text-white drop-shadow-2xl md:text-5xl">
        {children}
      </h2>
      <span className="h-px w-12 bg-white/70" />
    </div>
  );
}
