// components/LinkCard.js
const LinkCard = ({ title, url }) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-card"
      >
        <div className="link-card-content">
          <h3>{title}</h3>
        </div>
      </a>
    );
  };
  
  export default LinkCard;
  