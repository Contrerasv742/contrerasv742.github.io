import '../styles/Card.css'

interface CardProps {
  title: string;
  img: string;
  description: string;
  url: string;
}

function Card({ title, img, description, url }: CardProps) {
  return (
    <a href={url} className="card-container" target="_blank" rel="noopener noreferrer">
      <div className='card-info'>
        <h2 className='card-title' >{title}</h2>
        <div>
          <p className='card-description'>{description}</p>
        </div>
      </div>
      <img className='card-img' src={img} />
    </a>
  )
}

export default Card;
