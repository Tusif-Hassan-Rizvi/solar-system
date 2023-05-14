import style from "../styles/moon.module.css";
import Navigation from "../../components/Navigation";
import Solarsystem from "../../components/Solarsystem";

export default function mars() {
  const imageurl = "./mars.jpg";
  return (
    <>
      {/* Navigation components */}
      <Navigation style={style}></Navigation>
      {/* solar system components  */}
      <Solarsystem
        style={style}
        imageurl={imageurl}
        duration={1}
      ></Solarsystem>
    </>
  );
}
