let mix = require('laravel-mix');


mix
.js('source/app.js', 'public/')
.sass('source/app.scss', 'public/')
.copy('source/*.html', 'public/')
.copyDirectory('source/imgs', 'public/imgs')
;
