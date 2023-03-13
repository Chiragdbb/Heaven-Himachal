/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        green2: "#7ab730",
        gray2: "#656565",
      },
      boxShadow: {
        new: "0 1rem 3rem rgb(0 0 0 / 18%)",
      },
    },
  },
  plugins: [],
};
