import styled from "styled-components";

const IndexPillars = () => {

    return (
        <Container>
            <ColumnCode className="index coding">
                <h1>Programming</h1>
            </ColumnCode>
            <ColumnVisual className="index visual">
                <h1>3D Visualisation</h1>
            </ColumnVisual>
            <ColumnProject className="index project">
                <h1>Project Management</h1>
            </ColumnProject>
        </Container>
    )

}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1.5fr 1fr;
  height: 100vh;
`;

const ColumnCode = styled.div`
  grid-column-start: 2;
  background-color: #bae7a9;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding:5% 0 0 5%;

  &:hover {
    ${Container} {
      grid-template-columns: 1fr 3fr 0.5fr 0.5fr 1fr;
    }
  }

  
`;

const ColumnVisual = styled.div`
  grid-column-start: 3;
  background-color: #c8b7d4;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding:5% 0 0 5%;
`;

const ColumnProject = styled.div`
  grid-column-start: 4;
  background-color: #b1d4d7;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: left;
  padding:5% 0 0 5%;
`;

export default IndexPillars;