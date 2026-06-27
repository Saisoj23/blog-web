function Button(props: { content: String; callback: () => void }) {
  return (
    <button
      onClick={props.callback}
      className="drop-shadow-cartoon font-bold mb-3 mt-3 p-3 text-2xl cursor-pointer hover:scale-110 duration-300 ease-in-out text-dark-paper dark:text-light-paper focus:text-light-paper focus:dark:text-dark-paper hover:text-light-paper hover:dark:text-dark-paper bg-half-light-paper dark:bg-half-dark-paper hover:bg-half-dark-paper hover:dark:bg-light-paper "
    >
      {props.content}
    </button>
  );
}

export default Button;
