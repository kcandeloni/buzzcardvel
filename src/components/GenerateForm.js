import { useEffect, useState } from "react";

import { postNewCardPage } from "../services/postNewCardPageAPI";
import { getQRCode } from "../services/chartAPI";

export default function GenerateFrom() {
  const [imgQRCode, setImgQRCode] = useState(false);

  function generateQRCode(nameURL) {
    const promise = getQRCode(nameURL);
    promise
      .then(() => {
        setImgQRCode(`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://localhost:3000/${nameURL}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    const promise = postNewCardPage({
      name: "Kevin",
      linkedinURL: "https://www.linkedin.com/in/kevin-candeloni",
      gitHubURL: "https://github.com/kcandeloni"
    });
    promise
      .then((res) => {
        console.log(res.data);
        generateQRCode(res.data.nameURL);
      })
  }, []);


  return (
    <img src={imgQRCode} />
  );
}