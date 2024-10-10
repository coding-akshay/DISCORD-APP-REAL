import logo from '/src/assets/layout-images/icons8-discord-50.png'
import serverlogo from '/src/assets/layout-images/serverlogo.jpg'
// import add from '/src/assets/icons8-add-24.png'
// import explor from '/src/assets/icons8-explore-24.png'

function Sidebar(){
    return(
       <div className="sidebar">
          <ul className='sidebar_items'>
            <li className='sidebar_item1'><img className='img' src={logo} alt="" /></li>
            <li className='sidebar_item2'><img className='img1' src={serverlogo} alt="" /></li>
            <li className='sidebar_item3'></li>
            <li className='sidebar_item4'></li>
            <li className='sidebar_item5'>____</li>
            <li className='sidebar_item6'></li>
            </ul>  
       </div>
    )
}
export default Sidebar