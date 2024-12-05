import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export function SocialLink({ name, url, icon: Icon, color, description }: SocialLinkProps) {
  const isInternalLink = url.startsWith('/');
  const LinkComponent = isInternalLink ? Link : 'a';
  const linkProps = isInternalLink
    ? { to: url }
    : { href: url, target: "_blank", rel: "noopener noreferrer" };

  return (
    <LinkComponent
      {...linkProps}
      className={`group block p-3 rounded-lg bg-black/40 backdrop-blur-sm 
        ${color} transition-all duration-300 hover:translate-x-1`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-white" />
          <div>
            <div className="font-semibold text-white text-sm">{name}</div>
            <div className="text-xs text-gray-200">{description}</div>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
      </div>
    </LinkComponent>
  );
}