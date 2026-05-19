import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Roster" },
  { to: "/achievements", label: "Achievements" },
  { to: "/schedule", label: "Schedule" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Steins Gate" width={56} height={56} className="w-14 h-14 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.21_45/0.6)]" />
            <div className="leading-none">
              <div className="font-display text-xl tracking-widest text-gradient-fire">STEINS GATE</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">PUBG MOBILE · BD</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => {
              const active = loc.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative font-display tracking-widest text-sm transition-colors ${active ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {n.label}
                  {active && <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-fire" />}
                </Link>
              );
            })}
          </nav>
          <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-primary/20 bg-background">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display tracking-widest text-sm py-2">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="border-t border-primary/20 mt-20">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="font-display tracking-widest text-sm">STEINS GATE · DHAKA, BD</span>
          </div>
          <div className="text-xs text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} · Forged in fire
          </div>
        </div>
      </footer>
    </div>
  );
}
