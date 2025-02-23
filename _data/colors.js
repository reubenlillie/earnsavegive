/**
 * @file Contains global data for colors
 * @author Reuben L. Lillie <reuben@earnsavegive.co>
 */

/**
 * Global color data module
 * @module _data/colors
 * @since 0.1.0
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in Eleventy}
 * @see {@link https://www.schemecolor.com/dollar-bill-color-scheme.php Dollar Bill Color Scheme}
 */
export default {
  /**
   * Brand colors: Seven grays from seven greens
   * @see {@link https://coolors.co/ffffff-f4f4e2-dbdbc9-c2c2b0-8f8f7e-67675d-3e3e3c Grays on Coolors}
   * @see {@link https://coolors.co/e1eed9-c2ddb2-85bb65-6e9d4e-4b8a47-357a46-3a5c41 Greens on Coolors}
   */
  grayscale: {
    100: {
      // White
      hex: "#ffffff",
      rgb: [255, 255, 255]
    },
    200: {
      // Beige
      hex: "#f4f4e2",
      rgb: [244, 244, 226]
    },
    300: {
      // Eggshell
      hex: "#dbdbc9",
      rgb: [219, 219, 201]
    },
    400: {
      // Ash gray
      hex: "#c2c2b0",
      rgb: [194, 194, 176]
    },
    500: {
      // Battleship gray
      hex: "#8f8f7e",
      rgb: [143, 143, 126]
    },
    600: {
      // Dim gray
      hex: "#67675d",
      rgb: [103, 103, 93]
    },
    700: {
      // Black olive
      hex: "#3e3e3c",
      rgb: [62, 62, 60]
    }
  },
  green: {
    100: {
      // Honeydew
      hex: "#e1eed9",
      rgb: [225, 238, 217]
    },
    200: {
      // Tea green
      hex: "#c2ddb2",
      rgb: [194, 221, 178]
    },
    300: {
      // Pistachio
      hex: "#85bb65",
      rgb: [133, 187, 101]
    },
    400: {
      // Asparagus
      hex: "#6e9d4e",
      rgb: [110, 157, 78]
    },
    500: {
      // Sea green
      hex: "#4b8a47",
      rgb: [75, 138, 71]
    },
    600: {
      // Dark spring green
      hex: "#357a46",
      rgb: [53, 122, 70]
    },
    700: {
      // Hunter green
      hex: "#3a5c41",
      rgb: [58, 92, 65]
    }
  },
  /**
   * Social media platforms
   */
  bluesky: {
    // Azure blue
    hex: '#0085ff',
    rgb: [17, 133, 254]
  },
  github: {
    // Almost black
    hex: '#1b1f24',
    rgb: [27, 31, 36]
  },
  youtube: {
    // Red
    hex: '#ff0000',
    rgb: [255, 0, 0]
  }
}
