import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies and data structures 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="50" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="50" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size="50" />
        <ListContainer>
          <ListTitle>Data Structures</ListTitle>
          <ListParagraph>
            Experience with <br/>
            multiple DS <br/>
            and Competative coding
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
