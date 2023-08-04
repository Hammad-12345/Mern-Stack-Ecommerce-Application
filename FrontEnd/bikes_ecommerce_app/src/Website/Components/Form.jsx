import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Form = ({
  opensearchbar,
  openBlogsearchbar,
  openBikesForSalesearchbar,
}) => {
  return (
    <>
      {opensearchbar && (
        <>
          <Box
            width={"100%"}
            position={"relative"}
            display={"flex"}
            flexDirection={"column"}
            // gap={0}
          >
            <Typography
              sx={{
                fontFamily: "Arial",
                color: "#66B2FF",
                fontWeight: "600",
                fontSize: "15px",
              }}
              variant="h6"
            >
              Search Product By
            </Typography>
            <FormControl
              fullWidth
              sx={{
                " div fieldset": {
                  borderColor: "#6e6e6e52",
                  borderRadius: "6px",
                },
                " div:hover fieldset": {
                  borderColor: "#6e6e6e52 !important",
                },
                " label": {
                  fontFamily: "Poppins",
                  color: "#6e6e6e9c",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Search Product By
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Search Product By"
                // onChange={handleChange}
              >
                <MenuItem
                  value={"ByProductCategory"}
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  Category
                </MenuItem>
                <MenuItem
                  value={"ByProductName"}
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  Name
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
      {openBlogsearchbar && (
        <>
          <Box width={"100%"} position={"relative"}>
            <Typography
              sx={{
                fontFamily: "Arial",
                color: "#66B2FF",
                fontWeight: "600",
                fontSize: "15px",
              }}
              variant="h6"
            >
              Search Bikes Blogs By
            </Typography>
            <FormControl
              fullWidth
              sx={{
                " div fieldset": {
                  borderColor: "#6e6e6e52",
                  borderRadius: "6px",
                },
                " div:hover fieldset": {
                  borderColor: "#6e6e6e52 !important",
                },
                " label": {
                  fontFamily: "Poppins",
                  color: "#6e6e6e9c",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Search Bikes Blogs By
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Search Product By"

                // onChange={handleChange}
              >
                <MenuItem
                  value={"ByHastags"}
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  Hashtags
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>
      )}
      {openBikesForSalesearchbar && (
        <>
          <Box width={"100%"} position={"relative"}>
            <Typography
              sx={{
                fontFamily: "Arial",
                color: "#66B2FF",
                fontWeight: "600",
                fontSize: "15px",
              }}
              variant="h6"
            >
              Search Bikes For Sales By
            </Typography>
            <FormControl
              fullWidth
              sx={{
                " div fieldset": {
                  borderColor: "#6e6e6e52",
                  borderRadius: "6px",
                },
                " div:hover fieldset": {
                  borderColor: "#6e6e6e52 !important",
                },
                " label": {
                  fontFamily: "Poppins",
                  color: "#6e6e6e9c",
                },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Search Bikes For Sales By
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Search Product By"

                // onChange={handleChange}
              >
                <MenuItem
                  value={"ByBikesName"}
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  Name
                </MenuItem>
                <MenuItem
                  value={"ByBikesPrice"}
                  sx={{
                    fontFamily: "Poppins",
                  }}
                >
                  Price
                </MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
        </>
      )}
    </>
  );
};

export default Form;
