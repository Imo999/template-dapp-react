// src/theme/index.js
import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import { styles } from "./styles"
// Foundational style overrides
import { fonts } from "./foundations/fonts"
// Component style overrides
// import Badge from "./components/Badge"
const overrides = {
  styles,
  fonts,
  // Other foundational style overrides go here
  components: {
    // Badge,
    // Other components go here
  },
}
export default extendTheme(overrides)