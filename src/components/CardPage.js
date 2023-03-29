import { useEffect } from "react";
import { getCardPage } from "../services/getCardPageAPI";

export default function CardPage({ name }) {

  useEffect(() => {
    const promise = getCardPage(name);
    promise
      .then((data) => {
        console.log(data);
      })
  }, []);


  return (
    <>
    </>
  );
}