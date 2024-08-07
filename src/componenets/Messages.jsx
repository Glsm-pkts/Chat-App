import { auth } from "../firebase";


const Messages = ({data}) => {

    //eğer mesajı bu cihazda oturumu açık olan kullanıcı attı ise ekranın sağ tarafına sadece mesaj içeriğini
    if(auth.currentUser?.uid === data.author.id){
        return <p className="msg-user">{data.text}</p>;
    }


    //farklı kullanıcı attıysa < mesaj içeri + kullanıcı
  return (
    <div className="msg-other">
        <div className="user-info">
<img src={data.author.photo} alt="profil pic" />
<span>{data.author.name}</span>
        </div>
      
      <p className="msg-text">{data.text}</p>
    </div>
  );
}

export default Messages;
