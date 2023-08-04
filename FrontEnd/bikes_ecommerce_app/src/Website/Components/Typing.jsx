import { Box } from "@mui/material";
import React, { useState } from "react";

const TypingCom = () => {
  const TypingData =
    "PedalPrime: Find the Perfect Bikes Accessories to Maximize Your Riding Potential";

  const StringintoArray = TypingData.split("");
  const [ShowStringText, UpdateShowStringText] = useState("");
  const TypingEffect = () => {
    if (ShowStringText.length !== StringintoArray.length) {
      UpdateShowStringText(
        ShowStringText.concat(StringintoArray[ShowStringText.length])
      );
    } else {
      setTimeout(() => {
        UpdateShowStringText("");
      }, 1000);
    }
  };
  setTimeout(TypingEffect, 100);

  return (
    <>
      <Box
        sx={{
          fontFamily: "Arial",
          fontSize: { md: "46px", sm: "36px", xs: "25px" },
          fontWeight: "200",
          color: "white",
          fontStyle: "normal",
          // textTransform: "uppercase",
        }}
      >
        {ShowStringText}
      </Box>
    </>
  );
};

export default TypingCom;
