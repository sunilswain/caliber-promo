"use client";
import React from "react";
import { motion } from "framer-motion";

import useFadeUp from "hooks/useFadeUp";
import classNames from "utils/classNames";

interface AudioProps {
  embedSrc?: string; // URL for the embedded iframe (e.g., Spotify)
  audioFile?: string; // URL for the downloadable audio file
  className?: string; // Optional custom className for styling
}

const Audio: React.FC<AudioProps> = ({ embedSrc, audioFile, className }) => {
  const { ref, controls, variants } = useFadeUp();

  return (
    <div ref={ref} className={classNames("", className)}>
      {embedSrc && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{
            delay: 0.1,
            duration: 0.4,
            type: "spring",
          }}
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src={embedSrc}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
      {audioFile && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{
            delay: 0.2,
            duration: 0.4,
            type: "spring",
          }}
          className="mt-4 text-center"
        >
          <a
            href={audioFile}
            download
            className="px-6 py-3 text-sm font-medium text-black bg-gray-300 p-3 text-gray-800 outline-none hover:bg-gray-400 focus:bg-gray-400 active:scale-95 rounded"
          >
            Download Audio
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Audio;
