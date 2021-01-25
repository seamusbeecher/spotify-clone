import React from 'react';
import './Sidebar.css';
import SidebarOption from './SiderbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {

    const [{ playlists, spotify }] = useDataLayerValue();
    
    return (
        <div className='sidebar'>
            <img className='sidebar-logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />

            <SidebarOption title='Home' Icon={HomeIcon} spotify={spotify}/>
            <SidebarOption title='Search : disabled' Icon={SearchIcon}/>
            <SidebarOption title='Your Library : disabled' Icon={LibraryMusicIcon}/>

            <br />
            <strong className='sidebar-title'> PLAYLISTS </strong>
            <hr />

            {playlists?.items?.map((playlist, i) => (
                <SidebarOption title={playlist.name} key={i} spotify={spotify}/>
            ))}

        </div>
    )
}

export default Sidebar
