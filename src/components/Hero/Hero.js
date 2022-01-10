import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection >
      <SectionTitle main center>
        Overthinking Developer
      </SectionTitle>
      <SectionText>
        Web Development Enthusiast 
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1yjfSCoi7S7n3m4LgkpnJVse-BALq19T0/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;