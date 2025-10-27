const fs = require("fs");

let code = fs.readFileSync(process.argv[2], "utf8");

// konverter banjarscript ke javascript
code = code.replace(/tampaiakan/g, "console.log");
code = code.replace(/wadah/g, "let");
code = code.replace(/ubah/g, "let");

// tambahkan titik koma opsional
code = code.replace(/"\)/g, '");');
code = code.replace(/"\)/g, '");');

fs.writeFileSync("output.js", code);
console.log(" BanjarScript berhasil di-transpile ke output.js!");
