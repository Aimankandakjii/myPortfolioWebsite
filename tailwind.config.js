/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackGlass: "rgba(0, 26, 50, 0.13)",
      },
      fontFamily: {
        Akirta: ["akira_expandedsuper_bold"],
      },
    },
  },
  plugins: [],
};

// @font-face {
//   font-family: 'akira_expandedsuper_bold';
//   src: url('akira_expanded_demo-webfont.woff2') format('woff2'),
//        url('akira_expanded_demo-webfont.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;

// }
