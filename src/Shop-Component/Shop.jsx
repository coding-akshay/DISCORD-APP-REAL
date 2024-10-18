
import Nav from "./nav"
import Dojo from "./Dojo"
import Champions from "./Champions"
import Spongebob from "./Spongebob"
import Palworld from "./Palworld"
import Galaxy from "./Galaxy"
import Anime from "./Anime"
import Lofi from "./Lofi"
import './shop-style.css'
import Dark from "./Dark"

function Shop() {

  return (
   <div className="container-main">
     <div className="shop">
     <Nav/>

    <div className="cardpage">
     
     <Dojo/>
     <Champions/>
     <Spongebob/> 
     <Dark />
     <Palworld/>
     <Galaxy/>
     <Anime/>
     <Lofi/> 
     </div>
     </div>
   </div>
   
  )
}

export default Shop
