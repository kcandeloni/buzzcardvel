import { useParams } from "react-router-dom";
import CardPage from "../../components/CardPage";

export default function VirtualCard() {
  const { name } = useParams()
  return (
    <>
      <CardPage name={name} />
    </>
  );
}