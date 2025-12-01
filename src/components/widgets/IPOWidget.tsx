import React from 'react';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { upcomingIPOs } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const IPOWidget: React.FC = () => {
  return (
    <div className="market-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          Upcoming IPOs
        </h3>
        <Button variant="ghost" size="sm" className="text-primary">
          All IPOs <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="divide-y divide-border">
        {upcomingIPOs.map((ipo) => (
          <div
            key={ipo.name}
            className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-foreground">{ipo.name}</h4>
              <Badge
                variant={ipo.status === 'open' ? 'default' : 'secondary'}
                className={cn(
                  "text-xs",
                  ipo.status === 'open' && "bg-stock-up text-primary-foreground"
                )}
              >
                {ipo.status === 'open' ? 'Open' : 'Upcoming'}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {ipo.date}
              </span>
              <span>Issue Size: {ipo.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
