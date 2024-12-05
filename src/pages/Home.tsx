import React from 'react';
import { Profile } from '../components/Profile';
import { SocialLink } from '../components/SocialLink';
import { TopicsSlideshow } from '../components/TopicsSlideshow';
import { Footer } from '../components/Footer';
import { ProfileDescription } from '../components/ProfileDescription';
import { socialLinks } from '../data/socialLinks';
import profileContent from '../data/profileContent.json';
import { getAssetPath } from '../utils/assetUtils';

export function Home() {
  const soundCloudAndBefore = socialLinks.slice(0, 3);
  const spotifyAndAfter = socialLinks.slice(3, 6);
  const gridLinks = socialLinks.slice(6, 8);
  const pastLinks = socialLinks.slice(8);

  return (
    <div className="min-h-screen bg-black relative">
      <div 
        className="absolute inset-0 bg-black/90 bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url(${getAssetPath('images/Background.png')})`,
          backgroundPosition: '60% -10%',
          backgroundSize: '200% auto'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <Profile bio={profileContent.bio} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 w-full mb-8">
          <div className="w-3/4 mx-auto mb-8">
            <TopicsSlideshow />
          </div>

          <div className="space-y-3">
            {soundCloudAndBefore.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}

            <ProfileDescription />

            {spotifyAndAfter.map((link) => (
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

          <Footer />
        </div>
      </div>
    </div>
  );
}