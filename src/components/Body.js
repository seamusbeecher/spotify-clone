import React from 'react';
import './Body.css';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from '../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizTcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {

    const [{ topHits, sideBarPlaylist }, dispatch] = useDataLayerValue();

    const playPlaylist = () => {

        spotify.play({
            context_uri: `spotify:playlist:37i9dQZF1DXcBWIGoYBM5M`
        }).then(() => {
            spotify.getMyCurrentPlayingTrack().then((current) => {
                dispatch({
                    type: 'SET-ITEM',
                    item: current.item
                })
            })
        })
        
        if (sideBarPlaylist?.name === 'Seamus') {
            spotify.play({
                context_uri: `spotify:playlist:5Q4xQ4fZdwKVAPwZiwlohi`
            }).then(() => {
                spotify.getMyCurrentPlayingTrack().then((current) => {
                    dispatch({
                        type: 'SET-ITEM',
                        item: current.item
                    })
                })
            })
        } else if (sideBarPlaylist?.name === 'becca') {
            spotify.play({
                context_uri: `spotify:playlist:6I1EvRXRpCwDajiTDomtF5`
            }).then(() => {
                spotify.getMyCurrentPlayingTrack().then((current) => {
                    dispatch({
                        type: 'SET-ITEM',
                        item: current.item
                    })
                })
            })
        } else if (sideBarPlaylist?.name === 'Black Bear') {
            spotify.play({
                context_uri: `spotify:playlist:3z3cL4KKiAAtJ8Rd0iUMma`
            }).then(() => {
                spotify.getMyCurrentPlayingTrack().then((current) => {
                    dispatch({
                        type: 'SET-ITEM',
                        item: current.item
                    })
                })
            })
        } else if (sideBarPlaylist?.name === 'Today\'s Top Hits') {
            spotify.play({
                context_uri: `spotify:playlist:37i9dQZF1DXcBWIGoYBM5M`
            }).then(() => {
                spotify.getMyCurrentPlayingTrack().then((current) => {
                    dispatch({
                        type: 'SET-ITEM',
                        item: current.item
                    })
                })
            })
        } else if (sideBarPlaylist?.name === 'Random Shit') {
            spotify.play({
                context_uri: `spotify:playlist:5BMcY52uZ2jrF4mrsh1mvw`
            }).then(() => {
                spotify.getMyCurrentPlayingTrack().then((current) => {
                    dispatch({
                        type: 'SET-ITEM',
                        item: current.item
                    })
                })
            })
        }

        
    }
    
    const playSong = (id) => {
        spotify.play({
            context_uri: `spotify:track:${id}`
        }).then(() => {
            spotify.getMyCurrentPlayingTrack().then((current) => {
                dispatch({
                    type: 'SET-ITEM',
                    item: current.item
                })
            })
        })
    }

    return (
        <div className='body'>
            <Header spotify={spotify}/> 

            {!sideBarPlaylist ? (
                <>
                <div className='body-info'>
                    <img src={topHits?.images[0].url} alt='' />
                    <div className='body-infoText'>
                        <strong>PLAYLIST</strong>
                        <h2> Today's Top Hits </h2>
                        <p>{topHits?.description}</p>
                    </div>
                </div>

            <div className='body-songs'>
                <div className='body-icons'>
                    <PlayCircleFilledIcon className='body-shuffle' onClick={playPlaylist}/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizTcon />
                </div>

                {/* List of songs */}
                {topHits?.tracks.items.map((item, i) => (
                    <SongRow track={item.track} key={i} playSong={playSong}/>
                ))} 
            </div>
                </>
            ) : (
            <>    
            <div className='body-info'>
                <img src={sideBarPlaylist?.images[0].url} alt='' />
                <div className='body-infoText'>
                    <strong>PLAYLIST</strong>
                    <h2> {sideBarPlaylist.name} </h2>
                    <p> {sideBarPlaylist?.description} </p>
                </div>
            </div>

            <div className='body-songs'>
                <div className='body-icons'>
                    <PlayCircleFilledIcon className='body-shuffle' onClick={playPlaylist}/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizTcon />
                </div>

                {/* List of songs */}
                {sideBarPlaylist?.tracks.items.map((item, i) => (
                    <SongRow track={item.track} key={i} onClick={playSong}/>
                ))} 
            </div>
            </>
            )}

            


        </div>
    )
}

export default Body
