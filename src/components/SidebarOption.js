import React from 'react'
import styled from 'styled-components'

function SidebarOption({Icon, title}) {
    
  
  return (
    <SidebarOptionContainer>
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
  margin-top: 30px;
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

const SidebarOptionChannel = styled.div``;



