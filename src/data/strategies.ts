export interface Strategy {
  id: string;
  slug: string;
  name: string;
  map: string;
  tags: string[];
  description: string;
  gpPerHour: number;
  clearTimeMin: number;
  runs: number;
  trend24h: number;
  lastUpdated: string;
  topDrops: Array<{
    name: string;
    priceFe: number;
    chance: string;
  }>;
  breakdown: Array<{
    source: string;
    percent: number;
  }>;
}

export const strategies: Strategy[] = [
  {
    id: "1",
    slug: "abyss-timeless-compass",
    name: "Abyss - Timeless Compass Mix",
    map: "Abyss",
    tags: ["High Value", "Consistent", "Popular"],
    description: "Fast abyss clears with a focus on timeless compasses. Great balance of speed and value.",
    gpPerHour: 850,
    clearTimeMin: 4.2,
    runs: 247,
    trend24h: 12.5,
    lastUpdated: "8 minutes ago",
    topDrops: [
      { name: "Timeless Compass", priceFe: 45, chance: "~18%" },
      { name: "Beast Core", priceFe: 28, chance: "~24%" },
      { name: "Ember of Chaos", priceFe: 15, chance: "~32%" },
    ],
    breakdown: [
      { source: "Compasses", percent: 52 },
      { source: "Beasts", percent: 28 },
      { source: "Misc Loot", percent: 20 },
    ],
  },
  {
    id: "2",
    slug: "tomb-of-the-void",
    name: "Tomb of the Void - High Density",
    map: "Tomb of the Void",
    tags: ["Dense", "Stable"],
    description: "Very dense map with consistent drops. Less RNG dependent than abyss mixes.",
    gpPerHour: 720,
    clearTimeMin: 5.1,
    runs: 189,
    trend24h: 0.8,
    lastUpdated: "12 minutes ago",
    topDrops: [
      { name: "Void Relic", priceFe: 32, chance: "~21%" },
      { name: "Rare Crafting Material", priceFe: 18, chance: "~38%" },
      { name: "Currency Shard", priceFe: 12, chance: "~45%" },
    ],
    breakdown: [
      { source: "Relics", percent: 44 },
      { source: "Materials", percent: 36 },
      { source: "Currency", percent: 20 },
    ],
  },
  {
    id: "3",
    slug: "emberlakes-contract",
    name: "Emberlakes - Contract Focus",
    map: "Emberlakes",
    tags: ["Contract Based", "Efficient"],
    description: "Efficient contract runs with good pack density and valuable contract rewards.",
    gpPerHour: 695,
    clearTimeMin: 4.8,
    runs: 156,
    trend24h: -3.2,
    lastUpdated: "15 minutes ago",
    topDrops: [
      { name: "Contract Cache", priceFe: 26, chance: "~67%" },
      { name: "Flame Jewel", priceFe: 19, chance: "~15%" },
      { name: "Refined Ember", priceFe: 14, chance: "~28%" },
    ],
    breakdown: [
      { source: "Contracts", percent: 48 },
      { source: "Jewels", percent: 32 },
      { source: "Embers", percent: 20 },
    ],
  },
  {
    id: "4",
    slug: "whispering-mausoleum",
    name: "Whispering Mausoleum - Speed Clear",
    map: "Whispering Mausoleum",
    tags: ["Speed", "Low Investment"],
    description: "Great for newer characters. Lower entry cost, decent profit with good clear speed.",
    gpPerHour: 580,
    clearTimeMin: 3.9,
    runs: 203,
    trend24h: 5.7,
    lastUpdated: "21 minutes ago",
    topDrops: [
      { name: "Mausoleum Key Fragment", priceFe: 16, chance: "~31%" },
      { name: "Arcane Dust", priceFe: 12, chance: "~42%" },
      { name: "Rare Gear", priceFe: 9, chance: "~26%" },
    ],
    breakdown: [
      { source: "Keys", percent: 39 },
      { source: "Crafting", percent: 37 },
      { source: "Gear", percent: 24 },
    ],
  },
  {
    id: "5",
    slug: "netherrealm-mix",
    name: "Netherrealm - Mixed Compass",
    map: "Netherrealm",
    tags: ["Mixed", "High Potential"],
    description: "High ceiling strategy. Some runs are massive, median is solid. Heavy RNG but can be very profitable.",
    gpPerHour: 625,
    clearTimeMin: 5.4,
    runs: 98,
    trend24h: -8.4,
    lastUpdated: "26 minutes ago",
    topDrops: [
      { name: "Nether Compass", priceFe: 38, chance: "~12%" },
      { name: "Soul Fragment", priceFe: 17, chance: "~29%" },
      { name: "Void Shard", priceFe: 11, chance: "~41%" },
    ],
    breakdown: [
      { source: "Compasses", percent: 58 },
      { source: "Fragments", percent: 26 },
      { source: "Shards", percent: 16 },
    ],
  },
];

export function getStrategyBySlug(slug: string): Strategy | undefined {
  return strategies.find((s) => s.slug === slug);
}
