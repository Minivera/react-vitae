import React from 'react';
import { Level, LevelItem, Icon } from 'bloomer';
import { Profile } from 'react-vitae';

interface ProfileProps {
  profiles?: Profile[];
}

export const Profiles: React.FunctionComponent<ProfileProps> = ({
  profiles,
}): React.ReactElement<ProfileProps> | null => {
  if (!profiles) {
    return null;
  }

  return (
    <Level>
      {profiles.map(
        (profile, index): React.ReactElement => (
          <LevelItem key={index}>
            <a href={profile.url}>
              <Icon
                isSize="medium"
                alt={`Follow ${profile.username} on ${profile.network}`}
                className={`fab fa-${profile.network.toLowerCase()}`}
              />
            </a>
          </LevelItem>
        )
      )}
    </Level>
  );
};
