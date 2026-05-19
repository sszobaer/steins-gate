import p1 from "@/assets/player-1.jpg";
import p2 from "@/assets/player-2.jpg";
import p3 from "@/assets/player-3.jpg";
import p4 from "@/assets/player-4.jpg";
import p5 from "@/assets/player-5.jpg";

export type Player = {
  ign: string;
  role: string;
  bio: string;
  img: string;
};

export const players: Player[] = [
  {
    ign: "Hunter",
    role: "IGL · Assaulter",
    bio: "The voice in the chaos. Calls every rotation, takes every clutch.",
    img: p1,
  },
  {
    ign: "Toxic",
    role: "Free Style",
    bio: "Plays without a playbook. Adapts mid-fight, finishes mid-flip.",
    img: p2,
  },
  {
    ign: "Mahim",
    role: "Entry Fragger",
    bio: "First through the door. Always. Sets the tempo for the whole squad.",
    img: p3,
  },
  {
    ign: "Arpon",
    role: "Fragger",
    bio: "Clinical aim, surgical positioning. Trades opened for kills closed.",
    img: p4,
  },
  {
    ign: "HeatBlast",
    role: "Support",
    bio: "Holds the line. Smokes, flashes, revives — the silent backbone.",
    img: p5,
  },
];
