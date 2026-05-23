"use client";

export function ContactForm() {
  return (
    <form
      className="border border-primary/30 p-8 bg-card/40 clip-blade space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message queued. We'll respond after the next match.");
      }}
    >
      <h2 className="font-display text-2xl mb-2">Send a message</h2>
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Name</label>
        <input required className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors" />
      </div>
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
        <input required type="email" className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors" />
      </div>
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Subject</label>
        <select className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none">
          <option>Sponsorship</option>
          <option>Tournament invite</option>
          <option>Press / Interview</option>
          <option>Fan mail</option>
        </select>
      </div>
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
        <textarea required rows={5} className="w-full bg-background border border-primary/20 px-4 py-3 focus:border-primary outline-none transition-colors resize-none" />
      </div>
      <button type="submit" className="w-full bg-gradient-fire py-3 font-display tracking-widest text-sm text-primary-foreground clip-blade shadow-ember hover:shadow-glow transition-shadow">
        Send transmission
      </button>
    </form>
  );
}
