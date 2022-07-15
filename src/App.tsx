import React from "react";
import { Button } from "./components/elements/Button";
import { darkTheme } from "./theme/darkTheme";
import { Box, Text, Link } from "./components/common";

function App() {
  const [theme, setTheme] = React.useState("theme-default");

  React.useEffect(() => {
    document.body.classList.remove("theme-default", darkTheme);
    document.body.classList.add(theme);
    // console.log(document.body.classList);
  }, [theme]);

  return (
    <Box
      css={{
        position: "block",
        backgroundColor: "$gray1",
        width: "100vw",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <Box
        css={{
          display: "flex",
          width: "10em",
        }}
      >
        <Text css={{ margin: "auto", paddingRight: "1em" }}>switch theme:</Text>
        <Button
          style={{}}
          onClick={() =>
            setTheme(theme === "theme-default" ? darkTheme : "theme-default")
          }
        >
          {theme === "theme-default" ? "Dark" : "Light"}
        </Button>
      </Box>
      <Box css={{ padding: "2em" }}>
        <Box
          css={{
            display: "flex",
          }}
        >
          <Text css={{ marginTop: "auto", paddingRight: "1em" }}>
            Radix UI design system:
          </Text>
          <Link
            variant="blue"
            href="https://design-system.modulz-deploys.com/"
            target="_blank"
          >
            https://design-system.modulz-deploys.com/
          </Link>
        </Box>
        <Box
          css={{
            display: "flex",
            marginTop: "1em",
          }}
        >
          <Text css={{ marginTop: "auto", paddingRight: "1em" }}>repo</Text>
          <Link
            variant="blue"
            href="https://github.com/radix-ui/design-system"
            target="_blank"
          >
            https://github.com/radix-ui/design-system
          </Link>
        </Box>
      </Box>
      <Box css={{ padding: "2em" }}>
        <Box
          css={{
            display: "flex",
          }}
        >
          <Text css={{ marginTop: "auto", paddingRight: "1em" }}>
            Radix UI colors
          </Text>
          <Link
            variant="blue"
            href="https://www.radix-ui.com/docs/colors/palette-composition/the-scales"
            target="_blank"
          >
            https://www.radix-ui.com/docs/colors/palette-composition/the-scales
          </Link>
        </Box>
      </Box>
      <Box css={{ padding: "2em" }}>
        <Box
          css={{
            display: "flex",
          }}
        >
          <Text css={{ marginTop: "auto", paddingRight: "1em" }}>
            Stitches Docs:
          </Text>
          <Link
            variant="blue"
            href="https://stitches.dev/docs/introduction"
            target="_blank"
          >
            https://stitches.dev/docs/introduction
          </Link>
        </Box>
        <Box
          css={{
            display: "flex",
            marginTop: "1em",
          }}
        >
          <Text css={{ marginTop: "auto", paddingRight: "1em" }}>repo</Text>
          <Link
            variant="blue"
            href="https://github.com/stitchesjs/stitches"
            target="_blank"
          >
            https://github.com/stitchesjs/stitches
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
