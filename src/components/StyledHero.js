import styled from "styled-components";
import defaultImg from "../images/artists.jpeg";

// note: back-ticks, not brackets or quotes...
const StyledHero = styled.header`
  min-height: 15vh;
  background: url(${props => (props.img ? props.img : defaultImg)}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
