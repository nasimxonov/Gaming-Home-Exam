import Category from "../components/categories/category";
import Popular from "../components/popular/popular";
import ShowCase from "../components/showcase/ShowCase";
import Spotlight from "../components/spotlight/Spotlight";
import Trending from "../components/trending/Trending";
import News from "../components/news/News";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Category />
      <Spotlight />
      <Popular />
      <Trending />
      <News />
      <Footer />
    </>
  );
};
export default HomePage;
