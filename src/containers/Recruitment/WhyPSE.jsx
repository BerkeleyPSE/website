import React from 'react';

// node modules
import styled from 'styled-components';

// components
import { PageHeader, SectionHeader } from '../components/HeaderStyles';
import { ParaText } from '../components/TextStyles';
import { Image } from '../components/ImageStyles';

const WhyPSE = () => {
  document.title = 'Why PSE? - Pi Sigma Epsilon | Zeta Chi Chapter';

  return (
    <div id="why-pse-container">
      <PageHeader>Why PSE?</PageHeader>
      <div id="body-container">
        <DarkSection>
          <LightText>
            Pi Sigma Epsilon provides the perfect balance of professionalism and
            brotherhood. Throughout the Prospective Member Training process, our
            PMs gain professional skills that leave a lasting impact on their
            long-term careers. As a result, our brothers land jobs at top-tier
            companies. Additionally, our brothers gain access to a tight-knit
            alumni network and are able to foster professional connections even
            after graduating.
            <br /> <br />
            What really makes PSE special is our tight-knit brotherhood. Most
            brothers would say that some of their closest social circle is PSE.
            As a whole fraternity, we often do social events such as an
            overnight retreat. On a day-to-day basis, brothers will typically
            hangout with each other or study with each other. These bonds that
            are created in PSE will last a lifetime and most of our alumni come
            back and visit our chapter, year after year.
          </LightText>
        </DarkSection>
        <LightSection>
          <SHeader className="py-1h px-0" altStyle>
            Rahul Rangnekar
          </SHeader>
          <DescriptionContainer>
            <DarkText>
              When I came into Berkeley as a freshman, I was shocked by the
              sheer number of business organizations and fraternities on campus.
              As an intended-business major, I knew I wanted to join at least
              one of these. I randomly decided upon a business fraternity,
              attended the rush events, and failed to get past the first round
              of interviews. Throughout my brief rush process, I felt as though
              every word coming out of my mouth was being judged. I felt as
              though I had to prove myself (which is a good thing), but that
              after a certain point, minds were made up and my words fell on
              deaf ears. It wasn’t a culture fit.
              <br /> <br />
              When I recruited for PSE, however, I had an entirely different
              experience. The brothers I met and conversations I had were beyond
              genuine. The questions asked of me were beyond the usual “What’s
              your major?”, “Why this fraternity/organization?”, and “What are
              your qualifications?”. I had the floor to open up about myself, my
              campus involvements, my career aspirations, rather than dictate my
              resume and hope brothers liked what they heard. I talked with
              now-alums Kent and Kevin about running cross country in high
              school during the formal Meet the Chapter event. I met Jill, my
              future Big, during a game we played at the Social Mixer. My
              interview with the brothers was tough but positive. I could be
              myself with the brothers in PSE.
              <br /> <br />
              I love my decision in joining this fraternity for several reasons.
              <br /> <br />
              (1) PSE doesn’t haze. As a prospective member, I was never forced
              to do anything I didn’t want to do. I didn’t have to wake up at
              6am in a suit-and-tie and run to campus to flyer students. I
              didn’t experience any physical or emotional abuse because my work
              wasn’t perfect or I asked for more direction. I didn’t drink and
              do mindless work. I didn’t sacrifice my academics or cut off all
              communication to my friends because I was in the training process.
              My PMT was fun and educational. I grew closer with my fellow
              Thetas because we all enjoyed showing up and putting in the work
              in a positive environment. So when PSE says it doesn't haze and
              then sticks to it, I’m proud to say that I am a brother of a
              fraternity that shares my values.
              <br /> <br />
              (2) Chapter Growth — we’re a relatively new fraternity chapter.
              We’ve been around for only 4 years. I’ve been able to see our
              progress from when I joined to now, and we still have a crazy
              amount of room for growth. We received sponsorship from Haas. We
              graduated our third class of seniors into amazing companies for
              full-time. We’ve gained real-world experiences working on
              corporate projects with Under Armour and McKesson. We’ve had info
              sessions with Goldman Sachs and PwC, networking dinners with
              Infosys, CBS, and L.E.K. Consulting. There’s so much we’ve been
              able to accomplish in just one year. My contributions to the
              fraternity make a difference. Our future is bright.
              <br /> <br />
              (3) The Brothers — it’s cliche, but it’s true — my Cal experience
              would not have been the same without them. I’ve visited corporate
              offices with Akshay and Eva, taught Jon and PMs Adobe Photoshop,
              ran to the Berkeley Marina with Taylor, Kevin, Charissa, and Emma,
              studied with Abhi and Catie during dead week, worked on the Under
              Armour project with Nancy and Adil, and even picked up two
              spectacular Littles in Kyle and Varsha. PSE has given me a
              brotherhood that genuinely cares for my happiness and success.
            </DarkText>
            <Image
              src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/rahul"
              border
              alt="Rahul Rangnekar"
              width="300px"
            />
          </DescriptionContainer>
        </LightSection>
      </div>
    </div>
  );
};

export default WhyPSE;

const SHeader = SectionHeader.extend`
  border-bottom: 3px solid #333;
  margin: auto;
  text-align: center;
  width: 95%;
`;

const Section = styled.div`
  padding: 2.5rem 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const DarkSection = Section.extend`
  background-color: #333;
`;

const LightSection = Section.extend`
  background-color: #fff;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem auto;
  width: 100%;
  text-align: left;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Text = ParaText.extend`
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0 0.3125rem;

  @media (min-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const DarkText = Text.extend`
  color: #333;
`;

const LightText = Text.extend`
  color: #fff;
  margin: auto;
  text-align: left;
  @media (min-width: 320px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;
