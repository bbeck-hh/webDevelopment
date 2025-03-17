import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lampen, onToggleLampe }) {
  return (
    <StyledLights lampen={lampen}>
      {
        lampen.map((lampe) => {
          return <li key={lampe.id}><Light name={lampe.name} isOn={lampe.isOn} onToggleLampe={onToggleLampe} /></li>
        })
      }

    </StyledLights>
  );
}
