export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono text-xs text-mutedDark sm:flex-row">
        <span>© {new Date().getFullYear()} Anila Unnikrishnan — build passing.</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-pass" />
          all systems operational
        </span>
      </div>
    </footer>
  );
}
