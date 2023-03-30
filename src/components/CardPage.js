import { useEffect, useState } from "react";

import { getCardPage } from "../services/getCardPageAPI";
import PresentationContainer from "./PresentationContainer";
import NotFoundPage from "./common/NotFounPage";

export default function CardPage({ name }) {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const promise = getCardPage(name);
    promise
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      {loading ? <p>loading...</p> :
        <PresentationContainer {...data.CardPage} />
      }
    </>
  );
}
