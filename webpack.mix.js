let mix = require('laravel-mix');

mix.sass('src/sass/app.scss', 'src/App.css').postCss('src/vendor.css', 'src/vendor.compiled.css', [require('tailwindcss')]);
