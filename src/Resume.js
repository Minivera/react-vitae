import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bloomer imports
import { 
    Section,
    Container, 
    Tile,
    Columns,
    Column,
    Footer,
    Content
} from 'bloomer';

import { BasicsSection } from './components/basics';
import { Skills } from './components/skills';
import { References } from './components/references';
import { EducationList } from './components/education';
import { WorkList } from './components/work';
import { VolunteerList } from './components/volunteer';
import { AwardsList } from './components/awards';
import { PublicationsList } from './components/publications';
import { Languages } from './components/languages';
import { Interests } from './components/interests';

import 'react-tippy/dist/tippy.css';

const styles = {
};

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: (window.location.hash ?  window.location.hash.replace('#', '') : 'basics')
        };
    }
    
    getChildContext() {
        const { schema } = this.props;
        
        return {schema};
    }
    
    handleMenuLinkClick = (section) => {
        window.location.hash = `#${section}`;
        this.setState({
            activeSection: section
        });
    }
    
    render() {
        const { children } = this.props;
        
        const { activeSection } = this.state;
        
        if (!React.Children.count(children))
        {
            return [
                <Section key="content">
                    <Container>
                        <Tile isAncestor>
                            <Tile isSize={3} isParent>
                                <Tile isChild render={
                                    props => (
                                        <BasicsSection activeSection={activeSection}
                                            onMenuLinkClick={this.handleMenuLinkClick}>
                                            <References />
                                            <Skills />
                                        </BasicsSection>
                                    )
                                } />
                            </Tile>
                            <Tile isParent isVertical>
                                <Tile isChild render={
                                    props => (
                                        <div {...props}>
                                            <EducationList />
                                            <br />
                                            <WorkList />
                                            <br />
                                            <VolunteerList />
                                            <br />
                                            <Columns>
                                                <AwardsList />
                                                <PublicationsList/>
                                            </Columns>
                                            <Columns>
                                                <Languages />
                                                <Interests />
                                            </Columns>
                                        </div>
                                    )
                                } />
                            </Tile>
                        </Tile>
                    </Container>
                </Section>,
                <Footer id='footer' key="footer">
                    <Container>
                        <Content>
                            <p>
                                Made with by <a>react-bulma-vitae</a>
                            </p>
                        </Content>
                    </Container>
                </Footer>
            ];
        }
        return children;
    }
}

Resume.propTypes = {
    //See https://jsonresume.org/schema/
    schema: PropTypes.shape({
        basic: PropTypes.shape({
           name: PropTypes.string,
           label: PropTypes.string,
           picture: PropTypes.string,
           email: PropTypes.string,
           phone: PropTypes.string,
           website: PropTypes.string,
           summary: PropTypes.string,
           location: PropTypes.shape({
               address: PropTypes.string,
               postalCode: PropTypes.string,
               city: PropTypes.string,
               countryCode: PropTypes.string,
               region: PropTypes.string
           }),
           profiles: PropTypes.arrayOf(PropTypes.shape({
               network: PropTypes.string,
               username: PropTypes.string,
               url: PropTypes.string,
           }))
        }),
        work: PropTypes.arrayOf(PropTypes.shape({
           company: PropTypes.string,
           position: PropTypes.string,
           website: PropTypes.string,
           startDate: PropTypes.string,
           endDate: PropTypes.string,
           summary: PropTypes.string,
           highlights: PropTypes.arrayOf(PropTypes.string)
        })),
        volunteer: PropTypes.arrayOf(PropTypes.shape({
           organization: PropTypes.string,
           position: PropTypes.string,
           website: PropTypes.string,
           startDate: PropTypes.string,
           endDate: PropTypes.string,
           summary: PropTypes.string,
           highlights: PropTypes.arrayOf(PropTypes.string)
        })),
        education: PropTypes.arrayOf(PropTypes.shape({
           institution: PropTypes.string,
           area: PropTypes.string,
           studyType: PropTypes.string,
           startDate: PropTypes.string,
           endDate: PropTypes.string,
           gpa: PropTypes.string,
           courses: PropTypes.arrayOf(PropTypes.string)
        })),
        awards: PropTypes.arrayOf(PropTypes.shape({
           title: PropTypes.string,
           date: PropTypes.string,
           awarder: PropTypes.string,
           summary: PropTypes.string
        })),
        publications: PropTypes.arrayOf(PropTypes.shape({
           name: PropTypes.string,
           publisher: PropTypes.string,
           releaseDate: PropTypes.string,
           website: PropTypes.string,
           summary: PropTypes.string
        })),
        skills: PropTypes.arrayOf(PropTypes.shape({
           name: PropTypes.string,
           level: PropTypes.oneOf(['Basic', 'Initiated', 'Average', 'Competent', 'Master']),
           keywords: PropTypes.arrayOf(PropTypes.string)
        })),
        languages: PropTypes.arrayOf(PropTypes.shape({
           name: PropTypes.string,
           level: PropTypes.string
        })),
        interests: PropTypes.arrayOf(PropTypes.shape({
           name: PropTypes.string,
           keywords: PropTypes.arrayOf(PropTypes.string)
        })),
        references: PropTypes.arrayOf(PropTypes.shape({
           name: PropTypes.string,
           reference: PropTypes.string
        }))
    }).isRequired,
};

Resume.defaultProps = {
    
};

Resume.childContextTypes = {
  schema: PropTypes.shape({})
};


export default Resume;