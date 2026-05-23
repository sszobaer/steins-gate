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
    img: "/player-1.jpg",
  },
  {
    ign: "Toxic",
    role: "Free Style",
    bio: "Plays without a playbook. Adapts mid-fight, finishes mid-flip.",
    img: "/player-2.jpg",
  },
  {
    ign: "Mahim",
    role: "Entry Fragger",
    bio: "First through the door. Always. Sets the tempo for the whole squad.",
    img: "/player-3.jpg",
  },
  {
    ign: "Arpon",
    role: "Fragger",
    bio: "Clinical aim, surgical positioning. Trades opened for kills closed.",
    img: "/player-4.jpg",
  },
  {
    ign: "HeatBlast",
    role: "Support",
    bio: "Holds the line. Smokes, flashes, revives — the silent backbone.",
    img: "/player-5.jpg",
  },
];
