import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IndexCardProps {
  name: string;
  value: number;
  change: number;
  changePercent: number;
  isUp: boolean;
}

export const IndexCard: React.FC<IndexCardProps> = ({ name, value, change, changePercent, isUp }) => {
  return (
    <div className={cn(
      "market-card p-4 transition-all duration-200 hover:scale-[1.02]",
      isUp ? "hover:border-stock-up/50" : "hover:border-stock-down/50"
    )}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <div className={cn(
          "p-1.5 rounded-full",
          isUp ? "bg-stock-up-bg" : "bg-stock-down-bg"
        )}>
          {isUp ? (
            <TrendingUp className="h-4 w-4 text-stock-up" />
          ) : (
            <TrendingDown className="h-4 w-4 text-stock-down" />
          )}
        </div>
      </div>
      
      <p className="text-2xl font-bold font-mono text-foreground mb-1">
        {value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
      </p>
      
      <div className={cn(
        "flex items-center gap-2 text-sm font-mono",
        isUp ? "text-stock-up" : "text-stock-down"
      )}>
        <span>{isUp ? '+' : ''}{change.toFixed(2)}</span>
        <span className={cn(
          "px-1.5 py-0.5 rounded text-xs",
          isUp ? "bg-stock-up-bg" : "bg-stock-down-bg"
        )}>
          {isUp ? '+' : ''}{changePercent.toFixed(2)}%
        </span>
      </div>

      {/* Mini Sparkline */}
      <div className="mt-3 h-8 flex items-end gap-0.5">
        {Array.from({ length: 20 }).map((_, i) => {
          const height = Math.random() * 100;
          return (
            <div
              key={i}
              className={cn(
                "flex-1 rounded-t-sm",
                isUp ? "bg-stock-up/60" : "bg-stock-down/60"
              )}
              style={{ height: `${20 + height * 0.6}%` }}
            />
          );
        })}
      </div>
    </div>
  );
};
