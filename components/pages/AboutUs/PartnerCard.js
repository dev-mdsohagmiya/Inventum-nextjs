import { Link } from "react-router-dom";

export default function PartnerCard(props) {
  return props.to ? (
    <Link
      to={props.to}
      className="flex relative hover:scale-105 md:flex-row-reverse flex-col-reverse bg-dd rounded-xl p-5 text-center w-[95vw] md:w-full md:max-w-[80vw] mx-auto"
    >
      <img
        className="left-2 top-2 h-5 w-5 absolute inline-flex"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/inventum-98847.appspot.com/o/icons%2Fclick.webp?alt=media&token=8ded644d-024b-4f52-91ac-f8c3993c0b5e&_gl=1*f7oxa5*_ga*MTc0OTc0OTAxLjE2NzQyOTQxMzY.*_ga_CW55HF8NVT*MTY5ODQ4OTcyNS41NC4xLjE2OTg0OTA2MzYuMTQuMC4w"
      />
      <p
        className="md:mx-10 my-auto text-justify"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></p>
      <img
        src={props.img}
        alt=""
        className={`${props.height} md:my-auto mx-auto mb-5`}
      ></img>
    </Link>
  ) : (
    <div className="flex md:flex-row-reverse flex-col-reverse bg-dd rounded-xl p-5 text-center w-[95vw] md:w-full md:max-w-[80vw] mx-auto">
      <p
        className="md:mx-10 my-auto text-justify"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></p>
      <img
        src={props.img}
        alt=""
        className={`${props.height} md:my-auto mx-auto mb-5`}
      ></img>
    </div>
  );
}
