import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { indices } from '@/data/mockData';
import { cn } from '@/lib/utils';

export const MarketTicker: React.FC = () => {
  const tickerItems = [...indices, ...indices]; // Duplicate for seamless loop

  return (
    <div className="bg-muted border-b border-border overflow-hidden">
      <div className="flex animate-ticker">
        {tickerItems.map((index, i) => (
          <div
            key={`${index.name}-${i}`}
            className="flex items-center gap-4 px-6 py-2 border-r border-border whitespace-nowrap"
          >
            <span className="font-semibold text-foreground">{index.name}</span>
            <span className="font-mono text-foreground">{index.value.toLocaleString()}</span>
            <span className={cn(
              "flex items-center gap-1 font-mono text-sm",
              index.isUp ? "text-stock-up" : "text-stock-down"
            )}>
              {index.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {index.isUp ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
