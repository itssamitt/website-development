import Header from "@/_components/Header/Header";
import MainFront from "@/_components/MainFront/MainFront";
import Services from "@/_components/Services/Services";
import Highlights from "@/_components/Highlights/Highlights";
import Work from "@/_components/Work/Work";
import Stories from "@/_components/Stories/Stories";
import Benifit from "@/_components/Benifit/Benifit";
import Team from "@/_components/Team/Team";
import Contact from "@/_components/Contact/Contact";
import Questions from "@/_components/Questions/Questions";
import Testimonial from "@/_components/Testimonial/Testimonial";
import Footer from "@/_components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainFront />
      <Services />
      <Highlights />
      <Work />
      <Stories />
      <Benifit />
      <Team />
      <Contact />
      <Questions />
      <Testimonial />
      <Footer />
    </>
  );
}
