import React, { useEffect, useRef, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc,serverTimestamp, onSnapshot, query, where, orderBy} from "firebase/firestore"; 
import Messages from '../componenets/Messages';


const ChatPage = ({room, setRoom}) => {
    const [messages, setMessages] = useState();
    const lastMsg = useRef();
    const handleSumbit = async (e) => {
e.preventDefault();

//mesajın ekleneceği koleksiyonun refaransını al
const messageCol = collection(db, "message");



//koleksiyonu doküman ekle
  await addDoc(messageCol, {
    text: e.target[0].value,
    room,
    author:{
        id:auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
    },
createdAt: serverTimestamp(),
});
 //son mesaja kaydır
 lastMsg.current.scrollIntoView({behavior: "smooth"});

//formu sıfırla
e.target.reset();
    };

// mevcut odada göndeerilen mesaşların anlık olarak al
useEffect(() => {
//abone olacak koleksiyonun refaransını almak lazım
const messageCol = collection(db, "message");

//sorgu ayarlarını yap
const q = query(messageCol, where("room", "==",room), orderBy("createdAt", "asc"));

// onsanapshor ile anlık olarak koleksiyondaki değişimleri izler kolleksiyonun her değiştiğinde verdiğimiz fonk ile koleksiyondaki güncel belgeleri al
onSnapshot(q, (snaphot)=>{
    let tempMsg = [];
    //dokumanların içerisindeki veriye eriş ve geçici diziye aktar
    snaphot.docs.forEach((doc)=> tempMsg.push(doc.data()));

   

    //state'i güncelle
    setMessages(tempMsg);
    
})
},[]);

  return (
    <div className='chat-page'>
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p></p>
        <button onClick={()=>setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {!messages ? (
          <p>Sohbete ilk mesajı gönderin</p>
        ) : (
          messages.map((data, i) => <Messages data={data} key={i} />)
        )}
      <div ref={lastMsg} />
    
      </main>

      <form onSubmit={handleSumbit}>
        <input placeholder='mesajınızı yazınız...' type="text" required />
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ChatPage;
