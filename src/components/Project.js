const Project = ({ image, name, description, github }) => {
    return (
        <div class="project">
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            <a class="github-button" href={github} data-size="large" >View Project on GitHub</a>
        </div>
    )
}

export default Project