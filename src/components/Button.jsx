import { Button } from "@mui/material";
import { ColourConfigurations } from "../constants/ColourConfigurations";

export const Buttons = ({ buttonName, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} className="RuleButton">
      {buttonName}
    </Button>
  );
};
