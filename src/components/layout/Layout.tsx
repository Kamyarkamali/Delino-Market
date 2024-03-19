import { FC } from "react";
import { Ichildren } from "../../types/type";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<Ichildren> = ({ children }) => {
  return (
    <div>
      <header className="mt-5">
        <Header />
      </header>

      <main className="min-h-[900px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
