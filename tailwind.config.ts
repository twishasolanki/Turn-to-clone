// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     screens: {
//       'xs':'296px',
//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }
//       'xm':'389px',
//       'md': '768px',
//       'mg':'425px',
//       'xd':'320px',
//       'ms':'375px',
//       // 'nd':'800px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//   },
//   plugins: [],
// };
// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xs':'296px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'xm':'389px',
      'md': '768px',
      'mg':'425px',
      'xd':'320px',
      'ms':'375px',
      // 'nd':'800px',
      // => @media (min-width: 768px) { ... }
      'sh':'1440px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xl': '2560px',
      '2xl': '1536px',
      'sw':'1068px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
export default config;
