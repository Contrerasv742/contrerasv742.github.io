import '../styles/Card.css'
import rustProp from '../assets/about/rust.png'

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
        <img src={rustProp} className='card-img' />
      </div>
    </>
  )
}

export default Card;
