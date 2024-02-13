/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('bahan/pixel_skyline_by_erikaducharme_df4s3qr.gif')",
      },
      fontFamily: {
        Titan: ['Titan One'],
      }
    },
  },
  plugins: [require("daisyui")],
}

