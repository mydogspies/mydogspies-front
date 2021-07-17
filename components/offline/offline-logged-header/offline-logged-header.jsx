import styled from "styled-components";
import React from "react";

const OfflineHeader = () => {

    return (
        <>
            <Tab>
                <a href='/api/auth/logout'>logout</a>
            </Tab>
        </>
    )
};

/* CSS */

const Tab = styled.div`
  position: fixed;
  background-color: cornflowerblue;
  height: 30px;
  width: 75px;
  left: 75%;
  border: 2px saddlebrown;
  border-radius: 0 0 5px 5px;
  font-size: 15px;
  text-align: center;
`;

export default OfflineHeader;
