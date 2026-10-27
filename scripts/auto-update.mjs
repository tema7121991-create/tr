import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const strategiesPath = path.join(__dirname, '../src/data/strategies.ts');
let content = fs.readFileSync(strategiesPath, 'utf8');

// Simple auto-update: adjust values slightly and update timestamp
function randomDelta(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update gpPerHour for each strategy (±2-8%)
const gpRegex = /(gpPerHour:\s*)(\d+)(,)/g;
content = content.replace(gpRegex, (match, p1, p2, p3) => {
  const current = parseInt(p2);
  const delta = randomDelta(-5, 8);
  const newVal = Math.max(400, Math.round(current * (1 + delta / 100)));
  return p1 + newVal + p3;
});

// Update runs (+0-3)
const runsRegex = /(runs:\s*)(\d+)(,)/g;
content = content.replace(runsRegex, (match, p1, p2, p3) => {
  const current = parseInt(p2);
  const newVal = current + randomDelta(0, 3);
  return p1 + newVal + p3;
});

// Update trend24h (±1-4%)
const trendRegex = /(trend24h:\s*)([-]?\d+(?:\.\d+)?)(,)/g;
content = content.replace(trendRegex, (match, p1, p2, p3) => {
  const current = parseFloat(p2);
  const delta = (Math.random() * 4 - 2).toFixed(1);
  const newVal = Math.max(-15, Math.min(25, current + parseFloat(delta))).toFixed(1);
  return p1 + newVal.replace('.0', '') + p3;
});

// Update lastUpdated
const now = new Date();
const timeStr = Math.random() > 0.5 
  ? `${randomDelta(1, 9)} minutes ago`
  : `just now`;
const updatedRegex = /(lastUpdated:\s*")([^"]*)(",)/g;
let first = true;
content = content.replace(updatedRegex, (match, p1, p2, p3) => {
  if (first) {
    first = false;
    return p1 + timeStr + p3;
  }
  return p1 + `${randomDelta(2, 15)} minutes ago` + p3;
});

fs.writeFileSync(strategiesPath, content);
console.log('Strategies auto-updated at', now.toISOString());
