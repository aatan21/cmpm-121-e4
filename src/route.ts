export type Formation = "line" | "vee" | "column" | "pincer";

export type EnemyKind = "drone" | "dart" | "turret" | "lancer";

export type Wave = {
  at: number;
  kind: EnemyKind;
  count: number;
  formation: Formation;
  centerX?: number;
};

export type Sector = {
  name: string;
  subtitle: string;
  length: number;
  timeout: number;
  waves: readonly Wave[];
};

export const SECTORS: readonly Sector[] = [
  // Sector 1
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    timeout: 1800,
    waves: [
      { at: 60, kind: "drone", count: 4, formation: "line" },
      {
        at: 360,
        kind: "drone",
        count: 5,
        formation: "vee",
        centerX: 168,
      },
      {
        at: 660,
        kind: "drone",
        count: 5,
        formation: "vee",
        centerX: 312,
      },
      { at: 960, kind: "drone", count: 6, formation: "line" },
      {
        at: 1200,
        kind: "drone",
        count: 4,
        formation: "column",
        centerX: 120,
      },
      {
        at: 1260,
        kind: "drone",
        count: 4,
        formation: "column",
        centerX: 360,
      },
    ],
  },

  // Sector 2
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    timeout: 2040,
    waves: [
      { at: 60, kind: "drone", count: 6, formation: "vee" },
      { at: 300, kind: "dart", count: 4, formation: "line" },
      {
        at: 600,
        kind: "dart",
        count: 5,
        formation: "column",
        centerX: 144,
      },
      {
        at: 720,
        kind: "dart",
        count: 5,
        formation: "column",
        centerX: 336,
      },
      { at: 1020, kind: "drone", count: 7, formation: "line" },
      { at: 1140, kind: "dart", count: 5, formation: "vee" },
      { at: 1440, kind: "dart", count: 6, formation: "line" },
    ],
  },

  // Sector 3
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    timeout: 2160,
    waves: [
      { at: 60, kind: "turret", count: 1, formation: "line" },
      { at: 240, kind: "drone", count: 6, formation: "vee" },
      { at: 540, kind: "turret", count: 2, formation: "line" },
      {
        at: 840,
        kind: "dart",
        count: 6,
        formation: "column",
        centerX: 240,
      },
      { at: 1080, kind: "turret", count: 2, formation: "line" },
      { at: 1140, kind: "drone", count: 6, formation: "line" },
      { at: 1500, kind: "turret", count: 3, formation: "line" },
    ],
  },

  // Sector 4
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    timeout: 2160,
    waves: [
      { at: 60, kind: "lancer", count: 4, formation: "pincer" },
      { at: 360, kind: "dart", count: 6, formation: "vee" },
      { at: 600, kind: "lancer", count: 6, formation: "pincer" },
      { at: 780, kind: "turret", count: 2, formation: "line" },
      { at: 1140, kind: "lancer", count: 6, formation: "pincer" },
      { at: 1260, kind: "drone", count: 8, formation: "vee" },
      { at: 1560, kind: "dart", count: 8, formation: "line" },
    ],
  },

  // Sector 5
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    timeout: 2280,
    waves: [
      { at: 60, kind: "turret", count: 3, formation: "line" },
      { at: 180, kind: "lancer", count: 6, formation: "pincer" },
      {
        at: 540,
        kind: "dart",
        count: 6,
        formation: "column",
        centerX: 120,
      },
      {
        at: 540,
        kind: "dart",
        count: 6,
        formation: "column",
        centerX: 360,
      },
      { at: 900, kind: "drone", count: 9, formation: "vee" },
      { at: 1020, kind: "turret", count: 2, formation: "line" },
      { at: 1320, kind: "lancer", count: 8, formation: "pincer" },
      { at: 1560, kind: "dart", count: 8, formation: "vee" },
    ],
  },
];
