import React from 'react';
import { Title, Subtitle, Progress, Tag } from 'bloomer';
import { useSkills, Skill } from 'react-vitae';

const styles: { [s: string]: React.CSSProperties } = {
  mainDiv: {
    marginBottom: '1.25rem',
  },
  skillsList: {},
  skills: {
    marginBottom: '1rem',
  },
  skillTitle: {
    marginBottom: '0.5rem',
  },
  skillProgress: {
    marginBottom: '0.5rem',
  },
  skillTags: {
    textAlign: 'right',
  },
  tag: {
    marginLeft: '0.2rem',
  },
};

const levelToProgress = (level: string): number => {
  switch (level) {
    case 'Basic':
      return 1;
    case 'Initiated':
      return 2;
    case 'Average':
      return 3;
    case 'Competent':
      return 4;
    case 'Master':
      return 5;
    default:
      return 3;
  }
};

export const Skills: React.FunctionComponent = (): React.ReactElement | null => {
  const skills = useSkills();

  if (!skills) {
    return null;
  }

  return (
    <div id="skills" style={styles.mainDiv}>
      <Title isSize={4}>Professional Skills</Title>
      <div style={styles.skillsList}>
        {skills.map(
          (skill: Skill, index: number): React.ReactElement => (
            <div style={styles.skills} key={index}>
              <Subtitle isSize={5} style={styles.skillTitle}>
                {skill.name}
              </Subtitle>
              {skill.level && (
                <Progress isColor="primary" value={levelToProgress(skill.level)} max={5} style={styles.skillProgress} />
              )}
              {skill.keywords && (
                <div style={styles.skillTags}>
                  {skill.keywords.map(
                    (keyword: string, index: number): React.ReactElement => (
                      <Tag isColor="info" style={styles.tag} key={index}>
                        {keyword}
                      </Tag>
                    )
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
