import profileImage from "../../assets/images/memoji.png";

const Home = () => {
  return (
      <section className='home-main'>
        <div className='home'>
          <div className='home-img'>
            <img src={profileImage} alt='Nathaniel Boucher Memoji' />
          </div>
        </div>
      </section>
  );
};

export default Home;
