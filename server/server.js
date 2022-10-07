const express = require("express");
const cors = require("cors");
const port = 7000;
const app = express();

const { exec } = require("child_process");

app.use(cors());

app.get("/speedtest", (req, res) => {
  exec("speed-test --json", (err, stdout, stderr) => {
    res.send(stdout);
  });
});

app.listen(port, () => {
  console.log("port created succesfully");
});

// const NetworkSpeed = require("network-speed");
// const testNetworkSpeed = new NetworkSpeed();

// app.get("/api", (req, res) => {
//   UpDownspeed().then((ress) => {
//     res.send(ress);
//   });
// });

// speed test through network speed
// async function UpDownspeed() {
//   // upload speed
//   const options = {
//     hostname: "www.google.com",
//     port: 80,
//     path: "/catchers/544b09b4599c1d0200000289",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   const fileSizeInBytesUp = 2000000;

//   // download sped
//   const baseurl = "https://eu.httpbin.org/stream-bytes/500000";
//   const fileSizeInBytesdown = 500000;

//   const speed = [
//     {
//       upload: await testNetworkSpeed.checkUploadSpeed(
//         options,
//         fileSizeInBytesUp
//       ),
//     },
//     {
//       download: await testNetworkSpeed.checkDownloadSpeed(
//         baseurl,
//         fileSizeInBytesdown
//       ),
//     },
//   ];
//   return speed;
// }
