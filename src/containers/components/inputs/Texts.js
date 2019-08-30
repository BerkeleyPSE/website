import styled from 'styled-components';

const Desc = styled.span`
  color: var(--main-alt);
  font-size: 0.75rem;
`;

const Req = styled(Desc)`
  color: red;
  margin: 0 0.125rem;
`;

export { Desc, Req };
