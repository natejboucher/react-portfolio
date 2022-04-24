import profileImage from '../../assets/images/memoji.png';

const Contact = () => {
    return(
        <section className="about-me">
        <div id="bio" className="bio">
            <div className="bio-img"><img src={profileImage} alt="Nathaniel Boucher Memoji" /></div>
            
            <div className="bio-text">
                <h3>Hey! My name is Nate.</h3>
                <p>
                My passion is creating a modern and minimalistic UI, while still being visually entertaining for the user.
                <br /><br />When I'm not keyboarding, my hobbies include Japanese and European car culture, story-driven video games and annoying the crap out of my pets and wife.
                <br /><br /> I’m currently enrolled in the University of Richmond’s Coding Bootcamp. 
                </p>
            </div>
        </div>
    </section>
    );
}

export default Contact;