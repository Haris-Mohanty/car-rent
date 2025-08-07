"use client"

import { Car, MapPin, Timer, Phone } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: <MapPin className="text-black-500 w-8 h-8" />,
    title: "Choose Location",
    description: "Find your perfect ride by selecting your pickup location.",
  },
  {
    icon: <Timer className="text-black-500 w-8 h-8" />,
    title: "Pick-Up Date",
    description: "Set your pickup date to plan your journey ahead of time.",
  },
  {
    icon: <Phone className="text-black-500 w-8 h-8" />,
    title: "Book a Car",
    description: "Reserve the vehicle you want instantly from the comfort of home.",
  },
  {
    icon: <Car className="text-black-500 w-8 h-8" />,
    title: "Ride & Enjoy",
    description: "Hop in and enjoy your journey with comfort and safety.",
  },
]

export function WorkingSteps() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            How Our Service Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Follow these simple steps to book your ride quickly and easily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-4 py-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition"
            >
              <div className="mb-4">
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
