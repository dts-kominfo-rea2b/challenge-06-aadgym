// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// const bacaData = (fnCallback) => {
//   const inputFile = [file1,file2,file3];
//   let outputnya = inputFile.map((file) => {
//       fs.readFile(file, (err,data)=> {
//           if (err) throw err;
//           let content = JSON.parse(data);
//           let sentence = null;
//           if (content && content.message){
//             sentence = content.message
//           }
//           if (content[0] && content[0].message){
//             sentence = content[0].message
//           }
//           if (content[0] && content[0].data && content[0].data.message){
//             sentence = content[0].data.message;
//           }
//           let word = sentence.split(' ')[1];
//           return word;
//       })
//   });
//   fnCallback(null,outputnya);
// }

const bacaData = (fnCallback) => {
	let arrOutput = [];
	fs.readFile(file1, (err,data) => {
		if (err) throw err;
		let content = JSON.parse(data);
		let sentence = content.message;
		let word = sentence.split(' ')[1];
		arrOutput.push(word);
    fs.readFile(file2, (err,data) => {
      if (err) throw err;
      let content = JSON.parse(data);
      let sentence = content[0].message;
      let word = sentence.split(' ')[1];
      arrOutput.push(word);
      fs.readFile(file3, (err,data) => {
        if (err) throw err;
        let content = JSON.parse(data);
        let sentence = content[0].data.message;
        let word = sentence.split(' ')[1];
        arrOutput.push(word);
        fnCallback(null,arrOutput);
      })
    })
	});

}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
