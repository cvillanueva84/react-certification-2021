import React from 'react'

export const CardDetails = ({
    id,
    videoId,
    title,
    descripcion
}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{videoId}</h2>
            <h3>{title}</h3>
            <h4>{descripcion}</h4>
        </div>
    )
}
