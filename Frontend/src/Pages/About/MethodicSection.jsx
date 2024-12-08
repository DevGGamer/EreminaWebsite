import image from '../../assets/Methodology.svg'

function MethodicSection()
{
    return (
        <section className="methodic-section">
            <h1>Мои методики лечения</h1>
            <img src={image} alt="Methodic" />
        </section>
    )
}

export default MethodicSection;