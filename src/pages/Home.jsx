import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="hero">
          <Banner />
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
