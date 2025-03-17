import {
  ControlsButton,
  ControlsContainer,
  ControlsDisplay,
} from "./Controls.styled";

export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <ControlsContainer>
      <ControlsDisplay>Lat: {(longitude ?? 0).toFixed(5)}</ControlsDisplay>
      <ControlsDisplay>Long: {(latitude ?? 0).toFixed(5)}</ControlsDisplay>
      <ControlsButton type="button" onClick={onRefresh}>
        Refresh
      </ControlsButton>
    </ControlsContainer>
  );
}