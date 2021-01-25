import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi(); 

function App() {

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET-TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET-USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET-PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZF1DXcBWIGoYBM5M').then(response => {
        dispatch({
          type: 'SET-TOP-HITS',
          topHits: response
        })
      })

      spotify.getMyCurrentPlayingTrack().then(current => {
        dispatch({
          type: 'SET-ITEM',
          item: current
        })
      })

      dispatch({
        type: 'SET-SPOTIFY',
        spotify: spotify,
      });

      

    }
  }, [])


  // console.log('PERSON >>>> ', user);
  // console.log('TOKEN >>>> ', token);
  // console.log('TOP-HITS >>>> ', topHits);
  // console.log('CURRENT-ITEM >>>> ', item);

  return (
    <div className="app">
      {token ? (<Player spotify={spotify}/>) : (<Login />)}
    </div>
  );
}

export default App;
