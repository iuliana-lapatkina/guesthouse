/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "200": "#52503b",
          "300": "rgba(82, 80, 59, 0.1)",
        },
        whitesmoke: "#f9fafb",
        gainsboro: "#e5e7eb",
        peru: "#e08631",
        floralwhite: "#faf8f0",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      sm: "14px",
      "13xl": "32px",
      lg: "18px",
      smi: "13px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
