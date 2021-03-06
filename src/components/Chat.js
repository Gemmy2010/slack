
import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";

function Chat() {
  //  const roomId = useSelector(selectRoomId)
  // const [roomdetails] = useCollection(
  //   roomId && db.collection('room').doc(roomId)
  // )

  // const [roomMessages] = useCollection(
  //   roomId &&
  //   db
  //   .collection("rooms")
  //   .doc(roomId)
  //   .collection("messages")
  //   .orderBy("timestamp", "asc")
  // );

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          {/* <h4><strong>#{roomDetails?.data().name}</strong></h4> */}
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages></ChatMessages>

      <ChatInput />

      {/* <ChatInput   channelName={roomDetails?.data().name} channelId={roomId}  /> */}
    </ChatContainer>
  );
}

export default Chat;

const Header = styled.div`
 display:flex;
 justify-content:space-between;
 padding:20px;
 border-bottom:1px solid lightgray;

`;
const HeaderLeft = styled.div`
display:flex;
align-items:center;

>h4 {
  display:flex;
  text-transform:lower;
  margin-right:10px;
}
> h4 > .MuiSvgIcon-root{
  margin-left: 20px;
  font-size: 18px;
}


`;
const HeaderRight = styled.div`
>p {
  display:flex;
  align-items:center;
  font-size:14px;
}
>p > .MuiSvgIcon-root {
  margin-right:5px !important;
  font-size:16px;
}


`;


const ChatContainer = styled.div`

  flex:0.7;
  flex-grow:1;
  overflow-y:scroll;
  margin-top:60px;
 


 
  
`;

const ChatMessages = styled.div``;
