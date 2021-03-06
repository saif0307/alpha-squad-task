module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lt-blue': '#CFFAFE',
        'ft-blue':'#0E7490',
        'hr-blue':'#a6e7ed',
        'gd-blue1':'#06B6D4',
        'gd-blue2':'#0E7490',
        'gd-blue3':'#0284C7',
        "gd1-blue1":'#06B6D4',
        "gd2-blue2":'#0E7490',
        "gd3-blue3":'#0284C7',
        "gd11-blue1":'#a5f3fc',
        "gd22-blue2":'#a5f3fc',
        'ft-grey':'#52525B',
        'footer-grey':' #F4F4F5',
        'plan-color':'#27272A',
        'pri-color1':'#06B6D4',
        'pri-color2':'#0E7490',
        'pri-color3':'#0284C7',
        'cycan':'#0E7490',
        'border-grey':'#D4D4D8',
        'lit-grey':'#52525B',
        'bor-color':'#E4E4E7',
        'h-color':' #1F2937',
        'nav-color':'#18181B',
        'sl-color':'#0891B2',
        'grd-1':'#a5f3fc',
        'grd-2':'rgba(165, 243, 252, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
