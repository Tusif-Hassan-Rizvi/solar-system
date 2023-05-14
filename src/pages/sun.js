import Solarsystem from "../../components/Solarsystem";
import Navigation from "../../components/Navigation";
import style from "../styles/moon.module.css";
export default function Sun() {
  const imageurl = "./Sun.jpg";
  return (
    <>
      {/* Navigation components */}
      <Navigation style={style}></Navigation>
      {/* solar system components  */}
      <Solarsystem style={style} imageurl={imageurl} duration={1}></Solarsystem>
    </>
  );
}
