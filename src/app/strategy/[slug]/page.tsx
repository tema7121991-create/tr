import { strategies, getStrategyBySlug } from "@/data/strategies";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Clock, Users, Flame, BarChart3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return strategies.map((strategy) => ({
    slug: strategy.slug,
  }));
}

export default async function StrategyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const strategy = getStrategyBySlug(slug);

  if (!strategy) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Rankings
      </Link>

      <header className="mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {strategy.name}
            </h1>
            <p className="text-gray-400">{strategy.description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-amber-400">{strategy.gpPerHour}</span>
              <span className="text-xl text-gray-500">FE/h</span>
            </div>
            <div className={`flex items-center justify-end gap-1 mt-1 ${
              strategy.trend24h > 0 ? "text-green-400" : 
              strategy.trend24h < 0 ? "text-red-400" : 
              "text-gray-400"
            }`}>
              {strategy.trend24h > 0 ? <TrendingUp className="w-4 h-4" /> : 
               strategy.trend24h < 0 ? <TrendingDown className="w-4 h-4" /> : 
               <Minus className="w-4 h-4" />}
              <span className="text-sm font-semibold">
                {strategy.trend24h > 0 ? "+" : ""}{strategy.trend24h}% (24h)
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {strategy.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#15151d] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="text-gray-400">Clear Time</span>
          </div>
          <p className="text-2xl font-bold text-white">{strategy.clearTimeMin} min</p>
        </div>
        <div className="bg-[#15151d] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-amber-400" />
            <span className="text-gray-400">Data Points</span>
          </div>
          <p className="text-2xl font-bold text-white">{strategy.runs} runs</p>
        </div>
        <div className="bg-[#15151d] rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-5 h-5 text-amber-400" />
            <span className="text-gray-400">Map</span>
          </div>
          <p className="text-2xl font-bold text-white">{strategy.map}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#15151d] rounded-xl border border-gray-800 p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            Top Drops (Value in FE)
          </h2>
          <div className="space-y-3">
            {strategy.topDrops.map((drop, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#0f0f15] border border-gray-800/50">
                <div>
                  <p className="font-medium text-white">{drop.name}</p>
                  <p className="text-sm text-gray-500">{drop.chance}</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-amber-400">{drop.priceFe}</span>
                  <span className="text-sm text-gray-500 ml-1">FE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#15151d] rounded-xl border border-gray-800 p-6">
          <h2 className="text-xl font-bold text-white mb-4">Profit Breakdown</h2>
          <div className="space-y-4">
            {strategy.breakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">{item.source}</span>
                  <span className="text-amber-400 font-semibold">{item.percent}%</span>
                </div>
                <div className="w-full bg-[#0f0f15] rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#15151d] rounded-xl border border-gray-800 p-6">
        <p className="text-sm text-gray-500 text-center">
          Data based on {strategy.runs} community-submitted runs. Prices updated from live market data in Flame Elementium.
        </p>
      </div>
    </main>
  );
}
