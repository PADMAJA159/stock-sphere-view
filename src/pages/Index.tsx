import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MarketTicker } from '@/components/market/MarketTicker';
import { IndexCard } from '@/components/market/IndexCard';
import { StockTable } from '@/components/market/StockTable';
import { SectorHeatmap } from '@/components/market/SectorHeatmap';
import { NewsCard } from '@/components/news/NewsCard';
import { WatchlistWidget } from '@/components/widgets/WatchlistWidget';
import { IPOWidget } from '@/components/widgets/IPOWidget';
import { MutualFundsWidget } from '@/components/widgets/MutualFundsWidget';
import { CryptoWidget } from '@/components/widgets/CryptoWidget';
import { CommoditiesWidget } from '@/components/widgets/CommoditiesWidget';
import { PremiumBanner } from '@/components/premium/PremiumBanner';
import { indices, topGainers, topLosers, marketNews } from '@/data/mockData';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>MarketPulse - Live Stock Market, News & Portfolio Tracker</title>
        <meta name="description" content="Track live stock prices, Sensex, Nifty, mutual funds, IPOs, and get the latest financial news. Your trusted companion for Indian stock market investments." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <MarketTicker />
        
        <main className="container py-6">
          {/* Market Overview Section */}
          <section className="mb-8 animate-fade-in">
            <h2 className="text-xl font-bold text-foreground mb-4">Market Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {indices.map((index) => (
                <IndexCard key={index.name} {...index} />
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Top Gainers & Losers */}
              <section className="grid md:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <StockTable title="Top Gainers" stocks={topGainers} type="gainers" />
                <StockTable title="Top Losers" stocks={topLosers} type="losers" />
              </section>

              {/* Sector Heatmap */}
              <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <SectorHeatmap />
              </section>

              {/* News Section */}
              <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl font-bold text-foreground mb-4">Latest News</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {marketNews.slice(0, 1).map((news) => (
                    <NewsCard key={news.id} {...news} variant="featured" />
                  ))}
                  <div className="space-y-2">
                    {marketNews.slice(1).map((news) => (
                      <NewsCard key={news.id} {...news} variant="compact" />
                    ))}
                  </div>
                </div>
              </section>

              {/* Premium Banner */}
              <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <PremiumBanner />
              </section>
            </div>

            {/* Right Column - Widgets */}
            <aside className="space-y-4">
              <div className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
                <WatchlistWidget />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
                <CommoditiesWidget />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.35s' }}>
                <IPOWidget />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.45s' }}>
                <MutualFundsWidget />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.55s' }}>
                <CryptoWidget />
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
