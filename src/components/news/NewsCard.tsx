import React from 'react';
import { Clock, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  title: string;
  category: string;
  time: string;
  image: string;
  isPremium?: boolean;
  variant?: 'default' | 'featured' | 'compact';
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  category,
  time,
  image,
  isPremium = false,
  variant = 'default',
}) => {
  if (variant === 'featured') {
    return (
      <article className="group market-card overflow-hidden cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
              {isPremium && (
                <Badge className="bg-chart-5 text-primary-foreground text-xs">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {time}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
        <div className="relative w-20 h-14 rounded overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{category}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group market-card overflow-hidden cursor-pointer">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isPremium && (
          <Badge className="absolute top-2 right-2 bg-chart-5 text-primary-foreground text-xs">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        )}
      </div>
      <div className="p-4">
        <Badge variant="outline" className="text-xs mb-2">
          {category}
        </Badge>
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {time}
        </div>
      </div>
    </article>
  );
};
