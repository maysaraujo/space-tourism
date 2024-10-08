import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <section className='bgHome home'>
      <Header />
      <section className='container'>
        <div className='text-container'>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='explore'>
          <p>EXPLORE</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
