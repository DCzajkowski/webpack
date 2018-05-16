module.exports = {
    {{#tailwindcss}}"plugins": [
        require('postcss-import')(),
        require('tailwindcss')('./tailwind.js'),
        require('autoprefixer')(),
    ],{{else}}"plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
    },{{/tailwindcss}}
}
