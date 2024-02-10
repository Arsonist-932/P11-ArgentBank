import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="main bg-dark login-content">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Login;
