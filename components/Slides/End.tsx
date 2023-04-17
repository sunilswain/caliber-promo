import * as React from "react"
import { useInView } from "react-intersection-observer"

import { motion, useAnimation } from "framer-motion"

interface Props {
  username: string
}
const End: React.FC<Props> = ({ username = "nirnejak" }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <motion.main
      animate={controls}
      initial="hidden"
      transition={{ delay: 0, duration: 0.15, type: "spring" }}
      variants={variants}
      ref={ref}
      className="w-[400px]"
    >
      <h1 className="text-3xl font-bold text-gray-900">Thank You</h1>
      <div className="mt-10 flex flex-col gap-2 text-gray-400">
        <p>
          <span className="text-gray-900">{username}</span>.com
        </p>
        <p>
          twitter.com/<span className="text-gray-900">{username}</span>
        </p>
        <p>
          github.com/<span className="text-gray-900">{username}</span>
        </p>
        <p>
          dribbble.com/<span className="text-gray-900">{username}</span>
        </p>
      </div>
    </motion.main>
  )
}

export default End
