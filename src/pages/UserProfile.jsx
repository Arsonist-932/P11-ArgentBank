import Navbar from "../components/Navbar/Navbar";
import HeaderAccount from "../components/HeaderAccount/HeaderAccount";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";

function userProfile() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="main bg-dark profile-content">
        <div className="header">
          <HeaderAccount />
        </div>

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
        </section>

        <section className="account">
          <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
        </section>

        <section className="account">
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default userProfile;
