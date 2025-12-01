import React from 'react';
import { Crown, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PremiumBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-chart-5 to-primary p-[1px]">
      <div className="relative bg-card rounded-[11px] p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-chart-5/10 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-6 w-6 text-chart-5" />
              <span className="text-lg font-bold text-foreground">Go Premium</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3 max-w-md">
              Get exclusive market insights, expert recommendations, and advanced tools to supercharge your investments.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-stock-up" />
                Real-time alerts
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-stock-up" />
                Expert analysis
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-stock-up" />
                Portfolio tools
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-stock-up" />
                Ad-free
              </li>
            </ul>
          </div>
          
          <Button variant="premium" size="lg" className="whitespace-nowrap">
            Start Free Trial
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
