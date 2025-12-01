import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface StockTableProps {
  title: string;
  stocks: Stock[];
  type: 'gainers' | 'losers';
}

export const StockTable: React.FC<StockTableProps> = ({ title, stocks, type }) => {
  const isGainer = type === 'gainers';

  return (
    <div className="market-card overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          {isGainer ? (
            <TrendingUp className="h-5 w-5 text-stock-up" />
          ) : (
            <TrendingDown className="h-5 w-5 text-stock-down" />
          )}
          {title}
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="divide-y divide-border">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div>
              <p className="font-semibold text-foreground">{stock.symbol}</p>
              <p className="text-sm text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
            </div>
            
            <div className="text-right">
              <p className="font-mono font-semibold text-foreground">
                ₹{stock.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </p>
              <p className={cn(
                "text-sm font-mono",
                isGainer ? "text-stock-up" : "text-stock-down"
              )}>
                {isGainer ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
