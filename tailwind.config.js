/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainHeading: "#212121",
        picBG: "#FFECE3",
        cart1: "#D6D6D8",
        cart2: "#EFE1C7",
        cart3: "#D7D7D9",
        cart4: "#212121",
      }
    },
  },
  plugins: [],
}
