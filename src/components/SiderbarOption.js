import React from 'react';
import './SidebarOption.css';
import { useDataLayerValue } from '../DataLayer';

function SiderbarOption({ title, Icon, spotify }) {

    const [{}, dispatch] = useDataLayerValue();

    const playListChoosen = () => {

        if (title === 'Home') {
            spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M').then(response => {
            dispatch({
              type: 'SET-SIDE-BAR',
              sideBarPlaylist: response
            })
          })
        }

        if (title === 'Seamus') {
            spotify.getPlaylist('5Q4xQ4fZdwKVAPwZiwlohi').then(response => {
            dispatch({
              type: 'SET-SIDE-BAR',
              sideBarPlaylist: response
            })
          })
        }

        if (title === 'becca') {
            spotify.getPlaylist('6I1EvRXRpCwDajiTDomtF5').then(response => {
            dispatch({
              type: 'SET-SIDE-BAR',
              sideBarPlaylist: response
            })
          })
        }

        if (title === 'Black Bear') {
            spotify.getPlaylist('3z3cL4KKiAAtJ8Rd0iUMma').then(response => {
            dispatch({
              type: 'SET-SIDE-BAR',
              sideBarPlaylist: response
            })
          })
        }

        if (title === 'Random Shit') {
            spotify.getPlaylist('5BMcY52uZ2jrF4mrsh1mvw').then(response => {
            dispatch({
              type: 'SET-SIDE-BAR',
              sideBarPlaylist: response
            })
          })
        }

    }

    return (
        <div className='sidebarOption' onClick={playListChoosen}>
            {Icon && <Icon className='sidebarOption-icon'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SiderbarOption
