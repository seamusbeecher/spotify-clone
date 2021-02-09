import React, { useEffect } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from '../DataLayer';

function Footer({ spotify }) {

    const [{ item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        // find a unique id for the song and set as dependance, reset the values as the new ones
        spotify.getMyCurrentPlayingTrack().then(current => {
          dispatch({
            type: 'SET-ITEM',
            item: current
          })
        })
    }, [item])

    

    const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: 'SET-PLAYING',
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: 'SET-PLAYING',
            playing: true,
          });
        }

      };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((current) => {
          dispatch({
            type: 'SET-ITEM',
            item: current.item,
          });
          dispatch({
            type: 'SET-PLAYING',
            playing: true,
          });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((current) => {
          dispatch({
            type: 'SET-ITEM',
            item: current.item,
          });
          dispatch({
            type: 'SET-PLAYING',
            playing: true,
          });
        });
      };

      const shufflePlay = (e) => {
        spotify.setShuffle(true);
        spotify.getMyCurrentPlayingTrack().then((current) => {
          dispatch({
            type: 'SET-ITEM',
            item: current.item
          })
        })
        
      }

    return (
        <div className='footer'>
            <div className='footer-left'>
                <img className='footer-albumLogo' src={item?.item?.album?.images[0].url} alt='' />
                <div className='footer-songInfo'>
                    {item ? (
                        <div className="footer__songInfo">
                            <h4>{item?.item?.name}</h4>
                            <p>{item?.item?.artists?.map((artist) => artist.name).join(", ")}</p>
                        </div>
                    ) : (
                        <div className="footer__songInfo">
                            <h4>No song playing</h4>
                            <p>...</p>
                        </div>
                    )}
                </div>
            </div>

            <div className='footer-center'>
                <ShuffleIcon className='footer-green' onClick={(e) => shufflePlay(e)}/>
                <SkipPreviousIcon className='footer-icon' onClick={skipPrevious}/>
                <PlayCircleOutlineIcon fontSize='large' className='footer-icon' onClick={handlePlayPause}/>
                <SkipNextIcon className='footer-icon' onClick={skipNext}/>
                <RepeatIcon className='footer-green' />
            </div>

            <div className='footer-right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
