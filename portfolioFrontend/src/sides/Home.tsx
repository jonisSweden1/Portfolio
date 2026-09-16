import "./Home.css"
import background from '../Soothing-nature-backgrounds-2.jpg'
import profile from '../cropped_circle_image.png'

export const HomePage = () => (
    <div className="App">
    <div id="background" style={{backgroundImage: `url(${background})`}}>
      <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '70px'}}>
        <img src={profile} width={545}/>
        <p style={{fontSize: '57px', color: 'white', fontFamily: ''}}>Game Developer, Software Engineer</p>
      </section>
      </div>
  </div>
)