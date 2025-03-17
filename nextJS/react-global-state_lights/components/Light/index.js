import { Icon, LightButton, Name, State, Text } from "./Light.styled";

export default function Light({ name, isOn, onToggleLampe }) {

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggleLampe();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
