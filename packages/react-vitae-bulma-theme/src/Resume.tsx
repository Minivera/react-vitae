import React from 'react';
import { Section, Container, Tile, Columns, Footer, Content } from 'bloomer';
import { Resume, ResumeProvider } from 'react-vitae';

import { BasicsSection } from './components/basics';
import { Skills } from './components/skills';
import { References } from './components/references';
import { EducationList } from './components/education';
import { WorkList } from './components/work';
import { VolunteerList } from './components/volunteer';
import { ProjectsList } from './components/projects';
import { AwardsList } from './components/awards';
import { PublicationsList } from './components/publications';
import { LanguagesList } from './components/languages';
import { InterestsList } from './components/interests';

interface ResumeComponentProps {
  resume: Resume;
}

export const ResumeComponent = ({ resume }: ResumeComponentProps): React.ReactElement<ResumeComponentProps> => (
  <ResumeProvider resume={resume}>
    <Section key="content">
      <Container>
        <Tile isAncestor>
          <Tile isSize={3} isParent>
            <Tile
              isChild
              render={(): React.ReactElement => (
                <BasicsSection>
                  <References />
                  <Skills />
                </BasicsSection>
              )}
            />
          </Tile>
          <Tile isParent isVertical>
            <Tile
              isChild
              render={(props: Record<string, unknown>): React.ReactElement => (
                <div {...props}>
                  <EducationList />
                  <br />
                  <WorkList />
                  <br />
                  <VolunteerList />
                  <br />
                  <ProjectsList />
                  <br />
                  <Columns>
                    <AwardsList />
                    <PublicationsList />
                  </Columns>
                  <Columns>
                    <LanguagesList />
                    <InterestsList />
                  </Columns>
                </div>
              )}
            />
          </Tile>
        </Tile>
      </Container>
    </Section>
    ,
    <Footer id="footer" key="footer">
      <Container>
        <Content>
          <p>
            Made with <a href="https://github.com/Minivera/react-vitae">react-vitae</a>
          </p>
        </Content>
      </Container>
    </Footer>
  </ResumeProvider>
);
