// const fs = require('fs');
// const path = require('path');

// class Kleur {
//     constructor(cssFiles, outputFile) {
//         this.cssFiles = cssFiles;
//         this.outputFile = outputFile;
//     }

//     bundle() {
//         let cssContent = '';
//         for (let file of this.cssFiles) {
//             cssContent += fs.readFileSync(path.join(__dirname, file), 'utf8');
//         }

//         fs.writeFileSync(path.join(__dirname, this.outputFile), cssContent);
//     }
// }

// // Gebruik de klasse
// const kleur = new Kleur(['kleur.css', 'andere.css'], 'styles.css');
// kleur.bundle();


// dit is om kleur css bestanden samen te doen dat is makelijker voor npm
