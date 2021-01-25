export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    //'BQB2N1Jp3SVhkDzXzIkcWQBLwGoqGg9f1j5OHqKbatGEukAn_VuzVVczFO86BJsNOumI_8cNRoNBt91tfLaT16yl7dZ7W_EuMP8aCxhNM5GHmH5RsOPGlUQQE_MmwkQhhxf6ezmwXL6m5x7tIyG8MIa2-pGmmWFenjeeqoxXgQQQfsPwEQaU'
}

// Action --> type, [payload]
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET-TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET-PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET-TOP-HITS': 
            return {
                ...state,
                topHits: action.topHits
            }

        case 'SET-ITEM':
            return {
                ...state,
                item: action.item
            }
        
        case 'SET-PLAYING':
            return {
                ...state,
                playing: action.playing
            }

        case 'SET-SPOTIFY':
            return {
                ...state,
                spotify: action.spotify
            }

        case 'SET-SIDE-BAR':
            return {
                ...state,
                sideBarPlaylist: action.sideBarPlaylist
            }

        default: 
            return state;
    }
}

export default reducer;