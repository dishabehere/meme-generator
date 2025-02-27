import "../Description/Description.scss";

function Description() {
  return (
    <div className="description">
      <h3 className="description__title">Make your meme here</h3>
      <ol className="description__list">
        <li className="description__list-item">
          Type your first line of text in the top box
        </li>
        <li className="description__list-item">
          Type your punchline in the bottom box
        </li>
        <li className="description__list-item">
          Hit GENERATE to print your text on a random meme
        </li>
        <li className="description__list-item">Share and enjoy!</li>
      </ol>
    </div>
  );
}

export default Description;
