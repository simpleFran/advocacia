import React from "react";

import {
  DesignServices,
  Web,
  Security,
  LocalOffer,
  ShoppingCart,
  Build,
  Code,
  Support,
  Language,
  Palette,
  Work,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TestimonialSection } from "./TestimonialSection";
import FlippingButton from "./FlippingButton";
import { Fade, Slide } from "react-awesome-reveal";

const services = [
  {
    icon: <DesignServices />,
    title: "Vara Cíveis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <DesignServices />,
    title: "Familiar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Web />,
    title: "Outros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <Security />,
    title: "LGPD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <LocalOffer />,
    title: "Honorários Flexíveis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  {
    icon: <ShoppingCart />,
    title: "Pronto para Contar com a Gente",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
  // {
  //   icon: <Build />,
  //   title: "Easy to Customize",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  // },
  // {
  //   icon: <Code />,
  //   title: "Clean Code",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  // },
  {
    icon: <Support />,
    title: "Suporte 24/7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula mollis urna vel dignissim.",
  },
];

const services2 = [
  {
    icon: <Palette />,
    title: "Serviço X",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Build />,
    title: "Serviço Y",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Work />,
    title: "Profissionais OAB",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Code />,
    title: "Instâncias variadas",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Language />,
    title: "Internacionais",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
  {
    icon: <Support />,
    title: "Suporte Online",
    description:
      "Integer eu metus at orci scelerisque rutrum. Vivamus condimentum, ipsum.",
  },
];

const ServicesSection = () => {
  return (
    <React.Fragment>
      <Grid2 id="services" container spacing={2}>
        {services.map((item) => (
          <Grid2 key={item.title} size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Slide cascade delay={100}>
            <Paper elevation={2} sx={{ p: 4 }}>
              <Stack direction={"row"}>
                <IconButton color="error" size="small">
                  {item.icon}
                </IconButton>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                  }}
                  variant="h5"
                >
                  {item.title}
                </Typography>
              </Stack>
              <Typography>{item.description}</Typography>
            </Paper>
            </Slide>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={[
          (theme) => ({
            mt: 1,
            py: 4,
            px: 2,
            background: theme.vars.palette.grey[100],
            ...theme.applyStyles("dark", {
              background: theme.vars.palette.grey[900],
            })
          }),
        ]}
      >
        <Stack direction={{lg: "row", md: "row", sm: "column", xs: "column"}} sx={{ justifyContent: "space-between" }}>
          <Slide direction="right" duration={2000}>
          <Typography
            variant="h3"
            sx={[
              (theme) => ({
                fontWeight: 500,
                fontFamily: "PlayFair",
                lineHeight: 1.3,
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
                }
              }),
            ]}
          >
            Gostaria de experimentar a demonstração?
          </Typography>
          </Slide>
          <Slide direction="left" duration={3000}>
          <FlippingButton
            frontText={"Descubra Mais"}
            backText={"Comece Agora"}
            frontColor={"warning"}
            backColor={"inherit"}
            variant="outlined"
          />
          </Slide>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage: "url(/service_bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundAttachment: "fixed",
          width: "100%",
          p: 4,
          display: "flex", // Enables Flexbox
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "800px", // Adjust width as needed
          }}
        >
          <TestimonialSection />
        </Box>
      </Box>

      <Grid2 container spacing={2} sx={{ pt: 4 }}>
        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Grid2 container spacing={2} sx={{height: "100%"}}>
            {services2.map((item) => (
              <Grid2 key={item.title} size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                <Fade direction="top-right" cascade delay={100} duration={1500}>
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Stack direction={"row"}>
                    <IconButton color="warning" size="small">
                      {item.icon}
                    </IconButton>
                    <Typography variant="h5">{item.title}</Typography>
                  </Stack>
                  <Typography>{item.description}</Typography>
                </Paper>
                </Fade>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
        <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <CardMedia
            component="img"
            height="400"
            image="service_laptop2.jpg"
            alt="service laptop2"
            sx={{ borderRadius: 2, height: "100%" }}
          />
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
};

export default ServicesSection;
