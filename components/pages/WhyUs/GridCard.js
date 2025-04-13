export default function GridCard(props) {
  return (
    <div className="">
      {props.img ? (
        <div
          className={`${
            props.imgwidth ?? " h-24 w-24"
          } rounded-full bg-pg p-2 -mb-7 -ml-7 z-10 relative flex justify-center`}
        >
          <img
            className={"w-[85%] h-[85%] mx-auto my-auto"}
            src={props.img}
            alt=""
          ></img>
        </div>
      ) : (
        <></>
      )}
      <div className="bg-dd h-48 w-72 border-4 border-gradient text-ll hovercard overflow-clip text-center flex items-center relative">
        <h1
          className={`font-bold ${
            props.titleSize ?? "text-xl"
          } absolute w-full text-cente`}
        >
          {props.title}
        </h1>
        <p className="mx-2 z-30 absolute">{props.text}</p>
      </div>
    </div>
  );
}
