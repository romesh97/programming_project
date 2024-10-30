import { Box } from "@mui/material";

//compoenents
import TopSection from "./components/topSection/page";
import PetCard from "./components/common/petcard/page";

export default function Home() {
  return (
    <Box component="div">
      <TopSection />
      <PetCard name={"asd"} text={"sad"} months={"asdsa"} gender={"sad"} city={"sad"} breed={"sad"} />
    </Box>
  );
}
