const FetchData = ({ data }) => {
  return (
    <div className="fetch-data__outer-container">
      <div className="fetch-items-container">
        {data.map((item, index) => {
          const {
            image,
            market,
            km,
            last_date,
            lat,
            lng,
            state,
            district,
            meters,
          } = item;
          return (
            <div className="fetch-items-container__item" key={index}>
              <div className="item__image">
                <img
                  className="item__mandi-image"
                  src={image}
                  alt="Mandi Image"
                />
              </div>
              <div className="item__info">
                <div className="item__info__name">Name: "{market}</div>
                <div className="item__info__distance">Distance: {km} km</div>
                <div className="item__info__last-date">
                  last date:{last_date}
                </div>
                <div className="item__info__lat">lat: {lat.toFixed(2)}</div>
                <div className="item__info__lng">lan: {lng.toFixed(2)}</div>
                <div className="item__info__area">
                  area: {meters.toFixed(2)} meter sq.
                </div>
                <div className="item__info__district">district: {district}</div>
                <div className="item__info__state">State:{state}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchData;
