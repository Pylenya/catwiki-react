import React from "react";
import "./otherphotos.scss";

export const OtherPhotos = ({ breedImages }) => {
  return (
    <section className="other-photos">
      <h3 className="other-photos__title">Other photos</h3>
      <div className="other-photos__grid">
        {breedImages.map((image) => {
          return (
            <img
              key={image.id}
              src={image?.url}
              className="other-photo__img"
            ></img>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(OtherPhotos);
