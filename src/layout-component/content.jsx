import friend from '/src/assets/layout-images/friends.png'
import message from '/src/assets/layout-images/icons8-speech-bubble-50.png'
import inbox from '/src/assets/layout-images/icons8-inbox-48.png'
import help from '/src/assets/layout-images/icons8-help-30.png'

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'; 
import Online from './online';
import All from './all';
import Blocked from './blocked';
import Pending from './pending';
function Friends(){
    return(
        <div className="friends">
          <div className="navbar">
            <div className="navbar_left">
            <li className="navbar_left_item1"><img className="img2" src={friend} alt="" />Friends</li>
           <Link style={{ textDecoration: 'none' }} to={'/'}><li className="navbar_left_item2">Online</li></Link> 
          <Link style={{ textDecoration: 'none' }} to={'/all'}> <li className="navbar_left_item2">All</li></Link> 
           <Link style={{ textDecoration: 'none' }} to={'/pending'}><li className="navbar_left_item2">Pending</li></Link> 
           <Link style={{ textDecoration: 'none' }} to={'/blocked'}><li className="navbar_left_item2">Blocked</li></Link> 
            <li className='navbar_left_item3'>Add friend</li>
            <li></li>
            </div>
            <div className="navbar_right">
                <li className='navbar_right_item'><img className="img3" src={message} alt="" /></li>
                <li><img className="img3" src={inbox} alt="" /></li>
                <li><img className="img3" src={help} alt="" /></li>
            </div>  
          </div>
          <Routes>
         <Route path='/' element={<Online/>}/>  
         <Route path='/all' element={<All/>}/>
         <Route path='/pending' element={<Pending/>}/>
         <Route path='/blocked' element={<Blocked/>}/>
       </Routes>
        </div>
    )
}
export default Friends