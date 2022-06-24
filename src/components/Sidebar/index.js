import React from 'react'
import {
    SidebarContainer,
    Icon,
    ClosedIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <ClosedIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar