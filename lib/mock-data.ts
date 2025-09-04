interface DailyDatum {
  date: string;
  Projections: number;
  Actuals: number;
}

export const projectionsVsActualsData: DailyDatum[] = [
  { date: 'Jan', Projections: 15, Actuals: 12 },
  { date: 'Feb', Projections: 20, Actuals: 18 },
  { date: 'Mar', Projections: 10, Actuals: 15 },
  { date: 'Apr', Projections: 25, Actuals: 22 },
  { date: 'May', Projections: 18, Actuals: 20 },
  { date: 'Jun', Projections: 22, Actuals: 19 },
];

interface RevenueDatum {
  date: string;
  currentWeek: number;
  previousWeek: number;
}

export const revenueData: RevenueDatum[] = [
  { date: '2023-01-01', currentWeek: 10, previousWeek: 12 },
  { date: '2023-02-01', currentWeek: 15, previousWeek: 10 },
  { date: '2023-03-01', currentWeek: 8, previousWeek: 14 },
  { date: '2023-04-01', currentWeek: 20, previousWeek: 18 },
  { date: '2023-05-01', currentWeek: 12, previousWeek: 15 },
  { date: '2023-06-01', currentWeek: 25, previousWeek: 20 },
];

interface LocationRevenue {
  city: string;
  revenue: string;
  countryCode: string;
}

export const revenueByLocationData: LocationRevenue[] = [
  { city: "New York", revenue: "72K", countryCode: "us" },
  { city: "San Francisco", revenue: "39K", countryCode: "us" },
  { city: "Sydney", revenue: "25K", countryCode: "au" },
  { city: "Singapore", revenue: "61K", countryCode: "sg" },
];

export interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

export const topSellingProductsData: Product[] = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export interface SalesDatum {
  label: string;
  value: number;
  amount: string;
}

export const totalSalesData: SalesDatum[] = [
  { label: 'Direct', value: 300.56, amount: '300.56' },
  { label: 'Affiliate', value: 135.18, amount: '135.18' },
  { label: 'Sponsored', value: 154.02, amount: '154.02' },
  { label: 'E-mail', value: 48.96, amount: '48.96' },
];

import { BugPlay, UserIcon, WifiIcon } from "lucide-react";

interface Notification {
  icon: React.ElementType;
  message: string;
  time: string;
}

export const notificationsData: Notification[] = [
  { icon: BugPlay, message: "You have a bug that needs...", time: "Just now" },
  { icon: UserIcon, message: "New user registered", time: "59 minutes ago" },
  { icon: BugPlay, message: "You have a bug that needs...", time: "12 hours ago" },
  { icon: WifiIcon, message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

interface Activity {
  avatarSrc: string;
  avatarFallback: string;
  message: string;
  time: string;
}

export const activitiesData: Activity[] = [
  { avatarSrc: "/avatars/01.png", avatarFallback: "OG", message: "You have a bug that needs...", time: "Just now" },
  { avatarSrc: "/avatars/02.png", avatarFallback: "NS", message: "Released a new version", time: "59 minutes ago" },
  { avatarSrc: "/avatars/03.png", avatarFallback: "KC", message: "Submitted a bug", time: "12 hours ago" },
  { avatarSrc: "/avatars/04.png", avatarFallback: "AM", message: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { avatarSrc: "/avatars/05.png", avatarFallback: "GS", message: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

export interface Contact {
  avatarSrc: string;
  avatarFallback: string;
  name: string;
}

export const contactsData: Contact[] = [
  { avatarSrc: "/avatars/06.png", avatarFallback: "NC", name: "Natali Craig" },
  { avatarSrc: "/avatars/07.png", avatarFallback: "DC", name: "Drew Cano" },
  { avatarSrc: "/avatars/08.png", avatarFallback: "OD", name: "Orlando Diggs" },
  { avatarSrc: "/avatars/09.png", avatarFallback: "AL", name: "Andi Lane" },
  { avatarSrc: "/avatars/10.png", avatarFallback: "KM", name: "Kate Morrison" },
  { avatarSrc: "/avatars/11.png", avatarFallback: "KO", name: "Koray Okumus" },
];
