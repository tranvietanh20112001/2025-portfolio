import { Box } from "@mui/material";
import { Color } from "./color";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./languageSwitch";  

export function Header() {

  const { t } = useTranslation();


  const Links = [
    { name: t('HomeBtn'), href: "/" },
    { name: t('ProjectsBtn'), href: "/projects" },
    { name: t('BlogsBtn'), href: "/blogs" },
    { name: t('GetInTouchBtn'), href: "/contact" },
    { name: GitHubIcon, href: "https://github.com/tranvietanh20112001" },
    { name: LinkedInIcon, href: "https://github.com/tranvietanh20112001" },
  ];

  const linkStyle = {
    textDecoration: "none",
    color: Color.grayText,
    fontSize: "14px",
  };

  return (
    <>
      <Box
        width={"100%"}
        maxWidth={"1110px"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        height={"70px"}
        margin={"0 auto"}
        bgcolor={Color.gray}
        borderRadius={"0 0 10px 10px"}
        sx={{
          typography: "body1",
          ...{
            animation: "fadeIn 1s ease-in-out",
            "@keyframes fadeIn": {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          },
        }}
      >
        {Links.map((link, index) => (
          <Link key={index} href={link.href} sx={linkStyle}>
            {typeof link.name === "string" ? link.name : <link.name />}
          </Link>
        ))}

        <LanguageSwitch />
      </Box>
    </>
  );
}
