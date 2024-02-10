import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

//IMPORT PHOTOS
import IconChat from "../assets/img/icon-chat.png";
import IconMoney from "../assets/img/icon-money.png";
import IconSecurity from "../assets/img/icon-security.png";

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

        <section className="features">
          <h2 className="sr-only">Features</h2>

          <Features
            iconSrc={IconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <Features
            iconSrc={IconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Features
            iconSrc={IconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
