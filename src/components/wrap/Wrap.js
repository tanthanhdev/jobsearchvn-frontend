import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';

export const Wrap = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
