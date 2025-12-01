import React from 'react';
import { Star, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { watchlistStocks } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const WatchlistWidget: React.FC = () => {
  return (
    <div className="market-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Star className="h-4 w-4 text-stock-neutral" />
          My Watchlist
        </h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="divide-y divide-border">
        {watchlistStocks.map((stock) => (
          <div
            key={stock.symbol}
            className="p-3 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold",
                stock.isUp ? "bg-stock-up-bg text-stock-up" : "bg-stock-down-bg text-stock-down"
              )}>
                {stock.symbol.slice(0, 2)}
              </div>
              <span className="font-medium text-foreground">{stock.symbol}</span>
            </div>
            
            <div className="text-right">
              <p className="font-mono text-sm text-foreground">
                ₹{stock.price.toLocaleString()}
              </p>
              <p className={cn(
                "text-xs font-mono flex items-center gap-0.5 justify-end",
                stock.isUp ? "text-stock-up" : "text-stock-down"
              )}>
                {stock.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stock.isUp ? '+' : ''}{stock.change.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 border-t border-border">
        <Button variant="ghost" className="w-full text-sm text-primary">
          View Full Watchlist
        </Button>
      </div>
    </div>
  );
};
