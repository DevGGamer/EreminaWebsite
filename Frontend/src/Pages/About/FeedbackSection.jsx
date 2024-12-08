import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import feedback1 from "../../assets/Feedback1.jpg"
import feedback2 from "../../assets/Feedback2.jpg"
import feedback3 from "../../assets/Feedback3.jpg"
import feedback4 from "../../assets/Feedback4.jpg"

function FeedbackSection()
{
    const images = [feedback1, feedback2, feedback3, feedback4]

    return (
        <section className="feedback-section">
            <div className='carousel'>
                <p><span>Уже более 3000 женщин</span> <br /> прошли консультации со мной. Вот что они говорят о них:</p>
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    showStatus={false}
                    autoPlay
                    interval={5000}
                    >
                    {
                        images.map((image, index) => (
                            <div key={index}>
                                <img className="carousel-image" src={image} alt={index + 1} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    );
}

export default FeedbackSection;