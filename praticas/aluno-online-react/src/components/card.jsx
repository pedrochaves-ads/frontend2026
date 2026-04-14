import './card.css';

function Card(props) {
  return (
    <article className="card">
      <h3>{props.titulo || 'Card Título'}</h3>
      {props.items?.length ? (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        props.children
      )}
    </article>
  );

}

export default Card;
