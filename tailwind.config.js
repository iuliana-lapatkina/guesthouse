/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#787561",
          "200": "#52503b",
          "300": "rgba(82, 80, 59, 0.1)",
        },
        whitesmoke: "#f9fafb",
        gainsboro: "#e5e7eb",
        floralwhite: "#faf8f0",
        peru: "#e08631",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      smi: "13px",
      "10xl": "29px",
      "29xl": "48px",
      "19xl": "38px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
