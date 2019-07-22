import React from "react";
const MAX = 10000;

export default ({ style, selectorName, title }) => (
  <html>
    <head lang="ja" dir="ltr">
      <meta charSet="utf-8" />
      <title>CSS Performance - ICS MEDIA</title>
      <script
        dangerouslySetInnerHTML={{
          __html: `var timeHead = new Date().getTime();`
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body>
      <h1>{title}</h1>
      <p>
        {MAX}個のセレクタで
        <br />
        表示するまでにかかった時間は <strong id="logArea" /> ミリ秒でした
      </p>

      {[...Array(MAX).keys()].map(i => (
        <div className="hoge">
          <div className="moja">
            <div className="piyo">
              <div className="fuga">
                <p className={selectorName + i}>{i}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        var timeNow = new Date().getTime();
        window.logArea.textContent = (timeNow - timeHead) + "";`
        }}
      />
    </body>
  </html>
);
