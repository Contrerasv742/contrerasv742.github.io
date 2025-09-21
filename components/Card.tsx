import '../styles/Card.css'

interface CardProps {
  title: string;
  img: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <>
      <div className="card-container">
        <div className='card-info'>
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
          </div>
        </div>
        <img src='../assets/about/cpp.png' className='card-img' />
      </div>
    </>
  )
}

export default Card;
