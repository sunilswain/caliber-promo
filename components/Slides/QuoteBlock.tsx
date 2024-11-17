"use client"
import * as React from "react"

import { motion } from "framer-motion"

import useFadeUp from "hooks/useFadeUp"
import classNames from "utils/classNames"

interface Props {
  quote: string
  author?: string
  className?: string
  description?: string
}

const QuoteBlock: React.FC<Props> = ({ quote, author, description, className }) => {
  const { ref, controls, variants } = useFadeUp();

  return (
    <div ref={ref} className={classNames("", className)}>
      <div className="flex gap-5">
        <div className="text-9xl font-bold text-gray-900">{"“ "}</div>
        <div>
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0, duration: 0.4, type: "spring" }}
            className="text-5xl font-bold leading-normal text-gray-900"
          >
            {quote}
          </motion.h1>
          {author && (
            <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.1, duration: 0.4, type: "spring" }}
              className="mt-10 text-3xl leading-normal text-gray-500"
            >
              - {author}
            </motion.p>
          )}
          {description && (
            <motion.p
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
              className="mt-5 text-xl leading-relaxed text-gray-700"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock
