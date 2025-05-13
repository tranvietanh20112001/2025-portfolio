import { Box } from "@mui/material";
import { Color } from "../../../components/color";
import { Header } from "../../../components/header";

export function Index() {
  return (
    <Box
      width={"100%"}
      minWidth={"320px"}
      bgcolor={Color.black}
      height={"100vh"}
      margin={"0 auto"}
    >
      <Box width={"90%"} maxWidth={"1110px"} margin={"0 auto"}>
        <Header />
      </Box>
    </Box>
  );
}
