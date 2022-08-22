import { Box } from "@mui/system";
import LOGO from "../assets/logo.svg";

export const Logo = () => {
  return (
    <Box
      component="img"
      src={LOGO}
      sx={{
        width: "100%",
        objectFit: "contain",
      }}
    />
  );
};
