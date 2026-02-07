import { Box, Grid } from "@mui/material";
import "/src/App.css";
import YoutubePlayer from "./YoutubePlayer";
function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/public/day6_zip.png" style={{ width: "300px" }} />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <YoutubePlayer />
      </Grid>
    </>
  );
}

export default App;
