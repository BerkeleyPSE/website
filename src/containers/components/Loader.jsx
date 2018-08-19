import React from 'react';

import styled from 'styled-components';

const Loader = () => (
  <Container className="m-2">
    <Image
      src="http://res.cloudinary.com/berkeleypse-tech/image/upload/f_auto,fl_force_strip,q_auto:best/app/logo"
      alt="Pi Sigma Epsilon Logo"
      height="50px"
      width="89px"
    />
    <Icon className="fas fa-spin fa-spinner" />
  </Container>
);

export default Loader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
`;

const Icon = styled.i`
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  font-size: 250px;
  font-weight: 100;
  color: var(--accent);
`;
