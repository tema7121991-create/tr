"use client";

import { strategies } from "@/data/strategies";
import { TrendingUp, TrendingDown, Minus, Flame, Clock, Users, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Flame className="w-10 h-10 text-amber-500" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            FEFarm
          </h1>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl">
          Live profitability tracker for Torchlight: Infinite farming strategies. 
          Auto-updating every deploy with Void Chart passive farm data. 
          All prices calculated in <span className="text-amber-400 font-semibold">Flame Elementium</span>.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span>Updated every few minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Crowdsourced from community runs</span>
          </div>
        </div>
      </header>

      <div className="bg-[#15151d] rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-[#0f0f15]">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">#</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-400">Strategy</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">gp/h (FE)</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Clear Time</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Runs</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">24h Trend</th>
                <th className="text-right py-4 px-6 text-sm font-semibold text-gray-400">Updated</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((strategy, index) => (
                <tr
                  key={strategy.id}
                  className="border-b border-gray-800/50 hover:bg-[#1a1a24] transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-6">
                    <span className={`text-lg font-bold ${
                      index === 0 ? "text-amber-400" : 
                      index === 1 ? "text-gray-300" : 
                      index === 2 ? "text-amber-700" : 
                      "text-gray-500"
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link href={`/strategy/${strategy.slug}/`} className="flex flex-col gap-1">
                      <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {strategy.name}
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {strategy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-xl font-bold text-amber-400">
                      {strategy.gpPerHour}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">FE</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{strategy.clearTimeMin} min</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-gray-400">
                    {strategy.runs}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      strategy.trend24h > 0 ? "text-green-400" : 
                      strategy.trend24h < 0 ? "text-red-400" : 
                      "text-gray-400"
                    }`}>
                      {strategy.trend24h > 0 ? <TrendingUp className="w-4 h-4" /> : 
                       strategy.trend24h < 0 ? <TrendingDown className="w-4 h-4" /> : 
                       <Minus className="w-4 h-4" />}
                      <span className="font-semibold">
                        {strategy.trend24h > 0 ? "+" : ""}{strategy.trend24h}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-gray-500 text-sm">
                    {strategy.lastUpdated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>FEFarm - Community driven. Not affiliated with XD Inc or Torchlight: Infinite.</p>
      </footer>
    </main>
  );
}
