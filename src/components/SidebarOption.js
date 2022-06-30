import { Database } from '@firebase/database';
import React from 'react'
import styled from 'styled-components'
import { db} from '../firebase';




function SidebarOption({Icon, title, addChannelOption, id}) {
  

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if(channelName){
            db.collection("rooms").add({
                
                name:channelName,
            });
        }

   
    };

    const selectChannel = () => {};
    
  
  return (
    <SidebarOptionContainer 
     onClick={addChannelOption ? addChannel : selectChannel}
     >
        {Icon && <Icon fontSize="small" style={{padding:0}}/>}
       {Icon ? (
       <h3>{title}</h3>
       ): (
        <SidebarOptionChannel>
            <span>#</span>{title}

        </SidebarOptionChannel>
       )} 
    </SidebarOptionContainer>
  );
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 10px;
  margin-top: 20px;
  cursor: pointer;
 

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight:500;
    padding-left:15px;

  }
  > h3 > span {
    padding:15px;
  }


  
`;

const SidebarOptionChannel = styled.h3`
 padding: 30px;
 font-weight:300;
 

`;



