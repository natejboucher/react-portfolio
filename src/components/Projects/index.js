const Projects = ()=>{
    return (
        <section id="projects" className="projects">
        <h3>My Projects:</h3>
            <a href="https://natejboucher.github.io/weather-dashboard/" target="_blank" rel='noreferrer' className="featured-project">
                <div className="featured-project-text">
                    <span role="img" aria-label="Screenshot of Weather Dashboard project"> </span>
                    <h4>Weather Dashboard</h4>
                    <p>HTML / CSS / JS / Bootstrap</p>
                </div>
            </a>
        <a href="https://rocky-sierra-14761.herokuapp.com/" target="_blank" rel='noreferrer' className="project-icon-1">
            <div className="project-text">
                <h4>COD Connect</h4>
                <p>Boostrap/Firebase/MySQL</p>
            </div>
        </a>

        <a href="https://natejboucher.github.io/safecation/" target="_blank" rel='noreferrer' className="project-icon-2">
            <div classNAme="project-text">
                <h4>Fridge to Feast</h4>
                <p>HTML / CSS / JS / Bulma</p>
            </div>
        </a>

        <a href="https://natejboucher.github.io/run-buddy/" target="_blank" rel='noreferrer' className="project-icon-3">
            <div className="project-text">
                <h4>Run Buddy</h4>
                <p>HTML / CSS</p>
            </div>
        </a>

        <a href="https://agile-plateau-16551.herokuapp.com/" target="_blank" rel='noreferrer' className="project-icon-4">
            <div className="project-text">
                <h4>Note Taker</h4>
                <p>HTML/CSS/JS/Node/Express</p>
            </div>
        </a>
    </section>
    );
}

export default Projects;