import React from 'react';
import { Gem, TrendingUp, TrendingDown } from 'lucide-react';
import { commodities } from '@/data/mockData';
import { cn } from '@/lib/utils';

export const CommoditiesWidget: React.FC = () => {
  return (
    <div className="market-card p-4">
      <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
        <Gem className="h-4 w-4 text-stock-neutral" />
        Commodities
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {commodities.map((commodity) => (
          <div
            key={commodity.name}
            className={cn(
              "p-3 rounded-lg text-center transition-colors cursor-pointer",
              commodity.isUp ? "bg-stock-up-bg" : "bg-stock-down-bg"
            )}
          >
            <p className="text-xs text-muted-foreground mb-1">{commodity.name}</p>
            <p className="font-mono font-semibold text-foreground text-sm">
              ₹{commodity.price.toLocaleString()}
            </p>
            <p className="text-[10px] text-muted-foreground">/{commodity.unit}</p>
            <p className={cn(
              "text-xs font-mono flex items-center gap-0.5 justify-center mt-1",
              commodity.isUp ? "text-stock-up" : "text-stock-down"
            )}>
              {commodity.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {commodity.isUp ? '+' : ''}{commodity.change.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
