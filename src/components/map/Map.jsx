import React from "react";
import "../map/map.css";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <>
      <motion.section
        whileInView={{
          scale: [1, 0.9, 1],
          borderRadius: ["50%", "0%", "50%", "0%"]
        }}
        className="maps_container"
      >
        <iframe
          width="100%"
          height="600px"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=la dorada caldas maxipan&t=&z=20&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          Scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </motion.section>
    </>
  );
};

export default Map;
