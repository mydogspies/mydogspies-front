import styled from 'styled-components';

const MenuIconEffects = styled.div`
  :hover {
    cursor: pointer;
    transform: translate(0, 0) scale(1.1) rotate(0);
  }
  
  :active {
    cursor: pointer;
    transform: translate(0, 0) scale(0.990) rotate(1deg);
  }
`;

export {MenuIconEffects};
