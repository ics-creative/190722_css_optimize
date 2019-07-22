import React from "react";
import ReactDOMServer from "react-dom/server";
import Sample from "./Sample";

const fs = require("fs");
const sass = require("node-sass");

const styleDeep = sass
  .renderSync({
    file: "./src/style_deep.scss"
  })
  .css.toString();

const styleBem = sass
  .renderSync({
    file: "./src/style_bem.scss"
  })
  .css.toString();

const createMarkup = (style, selectorName, title) =>
  `<!DOCTYPE html>` +
  ReactDOMServer.renderToStaticMarkup(
    <Sample style={style} selectorName={selectorName} title={title} />
  );

fs.writeFileSync(
  "./docs/deep.html",
  createMarkup(styleDeep, "p__", "子孫セレクタ使いまくり"),
  "utf8"
);
fs.writeFileSync(
  "./docs/bem.html",
  createMarkup(styleBem, "hoge_moja_piyo_fuga_p__", "BEMで最適化したつもり"),
  "utf8"
);
