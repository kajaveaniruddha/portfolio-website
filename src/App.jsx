import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    x.set(clientX - 20);
    y.set(clientY - 20);
  };

  const handleClick = () => {
    controls.start({ scale: 0.8 }).then(() => {
      controls.start({ scale: 1 });
    });
  };

  return (
    <main
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Testimonials/>
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Resume/>
      </div>
      <motion.div
        className="fixed top-0 left-0 md:w-10 aspect-square opacity-20 rounded-full bg-white pointer-events-none"
        style={{ x: springX, y: springY }}
        animate={controls}
      />
      <motion.div
        className="fixed top-4 left-4 md:w-2 aspect-square opacity-100 rounded-full bg-white pointer-events-none"
        style={{ x: springX, y: springY }}
      />
    </main>
  );
}

export default App;
