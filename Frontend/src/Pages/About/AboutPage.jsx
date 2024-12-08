import './AboutPage.css'
import AboutSection from './AboutSection'
import StatisticSection from './StatisticSection';
import ReasonSection from './ReasonsSection';
import MethodicSection from './MethodicSection';
import FeedbackSection from './FeedbackSection';
import FormSection from './FormSection';


function AboutPage()
{
    return (
        <>
            <AboutSection />
            <StatisticSection />
            <ReasonSection />
            <MethodicSection />
            <FeedbackSection />
        </>
    )
}

export default AboutPage;