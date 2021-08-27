import styled from "styled-components";

const PullOutMenu = () => {

    return (
            <MenuContainer>
                <a href="#"><p>Navigation Menu</p></a>
            </MenuContainer>
    )
}

export default PullOutMenu;

const MenuContainer = styled.div`
  background-color: orangered;
  height: 76vh;
  width: 300px;
  border-radius: 10px 0 0 10px;
`;
