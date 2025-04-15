export default function TechCards(props) {
  return (
    <div className="flip-card">
      <div
        className={`flip-card-inner bg-cover ${props.position} border shadow-md rounded-xl border-gray-700`}
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="flip-card-front backdrop-brightness-[.65] p-5 rounded-xl h-full justify-between flex flex-col">
          <h5 className=" text-2xl font-bold tracking-tight text-ll my-auto">
            {props.name}
          </h5>
        </div>
        <div
          className={`flip-card-back ${
            props.bg ?? "bg-dd"
          } text-ll flex justify-center items-center shadow-md rounded-xl`}
        >
          <p className={`m-2 ${props.size}`}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
