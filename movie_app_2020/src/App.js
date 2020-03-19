import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}</h4>
      <img src = {picture} alt={name} />
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://gbc-cdn-public-media.azureedge.net/img64004.1426x713.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "ramen",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Foj9FLTPyQiCpBxCCWbOkYkeevms%3D%2F0x0%3A960x600%2F1200x900%2Ffilters%3Afocal(404x224%3A556x376)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F62543760%2Fajida.0.0.0.jpg&f=1&nofb=1",
    rating: 4.5
  },
  {
    id: 3,
    name: "samgyeopsal",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeNWlIk9grDQ%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating: 6.4
  },
  {
    id: 4,
    name: "chicken",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fgrub%2F2018%2F01%2F29%2Fbony-fried-chicken%2Fbony-fried-chicken-bobwhite-3.w700.h700.jpg&f=1&nofb=1",
    rating: 7.2
  },
  {
    id: 5,
    name: "bibimbap",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff5%2FKorean.food-Bibimbap-02.jpg%2F1200px-Korean.food-Bibimbap-02.jpg&f=1&nofb=1",
    rating: 5.5
  }
];

function App() {
  return (
      <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
      </div>
    );
}

export default App;
