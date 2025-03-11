'use client'

import { useState } from "react"
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

export default function CheckBoxSwitch() {
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleCheckBoxSelect = () => {
        setIsSelected((prev) => !prev)
    }

    return (
        <div 
            className={cn(
                "w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer",
                isSelected ? "bg-gray-600" : "bg-gray-300"
            )}
            onClick={handleCheckBoxSelect}
        >
            <motion.div
                className={cn(
                    "w-6 h-6 bg-white rounded-full shadow-md",
                    isSelected && "bg-primary"
                )}
                animate={{ x: isSelected ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </div>
    )
}
