import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <FaSun /> : <RiMoonClearFill />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  );
};

export default DarkModeSwitch;
