import React from 'react';

function Video(props) {
  return (
    <div className="card m-2 col-3" style={{ width: '350px' }}>
      <img
        src={props.videoUrl}
        className="card-img-top"
        style={{ height: '180px' }}
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button type="submit" href="#" className="btn btn-primary mt-auto">
          Go to video
        </button>
      </div>
    </div>
  );
}

export default Video;
