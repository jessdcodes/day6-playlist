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
        <img src="src/assets/day6_zip.png" style={{ width: "300px" }} />
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?si=ZKGZsGMIz7T03w8N&amp;list=PLI6-3D3hE5xilbhU4Wvdl49zm7tRIxkTL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
        <YoutubePlayer />
      </Grid>
    </>
  );
}

export default App;
