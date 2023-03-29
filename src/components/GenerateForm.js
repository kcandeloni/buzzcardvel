import { useState } from "react";
import { useForm } from "react-hook-form";

import { postNewCardPage } from "../services/postNewCardPageAPI";
import { getQRCode } from "../services/chartAPI";
import Button from "./common/Button";
import Container from "./common/Container";
import BoxForm from "./common/BoxForm";
import CodeContainer from "./CodeContainer";

export default function GenerateFrom() {
  const [imgQRCode, setImgQRCode] = useState(false);
  const [loading, SetLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  function generateQRCode(nameURL, name) {
    const url = window.location.href.replace("generate", "");
    const promise = getQRCode(url + "/" + nameURL);
    promise
      .then(() => {
        setImgQRCode({
          src: `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${url}${nameURL}`,
          name
        });
        SetLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function onSubmit(newCardPage) {
    SetLoading(true);
    const { name, linkedinURL, gitHubURL } = newCardPage;
    const promise = postNewCardPage({
      name,
      linkedinURL,
      gitHubURL
    });
    promise
      .then((res) => {
        console.log(res.data);
        generateQRCode(res.data.nameURL, name);
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
      });
  }

  return (
    <>
      <Container>
        {imgQRCode ? <CodeContainer {...imgQRCode} /> :
          <>
            <p>QR Code Image</p>
            <BoxForm>
              <span>
                <div>
                  <label>Name</label>
                </div>
                <input
                  style={errors?.name && { outline: "1px solid rgb(255, 72, 72)" }}
                  type="name"
                  placeholder="Your name"
                  {...register("name", { required: true, minLength: 3 })}
                />
              </span>
              {errors?.name?.type === "required" && (
                <p>name is required.</p>
              )}

              {errors?.name?.type === "validate" && (
                <p>name is invalid.</p>
              )}
            </ BoxForm>
            <BoxForm>
              <span>
                <div>
                  <label>Linkedin URL</label>
                </div>
                <input
                  style={errors?.linkedinURL && { outline: "1px solid rgb(255, 72, 72)" }}
                  type="text"
                  placeholder="Your linkedinURL"
                  {...register("linkedinURL", { required: true })}
                />
              </span>
              {errors?.linkedinURL?.type === "required" && (
                <p>linkedinURL is required.</p>
              )}

              {errors?.linkedinURL?.type === "minLength" && (
                <p>
                  linkedinURL needs to have at least 3 characters.
                </p>
              )}

              {errors?.linkedinURL?.type === "validate" && (
                <p>linkedinURL is invalid.</p>
              )}
            </ BoxForm>
            <BoxForm>
              <span>
                <div>
                  <label>Github URL</label>
                </div>
                <input
                  style={errors?.gitHubURL && { outline: "1px solid rgb(255, 72, 72)" }}
                  type="text"
                  placeholder="Your gitHubURL"
                  {...register("gitHubURL", { required: true })}
                />
              </span>
              {errors?.gitHubURL?.type === "required" && (
                <p>GiitHub URL is required.</p>
              )}

              {errors?.gitHubURL?.type === "validate" && (
                <p>gitHubURL is invalid.</p>
              )}
            </ BoxForm>
            {loading ?
              <Button>
                loading
              </Button>
              :
              <Button onClick={() => handleSubmit(onSubmit)()}>Generate Image</Button>
            }
          </>
        }
      </ Container>
    </>
  );
}