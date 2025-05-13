import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Color } from "../../../components/color";
import Exp1 from "../../../assets/exp1.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LazyImage from "../../../components/lazyImage";
export function Exp() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 780px)");
  return (
    <Box
      width={"100%"}
      minWidth={"320px"}
      height={"auto"}
      margin={"0 auto"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      padding={"40px 0"}
      gap={"40px"}
    >
      <Typography variant="h4" color={Color.black} fontWeight={600}>
        {t("Experience")}
      </Typography>
      <Typography
        variant="body1"
        color={Color.grayText}
        fontWeight={400}
        width={isMobile ? "90%" : "50%"}
        textAlign={"center"}
      >
        {t("ExperienceDescription")}
      </Typography>

      <Box
        width={"90%"}
        maxWidth={"1110px"}
        margin={"0 auto"}
        display={"flex"}
        flexDirection={"column"}
        gap={"40px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"320px"}
        >
          <Box
            width={"45%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              padding={"6px 12px"}
              color={Color.green}
              bgcolor={Color.mint}
              borderRadius={"10px"}
              fontSize={"12px"}
              width={"fit-content"}
              fontWeight={600}
            >
              Auto QA
            </Typography>
            <Typography variant="body1" fontWeight={600}>{t("ExpName1")}</Typography>
            <Typography variant="body1" color={Color.grayText} fontSize={isMobile? "10px" : "12px"}>{t("ExpDescription1")}</Typography>

            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: Color.green,
              }}
              endIcon={<NavigateNextIcon />}
            >
              {t("ViewMore")}
            </Button>
          </Box>
          <Box width={"50%"} height={"100%"}>
            <LazyImage
              src={Exp1}
              alt="exp1"
              placeholder="exp1"
            />
          </Box>
        </Box>

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"320px"}
        >
          <Box width={"50%"} height={"100%"}>
            <LazyImage
              src={Exp1}
              alt="exp1"
              placeholder="exp1"
            />
          </Box>

          <Box
            width={"45%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              padding={"6px 12px"}
              color={Color.blue}
              bgcolor={Color.sea}
              borderRadius={"10px"}
              fontSize={"12px"}
              width={"fit-content"}
              fontWeight={600}
            >
              Auto QA
            </Typography>
            <Typography variant="body1" fontWeight={600}>{t("ExpName2")}</Typography>
            <Typography variant="body1" color={Color.grayText} fontSize={isMobile? "10px" : "12px"}>{t("ExpDescription2")}</Typography>

            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: Color.blue,
              }}
              endIcon={<NavigateNextIcon />}
            >
              {t("ViewMore")}
            </Button>
          </Box>
        </Box>

        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"320px"}
        >
          <Box
            width={"45%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Typography
              padding={"6px 12px"}
              color={Color.orange}
              bgcolor={Color.sun}
              borderRadius={"10px"}
              fontSize={"12px"}
              width={"fit-content"}
              fontWeight={600}
            >
              Auto QA
            </Typography>
            <Typography variant="body1" fontWeight={600}>{t("ExpName3")}</Typography>
            <Typography variant="body1" color={Color.grayText} fontSize={isMobile? "10px" : "12px"}>{t("ExpDescription3")}</Typography>

            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: Color.orange,
              }}
              endIcon={<NavigateNextIcon />}
            >
              {t("ViewMore")}
            </Button>
          </Box>
          <Box width={"50%"} height={"320px"}>
            <LazyImage
              src={Exp1}
              alt="exp1"
              placeholder="exp1"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
