import { Wrap } from 'components/wrap/Wrap';
import { Companies } from './sections/Companies';
import { Banner } from './sections/Banner';
// import { Jobs } from './sections/Jobs';
// import { Blogs } from './sections/Blogs';

export const HomePage = () => (
  <Wrap>
    <Banner />
    <Companies />
    {/* <Jobs /> */}
    {/* <Blogs /> */}
  </Wrap>
);

export default HomePage;
