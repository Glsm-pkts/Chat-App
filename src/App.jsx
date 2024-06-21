import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import RoomPage from "./pages/RoomPage"
import ChatPage from "./pages/ChatPage";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  if(!isAuth){
   return <LoginPage setIsAuth ={setIsAuth}/> ;
  }

  return(
   
      <div className="container">
        {room ? 
        //!kullanıcının yetkisi varsa  oda seçildiyse oda seçilmediyse oda seçme sayfası
        (<ChatPage room={room} setRoom={setRoom}/> ) : (<RoomPage setRoom = {setRoom} setIsAuth = {setIsAuth}/>)}
        
      </div>
    
  )
  }
  


export default App
