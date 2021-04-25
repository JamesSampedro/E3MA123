import pic1 from '../resto1.jpg' 
import pic2 from '../resto2.jpg'
import pic3 from '../resto3.jpg'
import pic4 from '../resto4.jpg'

const Photos = ({title1}) => {
    return (
        <section className="photo-right">
            <h1>{title1}</h1> 
            <div className="photos">
                <div className="row">
                    <img className="photo" src={pic1} alt = "resto 1"/>
                    <img className="photo" src={pic2} alt = "resto 2"/>
                </div>
                <div className="row">
                    <img className="photo" src={pic3} alt = "resto3"/>
                    <img className="photo" src={pic4} alt = "resto4"/>
                </div>
            </div>
        </section>
    )
}

export default Photos
