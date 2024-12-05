import { Youtube, Instagram, Twitter, BookText, Music, Headphones, Image, Music2, Mail } from 'lucide-react';
import linksData from './links.json';
import contactData from './contact.json';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  Youtube,
  Instagram,
  Twitter,
  BookText,
  Music,
  Headphones,
  Image,
  Music2,
  Mail
};

function mapLinksWithIcons(links: any[]): SocialLink[] {
  return links.map(link => ({
    ...link,
    icon: iconMap[link.icon]
  }));
}

export const socialLinks = [
  ...mapLinksWithIcons(linksData.mainLinks),
  ...mapLinksWithIcons(linksData.gridLinks),
  ...mapLinksWithIcons(linksData.pastLinks)
];

export const contactLink = {
  ...contactData.contact,
  icon: iconMap[contactData.contact.icon]
};