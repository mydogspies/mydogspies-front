import styled from 'styled-components';

/* Drop shadow and animation effects for the main nav buttons on the page */
const MenuIconEffects = styled.div`
  filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.05));
  :hover {
    cursor: pointer;
    transform: translate(0, 0) scale(1.05) rotate(0);
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.08));
  }
  
  :active {
    cursor: pointer;
    transform: translate(0, 0) scale(0.995) rotate(1deg);
    filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.01));
  }
`;

export {MenuIconEffects};
