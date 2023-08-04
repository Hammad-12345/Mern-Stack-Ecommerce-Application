import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import TypingCom from "../Typing";

const Banner = () => {
  const [image1] = useState(true);
  const [image2] = useState(false);
  return (
    <>
      <Box height={"100vh"} position={"relative"} zIndex={1}>
        <Header />
        {image1 && (
          <>
            <Box
              height={"100%"}
              sx={{
                backgroundImage: `url(${"https://i.pinimg.com/originals/69/96/56/69965663f1231b946cd69ce89fd0f5d6.jpg"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundColor: "#3d3b3b",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "overlay",
              }}
            ></Box>
          </>
        )}
        {image2 && (
          <>
            <Box
              height={"100%"}
              sx={{
                backgroundImage: `url(${"https://cdn.idntimes.com/content-images/post/20220420/munbaik-cycling-clothing-msv2vktuqeq-unsplash-3d747a28288552e2bfff861682a470cc_600x400.png"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
                backgroundColor: "#3d3b3b",
                backgroundAttachment: "fixed",
                backgroundBlendMode: "multiply",
              }}
            >
              hello
            </Box>
          </>
        )}

        <Box
          position={"absolute"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          sx={{
            top: { sm: "40%", xs: "45%" },
            width: { md: "700px", sm: "600px", xs: "100%" },
            paddingX: 3,
            textAlign: { md: "start", xs: "center", sm: "start" },
          }}
        >
          <TypingCom />
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "#fff",
              fontFamily: "Raleway",
              fontWeight: "500",
              alignSelf: { sm: "flex-start", xs: "center" },
              paddingX: 4,
              paddingY: 1,
              position: "relative",
              zIndex: 1,
              transition: "transform 0.3s linear ",

              " :hover": {
                backgroundColor: "#fff",
                color: "#fff",
              },
              " ::before": {
                content: '""',
                backgroundColor: "black",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: -1,
                transform: "scaleX(0)",
                transition: "transform 0.3s ",
                transitionTimingFunction: "cubic-bezier(0.5,1.6,0.4,0.7)r",
                transformOrigin: "0 0",
              },
              " :hover::before": {
                transform: "scaleX(1)",
                borderRadius: "3px",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
