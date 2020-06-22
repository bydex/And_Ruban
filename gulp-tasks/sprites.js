"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        .pipe(svg({
            shape: {
                dest: "intermediate-svg",
                // dimension: {
                //     attributes: true
                // }
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                },
                // css: { // Activate the «css» mode
                //     defs: true,
                //     css: true // Activate CSS output (with default options)
                // }
            }
        }))
        .pipe(gulp.dest(paths.sprites.dist))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});
