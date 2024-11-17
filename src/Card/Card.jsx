import s from "./Card.module.scss";

export const Card = ({
  name,
  imageFront,
  imageBack,
  id,
  height,
  attack,
  moves,
}) => {
  return (
    <div className={s.card}>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <div className={s.images}>
        {imageFront ? ( <img className={s.image} src={imageFront} alt={name} />) : ("Image not set")}
        {imageBack ? (<img className={s.image} src={imageBack} alt={name} />) : ("")}
      </div>
      <p>Id: {id}</p>
      <p>Height: {height}</p>
      <p>Attack: {attack}</p>
      <p>Movies: {moves.length}</p>
    </div>
  );
};
