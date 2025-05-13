import { Box, Typography, FormControl, TextField, Button, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Color } from "../../../components/color";
import SendIcon from "@mui/icons-material/Send";
import VietNameFlag from "../../../assets/vietnam.png";
export function Contact() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <Box
      width={"100%"}
      minWidth={"320px"}
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      bgcolor={Color.black}
      textAlign={"center"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} flexDirection={"column"} gap="32px">
        <Typography variant="h4" color={"white"} mt={"32px"} fontWeight={600}>
          {t("GetInTouch")}
        </Typography>

        <Typography
          variant="body1"
          color={Color.grayText}
          width={isMobile? "90%" : "540px"}
          textAlign={"center"}
          mx={"auto"}
        >
          {t("GetInTouchDescription")}
        </Typography>

        <FormControl
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            width: "360px",
            mx: "auto",
            mt: "12px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label={t("Name")}
            variant="outlined"
            sx={{
              borderRadius: "8px",
              bgcolor: "white",
              "& .Mui-focused .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
          <TextField
            id="email"
            label={t("Email")}
            variant="outlined"
            sx={{
              borderRadius: "8px",
              bgcolor: "white",
              "& .Mui-focused .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
          <TextField
            id="message"
            label={t("Message")}
            variant="outlined"
            multiline
            rows={4}
            sx={{
              borderRadius: "8px",
              bgcolor: "white",
              "& .Mui-focused .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: Color.green, height: "50px" }}
            endIcon={<SendIcon />}
          >
            {t("ContactMe")}
          </Button>
        </FormControl>
      </Box>

      <Box
        width={"100%"}
        height={"70px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={Color.gray}
      >
        <Typography variant="body2" color={Color.grayText} fontWeight={600}>
          Độc lập, Tự do, Hạnh phúc{" "}
          <img
            src={VietNameFlag}
            alt="VietNam"
            loading="lazy"
            style={{
              width: "24px",
              height: "16px",
              objectFit: "cover",
              alignItems: "center",
              borderRadius: "2px",
              marginLeft: "4px",
            }}
          />
        </Typography>
      </Box>
    </Box>
  );
}
