import Nav from "./Nav";
import "./main.css"
import Interactions from "./interactions";
import Slider from "./Slider";
import Universities from "./universities";


export default function Home() {
  return (
    <main className="main">  
      <Nav></Nav>
      <Interactions></Interactions>
      <Slider></Slider>
      <Universities></Universities>
    </main>

  )
}
