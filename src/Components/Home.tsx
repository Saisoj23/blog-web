import { useContext } from "react";
import skullImage from "../assets/IMAGES/skull.png";
import { ChangeSectionContext } from "./ChangeSectionContext";
import Button from "./Button";

function Home() {
  const changeSection = useContext(ChangeSectionContext);
  return (
    <main className="flex flex-col flex-start items-center flex-1 p-4">
      <div className="m-3 flex flex-col-reverse portrait:flex-col-reverse md:flex-row justify-around items-center ">
        <section className=" m-3 max-w-10/12 md:max-w-5/12">
          <h2 className=" m-3 text-3xl font-semibold">
            Bienvenido a mi espacio de desarrollo de videojuegos
          </h2>
          <p className="m-3">
            Soy un desarrollador independiente apasionado por crear videojuegos
            y experimentar con nuevas ideas, mecánicas y estilos. En este
            espacio comparto proyectos desarrollados principalmente con Unity y
            Godot, donde cada juego representa una oportunidad para aprender,
            innovar y ofrecer experiencias entretenidas. Mi objetivo es seguir
            creciendo como desarrollador mientras creo juegos originales que
            desafíen, diviertan y conecten con quienes los juegan. ¡Gracias por
            visitar mi página y por formar parte de este recorrido!
          </p>
        </section>

        <img
          src={skullImage}
          className="portrait:w-6/10 sm:w-6/10 lg:w-5/12 bg-cover"
          alt="Very Cool Skull image"
        />
      </div>

      <Button
        content={"Ir a Blog"}
        callback={() => {
          changeSection("blog");
        }}
      />
    </main>
  );
}

export default Home;
