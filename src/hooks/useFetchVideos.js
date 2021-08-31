import { useState, useEffect } from 'react';
import { getVids } from '../helpers/getVids';

export const useFetchVideos = (categoria) => {
    
    const [state, setState] = useState({
        items: [],
        loading: true
    });

    
    useEffect(() => {
        getVids(categoria).then(vids =>{setState({
            items: vids,
            loading: false
        })})
    },[categoria])

    return state;
}
