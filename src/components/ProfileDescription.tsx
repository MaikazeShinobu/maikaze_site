import React from 'react';
import { Link } from 'react-router-dom';
import profileContent from '../data/profileContent.json';
import { SocialLink } from './SocialLink';
import { contactLink } from '../data/socialLinks';

export function ProfileDescription() {
  const { description } = profileContent;
  
  return (
    <div className="mt-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="text-white/90 text-sm leading-relaxed space-y-2">
        {description.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <Link 
          to="/projects"
          className="group block text-white bg-black/60 hover:bg-black/80 px-4 py-2 rounded-lg mt-4 transition-all duration-300 transform scale-120"
        >
          <span className="relative text-base">
            舞風の活動一覧を見る
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </Link>

        <div className="mt-4 space-y-2">
          {description.afterProjectsText.map((text, index) => (
            <p key={index} className="text-gray-300">{text}</p>
          ))}
        </div>

        <div className="mt-2">
          <SocialLink {...contactLink} />
        </div>
      </div>
    </div>
  );
}