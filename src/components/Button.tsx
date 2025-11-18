import React from 'react'

import { PropsButton } from '@/types/components/Button/button'
import { motion } from 'framer-motion'

export default function Button({ style, buttonColor, text, onClick }: PropsButton) {
    return (
        <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${buttonColor ? buttonColor : "bg-blue-600 hover:bg-blue-700"} cursor-pointer text-white py-2 px-3 rounded ${style}`}
        >
            {text}
        </motion.button>
    )
}
