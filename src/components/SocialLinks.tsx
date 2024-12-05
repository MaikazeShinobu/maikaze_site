import React from 'react';
import { SocialLink } from './SocialLink';
import { LucideIcon } from 'lucide-react';

interface SocialLinkData {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

interface SocialLinksProps {
  mainLinks: SocialLinkData[];
  gridLinks: SocialLinkData[];
  pastLinks: SocialLinkData[];
}

export function SocialLinks({ mainLinks, gridLinks, pastLinks }: SocialLinksProps) {
  return (
    <div className="space-y-3">
      {mainLinks.map((link) => (
        <SocialLink key={link.name} {...link} />
      ))}

      <div className="grid grid-cols-2 gap-3">
        {gridLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {pastLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>
    </div>
  );
}