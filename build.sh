#!/bin/sh
mkdir -p public/vendors;

cp node_modules/angular/angular.min.js public/vendors;
cp node_modules/angular/angular.min.js.map public/vendors;

cp node_modules/bootstrap/dist/css/bootstrap.min.css public/vendors;
cp node_modules/bootstrap/dist/css/bootstrap.min.css.map public/vendors;
cp node_modules/bootstrap/dist/js/bootstrap.min.js public/vendors;

cp node_modules/angular-route/angular-route.min.js public/vendors;
cp node_modules/angular-route/angular-route.min.js.map public/vendors;

cp node_modules/swiper/dist/css/swiper.min.css public/vendors;
cp node_modules/swiper/dist/js/swiper.min.js public/vendors;
cp node_modules/swiper/dist/js/swiper.jquery.min.js public/vendors;
