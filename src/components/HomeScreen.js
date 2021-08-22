import React, { useContext} from 'react';
import { useFetchVideos } from '../hooks/useFetchVideos';
import { CardItem } from './CardItem';
import { GlobalContext } from './Context'
import { ContenedorStyled, Title, CardStyled} from '../style/HomeScreenStyled'

export const HomeScreen = () => {

    const { myStateReducer } = useContext(GlobalContext);
    const { items: videos, loading } = useFetchVideos(myStateReducer.search);
    
    return (
        <>
            <ContenedorStyled>
                {loading ? <Title>Loading...</Title> : <Title>{myStateReducer.search}</Title>}
                <CardStyled>
                    {videos.map(vid => (
                        <CardItem
                            key={vid.id}
                            {...vid}
                        />
                    ))}
                </CardStyled>
            </ContenedorStyled>

        </>
    )
}
