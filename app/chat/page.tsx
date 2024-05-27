import React from 'react'
import ChatPage from './components/chatPage';
import axios from 'axios';

const page = async() => {

 
  const info = await axios.post("http://localhost:4000/chat/messages", {
    sender,
    receiver,
  });
  const data = info.data;
 
  const infolist = await axios.post("http://localhost:4000/chat/list", {
    sender,
  });
  const list = infolist.data;

console.log
  return (
    <div>
      <ChatPage list ={list} data = {data}/>
      <></>
    </div>
  )
}

export default page
