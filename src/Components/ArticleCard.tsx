import Image from "./Image";

function ArticleCard(props: {
  title: string;
  excerpt: string;
  thumbnail: string;
  callback: () => void;
}) {
  return (
    <button
      onClick={props.callback}
      className="drop-shadow-cartoon flex-1 m-3 text-left flex flex-col text-2xl cursor-pointer hover:scale-105 duration-300 ease-in-out text-dark-paper dark:text-light-paper focus:text-light-paper focus:dark:text-dark-paper hover:text-light-paper hover:dark:text-dark-paper bg-half-light-paper dark:bg-half-dark-paper hover:bg-half-dark-paper hover:dark:bg-light-paper "
    >
      <Image
        fileName={"IMAGES/THUMBNAILS/" + props.thumbnail}
        alt=""
        className="bg-cover w-full"
      />
      <div className="p-3">
        <h3 className="font-bold">{props.title}</h3>
        <h4 className="text-lg">{props.excerpt}</h4>
      </div>
    </button>
  );
}

export default ArticleCard;
