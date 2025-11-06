const fs = require("fs");

let code = fs.readFileSync(process.argv[2], "utf8");

// konverter banjarscript ke javascript
code = code.replace(/tampaiakan/g, "console.log");
code = code.replace(/wadah/g, "let");
code = code.replace(/ubah/g, "let");
code = code.replace(/variabel/g, "let");
code = code.replace(/\bmun\b/g, "if");
code = code.replace(/nanglain/g, "else");
code = code.replace(/lain/g, "else");
code = code.replace(/fungsi/g, "function");
code = code.replace(/balikan/g, "return");
code = code.replace(/konstanta/g, "const");
code = code.replace(/gasan/g, "for");
code = code.replace(/\bmunkada\b/g, "while");
code = code.replace(/selagi/g, "while");
code = code.replace(/selama/g, "while");
code = code.replace(/bujur/g, "true");
code = code.replace(/benar/g, "true");
code = code.replace(/salah/g, "false")
// tambahkan titik koma opsional
code = code.replace(/"\)/g, '");');
code = code.replace(/"\)/g, '");');

fs.writeFileSync("output.js", code);
console.log(" BanjarScript berhasil di-transpile ke output.js!");

/*
Inovasi untuk kedepannya !!!
const dictionary = {
  "tampaiakan": "console.log",
  "wadah": "let",
  "mun": "if",
  "munkada": "while",
  "lain": "else",
};

code = code.split(/\b/).map(token => dictionary[token] || token).join("");
*/
