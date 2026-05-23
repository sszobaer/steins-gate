export function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-20">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="font-display tracking-widest text-sm">STEINS GATE · DHAKA, BD</span>
        </div>
        <div className="text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} · Forged in fire
        </div>
      </div>
    </footer>
  );
}
