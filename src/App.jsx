import  illustation  from './assets/illustration-article.svg'
import userImg from './assets/image-avatar.webp'
import './App.css'

function App() {
  

  return (
    <>
      <div className='container-card'>
        <div className='container-card__card'>
          <figure className='container-card__card__figure'>
            <img className='container-card__card__figure__img' src={illustation} alt="illustration" />
          </figure>
          <div className='container-card__card__div-information'>
            <div className='container-card__card__div-information__tag'>
              <span className='container-card__card__div-information__tag__span'>Learning</span>
            </div>
            <p className='container-card__card__div-information__published'>Published 21 Dec 2023</p>
            <h3 className='container-card__card__div-information__h3'>HTML & CSS foundations</h3>
            <p className='container-card__card__div-information__p'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>
          <div className='container-card__user'>
            <figure className='container-card__user__figure'>
              <img className='container-card__user__figure__img' src={userImg} alt="avatar img user" />
            </figure>
            <span className='container-card__user__span'>Greg Hooper</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
