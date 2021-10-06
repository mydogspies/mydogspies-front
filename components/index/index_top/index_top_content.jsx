import styled from "styled-components";

const IndexTopContent = () => {

    return (
        <Container>

            <ContentIndexTop>
                NEW INDEX TOP
            </ContentIndexTop>

        </Container>
    )

}

export default IndexTopContent;

const Container = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 100vh;
`;

const ContentIndexTop = styled.div`
  background-color: #7c509d;
  position: absolute;
  grid-column-start: 2;
  grid-column-end: 2;
  width: 100%;
  height: 100vh;
`;
