import { Mail, Facebook, MessageCircle, Youtube, Twitch } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-24 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Steins Gate Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display tracking-widest text-sm">
              STEINS GATE ESPORTS
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Competitive esports organization based in Dhaka, Bangladesh.
            Competing in tournaments, scrims, and community events.
          </p>

          <div className="text-xs text-primary tracking-widest">
            © {new Date().getFullYear()} · Forged in fire
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-sm font-display tracking-widest text-primary">
            QUICK LINKS
          </h3>
          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <a href="/team" className="hover:text-primary transition-colors">Team</a>
            <a href="/schedule" className="hover:text-primary transition-colors">Schedule</a>
            <a href="/achievements" className="hover:text-primary transition-colors">Achievements</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        {/* Socials */}
        <div className="space-y-3">
          <h3 className="text-sm font-display tracking-widest text-primary">
            CONNECT
          </h3>

          <div className="flex flex-col gap-3 text-xs text-muted-foreground">
            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:steinsgateesports@gmail.com">
              <Mail className="w-4 h-4" /> Email
            </a>

            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="https://www.facebook.com/SteinsGateEsports/">
              <Facebook className="w-4 h-4" /> Facebook
            </a>

            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="https://discord.gg/gnsRc2nb">
              <MessageCircle className="w-4 h-4" /> Discord
            </a>

            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
              <Youtube className="w-4 h-4" /> YouTube
            </a>

            <a className="flex items-center gap-2 hover:text-primary transition-colors" href="#">
              <Twitch className="w-4 h-4" /> Twitch
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}