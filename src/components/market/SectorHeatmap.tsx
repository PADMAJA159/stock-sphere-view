import React from 'react';
import { sectorPerformance } from '@/data/mockData';
import { cn } from '@/lib/utils';

export const SectorHeatmap: React.FC = () => {
  const maxChange = Math.max(...sectorPerformance.map(s => Math.abs(s.change)));

  const getBackgroundColor = (change: number) => {
    const intensity = Math.abs(change) / maxChange;
    if (change > 0) {
      return `hsl(142 71% ${50 - intensity * 20}% / ${0.3 + intensity * 0.5})`;
    }
    return `hsl(0 72% ${55 - intensity * 20}% / ${0.3 + intensity * 0.5})`;
  };

  return (
    <div className="market-card p-4">
      <h3 className="font-semibold text-foreground mb-4">Sector Performance</h3>
      
      <div className="grid grid-cols-5 gap-2">
        {sectorPerformance.map((sector) => (
          <div
            key={sector.name}
            className={cn(
              "p-3 rounded-lg text-center transition-transform hover:scale-105 cursor-pointer",
            )}
            style={{ backgroundColor: getBackgroundColor(sector.change) }}
          >
            <p className="text-xs font-medium text-foreground mb-1">{sector.name}</p>
            <p className={cn(
              "text-sm font-mono font-semibold",
              sector.change >= 0 ? "text-stock-up" : "text-stock-down"
            )}>
              {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-stock-down/50" />
          <span>Decline</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-stock-up/50" />
          <span>Advance</span>
        </div>
      </div>
    </div>
  );
};
