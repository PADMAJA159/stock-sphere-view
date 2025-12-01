import React from 'react';
import { Coins, TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { cryptoData } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const CryptoWidget: React.FC = () => {
  return (
    <div className="market-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Coins className="h-4 w-4 text-chart-4" />
          Crypto Prices
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="divide-y divide-border">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.symbol}
            className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-chart-4/20 flex items-center justify-center">
                <span className="text-xs font-bold text-chart-4">{crypto.symbol}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{crypto.name}</p>
                <p className="text-xs text-muted-foreground">{crypto.symbol}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-mono font-semibold text-foreground">
                ${crypto.price.toLocaleString()}
              </p>
              <p className={cn(
                "text-xs font-mono flex items-center gap-0.5 justify-end",
                crypto.isUp ? "text-stock-up" : "text-stock-down"
              )}>
                {crypto.isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {crypto.isUp ? '+' : ''}{crypto.change.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
