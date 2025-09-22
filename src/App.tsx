import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"#"}>
        <NavBar />
      </GridItem>

      <Show when={"lg"}>
        <GridItem
          area={"aside"}
          bg={"#"}
          display={{ base: "none", lg: "block" }}>
          Left Side Bar
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"#"}>
        Main Items
      </GridItem>
    </Grid>
  );
};

export default App;
