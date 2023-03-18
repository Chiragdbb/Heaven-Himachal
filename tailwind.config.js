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
        hovGreen:"#669928",
        gray2: "#656565",
        black2: "#212121",
        bgColor: "#f3f3f3",
      },
      boxShadow: {
        new: "0 1rem 3rem rgb(0 0 0 / 18%)",
      },
      backgroundImage:{
        'manali': "url('/assets/asset-5.jpeg')",
        'shimla': "url('/assets/asset-6.jpeg')",
        'dharamshala': "url('/assets/asset-7.jpeg')",
        'chamba': "url('/assets/asset-8.png')",
        'kinnaur': "url('/assets/asset-9.jpeg')",
        'lahaul': "url('/assets/asset-10.jpeg')",
        'goa': "url('/assets/asset-11.jpeg')",
        'kashmir': "url('/assets/asset-12.jpeg')",
        'himachal': "url('/assets/asset-13.jpeg')",
        'offer-bg': "url('/assets/asset-0.jpeg')",
      }
    },
  },
  plugins: [],
};
