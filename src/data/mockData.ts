export const indices = [
  { name: "SENSEX", value: 72568.45, change: 425.32, changePercent: 0.59, isUp: true },
  { name: "NIFTY 50", value: 22012.70, change: 118.65, changePercent: 0.54, isUp: true },
  { name: "NIFTY BANK", value: 47234.80, change: -156.20, changePercent: -0.33, isUp: false },
  { name: "NIFTY IT", value: 34567.25, change: 234.50, changePercent: 0.68, isUp: true },
  { name: "NIFTY MIDCAP", value: 45123.40, change: 312.80, changePercent: 0.70, isUp: true },
];

export const topGainers = [
  { symbol: "TATASTEEL", name: "Tata Steel Ltd", price: 142.85, change: 8.45, changePercent: 6.28 },
  { symbol: "ADANIENT", name: "Adani Enterprises", price: 2845.30, change: 145.20, changePercent: 5.38 },
  { symbol: "HINDALCO", name: "Hindalco Industries", price: 567.90, change: 25.60, changePercent: 4.72 },
  { symbol: "JSWSTEEL", name: "JSW Steel Ltd", price: 892.45, change: 38.70, changePercent: 4.53 },
  { symbol: "COALINDIA", name: "Coal India Ltd", price: 412.30, change: 16.85, changePercent: 4.26 },
];

export const topLosers = [
  { symbol: "HDFC", name: "HDFC Bank Ltd", price: 1456.20, change: -42.30, changePercent: -2.82 },
  { symbol: "ICICIBANK", name: "ICICI Bank Ltd", price: 1023.45, change: -28.60, changePercent: -2.72 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1789.30, change: -45.20, changePercent: -2.46 },
  { symbol: "AXISBANK", name: "Axis Bank Ltd", price: 1124.80, change: -26.90, changePercent: -2.33 },
  { symbol: "SBIN", name: "State Bank of India", price: 612.45, change: -13.25, changePercent: -2.12 },
];

export const marketNews = [
  {
    id: 1,
    title: "Sensex surges 400 points as IT stocks rally on positive global cues",
    category: "Markets",
    time: "10 mins ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    isPremium: false,
  },
  {
    id: 2,
    title: "RBI keeps repo rate unchanged at 6.5% for eighth consecutive time",
    category: "Economy",
    time: "25 mins ago",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=250&fit=crop",
    isPremium: true,
  },
  {
    id: 3,
    title: "Tata Motors Q3 results: Net profit jumps 120% YoY on JLR strength",
    category: "Results",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
    isPremium: false,
  },
  {
    id: 4,
    title: "Oil prices surge 3% as OPEC+ extends production cuts",
    category: "Commodities",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
    isPremium: false,
  },
];

export const sectorPerformance = [
  { name: "IT", change: 2.34, color: "up" },
  { name: "Auto", change: 1.89, color: "up" },
  { name: "Pharma", change: 1.45, color: "up" },
  { name: "Metal", change: 0.87, color: "up" },
  { name: "Energy", change: 0.23, color: "up" },
  { name: "FMCG", change: -0.12, color: "down" },
  { name: "Realty", change: -0.56, color: "down" },
  { name: "Banking", change: -0.89, color: "down" },
  { name: "Finance", change: -1.23, color: "down" },
  { name: "PSU Bank", change: -1.67, color: "down" },
];

export const upcomingIPOs = [
  { name: "TechVision India", date: "Dec 15-18", size: "₹2,500 Cr", status: "upcoming" },
  { name: "GreenEnergy Ltd", date: "Dec 12-14", size: "₹1,800 Cr", status: "open" },
  { name: "FinServe Digital", date: "Dec 20-22", size: "₹3,200 Cr", status: "upcoming" },
];

export const topMutualFunds = [
  { name: "Axis Bluechip Fund", returns1Y: 18.45, returns3Y: 14.23, rating: 5 },
  { name: "SBI Small Cap Fund", returns1Y: 32.67, returns3Y: 22.45, rating: 5 },
  { name: "Mirae Asset Large Cap", returns1Y: 16.89, returns3Y: 13.56, rating: 4 },
  { name: "HDFC Mid-Cap Opp.", returns1Y: 28.34, returns3Y: 19.78, rating: 4 },
];

export const watchlistStocks = [
  { symbol: "RELIANCE", price: 2456.80, change: 1.23, isUp: true },
  { symbol: "TCS", price: 3892.45, change: 0.87, isUp: true },
  { symbol: "INFY", price: 1567.30, change: -0.45, isUp: false },
  { symbol: "HDFCBANK", price: 1623.90, change: -0.89, isUp: false },
  { symbol: "WIPRO", price: 456.25, change: 2.34, isUp: true },
];

export const cryptoData = [
  { name: "Bitcoin", symbol: "BTC", price: 43567.89, change: 2.34, isUp: true },
  { name: "Ethereum", symbol: "ETH", price: 2234.56, change: 3.12, isUp: true },
  { name: "BNB", symbol: "BNB", price: 312.45, change: -1.23, isUp: false },
];

export const commodities = [
  { name: "Gold", price: 62345, unit: "10g", change: 0.45, isUp: true },
  { name: "Silver", price: 74560, unit: "1kg", change: -0.32, isUp: false },
  { name: "Crude Oil", price: 6234, unit: "bbl", change: 1.89, isUp: true },
];
