import './about.css'
import coiledTubing from '../../img/колтюбинг.jpg'
import award from '../../img/kappa.jpg'

const About = () =>{
    return(
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={coiledTubing}
                 alt=""
                 className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About me</h1>
            <p className='a-sub'>
            My main job is a geophysic, I investigate oil and gas wells in a service company to optimize their operation.
            </p>
            <p className='a-desc'>
            In my spare time I develop web applications. Ready to start working on various projects.
            </p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className='a-award-title'>Hydrodynamic well tests</h4>
                <p className='a-award-desc'>
                    Also i made pressure well tests, such as draw down, build up tests in vertical, controlled directional, horizontal wells with hydrofracking or without. 
                </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About