import React from 'react'
import * as faReactIc from 'react-icons/fa';
import * as mdReactIc from 'react-icons/md';
import * as aiReactIc from 'react-icons/ai';
import * as biReactIc from 'react-icons/bi';
import * as bsReactIc from 'react-icons/bs';
import * as riReactIc from 'react-icons/ri';

export const NavbarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <mdReactIc.MdWeb />,
        cName: 'navItem'
    },
    {
        title: 'Classes',
        path: '/classes',
        icon: <aiReactIc.AiOutlineFolder />,
        cName: 'navItem'
    },
    {
        title: 'Resources',
        path: '/resources',
        icon: <biReactIc.BiBookAlt />,
        cName: 'navItem'
    },
    {
        title: 'Learning Plan',
        path: '/learning',
        icon: <bsReactIc.BsCalendar />,
        cName: 'navItem'
    },
    {
        title: 'Chat',
        path: '/chat',
        icon: <bsReactIc.BsChatLeftDots />,
        cName: 'navItem'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <riReactIc.RiSettings4Line />,
        cName: 'navItem'
    },
]