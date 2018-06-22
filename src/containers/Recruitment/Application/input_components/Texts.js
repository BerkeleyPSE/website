import styled from 'styled-components';

const Desc = styled.span`
  color: var(--main-alt);
  font-size: 0.75rem;
  margin: 0.125rem 0;
  text-transform: uppercase;
`;

const Req = Desc.extend`
  color: red;
  margin: 0 0.125rem;
`;

export { Desc, Req };
