import React from "react";
import advImg from "../assests/restauranfood.jpg";
import Lemon from "../assests/Asset 20@4x.png";

const Home = () => {
  const [name, setName] = React.useState();
  return (
    <article>
      <div className="overlay"></div>
      <div>
        <h1 className="Reg-50">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediteranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <button type="submit">Reserve Table</button>
      </div>
      <div>
        <img src={Lemon} alt="Lemon" width="100" />
        <img src={advImg} alt="ad image" width="100" />
      </div>
    </article>
  );
};

export default Home;
