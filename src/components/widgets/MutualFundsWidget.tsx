import React from 'react';
import { PieChart, Star, ChevronRight } from 'lucide-react';
import { topMutualFunds } from '@/data/mockData';
import { Button } from '@/components/ui/button';

export const MutualFundsWidget: React.FC = () => {
  return (
    <div className="market-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <PieChart className="h-4 w-4 text-chart-5" />
          Top Mutual Funds
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          Explore <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="divide-y divide-border">
        {topMutualFunds.map((fund) => (
          <div
            key={fund.name}
            className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-foreground text-sm">{fund.name}</h4>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: fund.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-stock-neutral text-stock-neutral" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">1Y: </span>
                <span className="font-mono text-stock-up">+{fund.returns1Y.toFixed(2)}%</span>
              </div>
              <div>
                <span className="text-muted-foreground">3Y: </span>
                <span className="font-mono text-stock-up">+{fund.returns3Y.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
