import ScrollToSkills, { ScrollTop } from "./components/ScrollToSkills";
import Heading from "./components/Home/Heading";
import HomeWorkExp from "./components/Home/HomeWorkExp";
import HomeProjects from "./components/Home/HomeProjects";
import HomeSkills from "./components/Home/HomeSkills";
export default function Home() {
  return (
    <main>
      <Heading />
      <HomeWorkExp />
      <HomeProjects />
      <HomeSkills/>
      <ScrollToSkills />
      <ScrollTop />
    </main>
  );
}
