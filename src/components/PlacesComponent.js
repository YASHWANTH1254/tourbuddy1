import React from 'react';

function PlacesComponent({ selectedPlacesData, state }) {
  return (
    <div>
      <h1 className="head">
        Best Five Places in <span style={{ color: '#2085f1' }}>{state}</span>
      </h1>
      <div className="places-container">
        {selectedPlacesData.map((place, index) => (
          <div className={`place-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="place-image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="place-details">
              <h2>
                {index + 1}. {place.name}
              </h2>
              <p>{place.description}</p>
              <a href={place.moreInfoLink} target="_blank" rel="noopener noreferrer">
                <button style={{ margin: '3px', borderRadius: '8px' }}>More About</button>
              </a>
              {/* ... other buttons */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesComponent;
