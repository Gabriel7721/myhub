import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"coral"}>
        Navigation Bar
      </GridItem>

      <Show when={"lg"}>
        <GridItem
          area={"aside"}
          bg={"gold"}
          display={{ base: "none", lg: "block" }}>
          Left Side Bar
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"dodgerblue"}>
        Main Items
      </GridItem>
    </Grid>
  );
};

export default App;
