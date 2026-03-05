"use strict";
"use client";

import Image from "next/image";
import { motion } from "motion/react";

import img1 from "@/assets/cihly/IMG_1712.webp";
import img2 from "@/assets/cihly2/IMG_0216.jpeg";
import img3 from "@/assets/cihly/IMG_1714.webp";
import img4 from "@/assets/cihly2/IMG_0218.jpeg";
import img5 from "@/assets/cihly/IMG_1716.webp";
import img6 from "@/assets/cihly/IMG_1713.webp";
import img7 from "@/assets/cihly2/IMG_0220.jpeg";
import img8 from "@/assets/cihly/IMG_1720.webp";
import img9 from "@/assets/cihly2/IMG_0217.jpeg";

const images = [
  { src: img1, alt: "Stará cihla detail" },
  { src: img2, alt: "Paleta starých cihel" },
  { src: img3, alt: "Zdění ze starých cihel" },
  { src: img4, alt: "Detail struktury cihly" },
  { src: img5, alt: "Hromada očištěných cihel" },
  { src: img6, alt: "Staré cihly připravené k odběru" },
  { src: img7, alt: "Struktura starého zdiva" },
  { src: img8, alt: "Cihly s patinou" },
  { src: img9, alt: "Detailní pohled na starou cihlu" },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-stone-100 border-t-8 border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-stone-900 mb-6 uppercase">
            Galerie realizací a materiálu
          </h2>
          <p className="text-xl text-stone-700 font-medium">
            Prohlédněte si naše cihly v akci. Každý kus je originál s vlastním
            příběhem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
