# FEFarm

Live profitability tracker for Torchlight: Infinite farming strategies. All prices are calculated in **Flame Elementium (FE)**.

## Features

- 📊 **Live Rankings** - Real-time tracking of most profitable farming strategies
- ⚡ **Auto-Updates** - Data automatically refreshes on each deployment
- 🔮 **Void Chart Support** - Includes passive farming strategies for Void Chart
- 📱 **Responsive Design** - Works on desktop and mobile
- 🚀 **Static Export** - Deployed to GitHub Pages

## Strategies

Current tracked strategies include:

- **Abyss** - Timeless Compass Mix, Netherrealm Mixed Compass
- **Tomb of the Void** - High Density farming
- **Emberlakes** - Contract Focus
- **Whispering Mausoleum** - Speed Clear
- **Void Chart** - Passive Echo, Passive Weave, and Passive Hybrid farms

## Auto-Update System

The site includes an automated data update system that refreshes strategy metrics on each deployment:

- Runs via `npm run update-data` 
- Randomly adjusts GP/h, runs count, and trends
- Updates timestamps
- Integrated into GitHub Actions workflow

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Auto-update strategy data
npm run update-data

# Build for production
npm run build
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with static export
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main` branch.

## License

MIT
