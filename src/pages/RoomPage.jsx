import React from 'react';

const RoomPage = ({ setIsAuth, setRoom }) => {
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("token");
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // "e.pereventDefault()" yerine "e.preventDefault()" olmalı
        const room = e.target[0].value.trim().toLowerCase(); // "toLawercase()" yerine "toLowerCase()" olmalı
        console.log(room);
        setRoom(room);
    }

    return (
        <form onSubmit={handleSubmit} className='room-page'>
            <h1>Chat Odası</h1>
            <p>Hangi Odaya Gireceksiniz</p>
            <input placeholder='ör: haftaiçi' type="text" required />

            <button type='submit'>Odaya Gir</button>
            <button onClick={logout} type='button'>Çıkış Yap</button>
        </form>
    );
}

export default RoomPage;
