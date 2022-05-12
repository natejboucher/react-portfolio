const Projects = () => {
  const project = [
    {
      name: "Broadway Suspension",
      image: "broadwaysuspension.png",
      deployed: "https://broadway-suspension.herokuapp.com/",
      github: "https://github.com/benjamind10/broadway-suspension",
    },
    {
      name: "COD Connect",
      image: "codconnect.png",
      deployed: "https://rocky-sierra-14761.herokuapp.com/",
      github: "https://github.com/benjamind10/gaming-blog",
    },
    {
      name: "Weather Dashboard",
      image: "weatherdashboard.png",
      deployed: "https://natejboucher.github.io/weather-dashboard/",
      github: "https://github.com/natejboucher/weather-dashboard",
    },
    {
      name: "Fridge to Feast",
      image: "fridgetofeast.png",
      deployed: "https://natejboucher.github.io/safecation/",
      github: "https://github.com/natejboucher/safecation",
    },
    {
      name: "Note Taker",
      image: "notetaker.png",
      deployed: "https://agile-plateau-16551.herokuapp.com/",
      github: "https://github.com/natejboucher/note_taker",
    },
    {
      name: "Tech Blog",
      image: "techblog.png",
      deployed: "https://pacific-wave-47472.herokuapp.com/",
      github: "https://github.com/natejboucher/tech-blog",
    },
    {
      name: "Budget Tracker",
      image: "notetaker.png",
      deployed: "https://blooming-sands-75650.herokuapp.com/",
      github: "https://github.com/natejboucher/budget-tracker",
    },
  ];

  return (
    <section id='projects' className='projects row'>
      <div className='col-12'>
      <h3 className='m-auto'>My Projects:</h3>
      </div>
      {project.map((project) => (
          <div key={project.name} className="card project-card">
          <div className='project-img'>
          <img className="card-img-top" src={require(`../../assets/images/${project.image}`)} alt="Project screenshot." ></img>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title align-center text-center">{project.name}</h5>
            <a href={project.deployed} target='_blank' rel='noreferrer' className="btn btn-light text-dark align-center">Deployed Application</a>
            <a href={project.github}target='_blank' rel='noreferrer' className="btn btn-light text-dark align-center">Github Repository</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
