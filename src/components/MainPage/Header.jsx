import styled from "styled-components";
import AreaToggle from "./AreaToggle";

const StyledHeader = styled.div`
  width: 390px;
  height: 71px;
  // position: fixed;
  // top: 0;
  margin-bottom: 28px;
  background-color: white; /* Set background color to white */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;

  border-bottom-style: solid;
  border-bottom-width: 0.5px;
`;

export default function Header() {

  return (
    <StyledHeader>
      <AreaToggle/>
    </StyledHeader>
  );
}
