

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs'
inquirer.prompt([
    {
        name: "url",
        message: "Enter URL: "
    },
])
.then(answer =>{
    var content = answer.url;
    var qr_svg = qr.image(content);
    qr_svg.pipe(fs.createWriteStream('img.png'));

    fs.writeFile('test.txt', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
});