import React from "react";
import useScript from "../utils/useScript";
import { motion } from "framer-motion";
const Testimonials = () => {
  useScript("https://testimonial.to/js/iframeResizer.min.js", () => {
    if (window.iFrameResize) {
      window.iFrameResize(
        { log: false, checkOrigin: false },
        "#testimonialto-aniruddha-kajave-tag-all-light"
      );
    }
  });

  return (
    <div className=" border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl "
      >
        Professional <span className=" text-neutral-500">Feedback</span>
      </motion.h2>
      <iframe
        className=" h-96"
        id="testimonialto-aniruddha-kajave-tag-all-dark"
        src="https://embed-v2.testimonial.to/w/aniruddha-kajave?theme=dark&card=base&loadMore=on&initialCount=5&randomize=on&tag=all&autoLoadMore"
        frameBorder="0"
        scrolling="no"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Testimonials;
