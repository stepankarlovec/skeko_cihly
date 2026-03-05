"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Phone,
  Hammer,
  Flame,
  Beer,
  HardHat,
  Truck,
  Clock,
  ShieldCheck,
} from "lucide-react";
import GallerySection from "./components/GallerySection";

import heroImg from "@/assets/cihly/hero.jpeg";
import grillImg from "@/assets/cihly/krb.png";
import bedImg from "@/assets/cihly/IMG_1714.webp";
import wallImg from "@/assets/cihly/zidky.png";
import pathImg from "@/assets/cihly/dlazba.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-stone-100/90 backdrop-blur-md border-b-4 border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-black text-stone-900 uppercase tracking-tighter">
            Cihly <span className="text-orange-700">Pardubice</span>
          </div>
          <a
            href="tel:+420732112998"
            className="flex items-center gap-2 text-base font-bold text-stone-800 hover:text-orange-700 transition-colors bg-stone-200 px-4 py-2 border-2 border-stone-300"
          >
            <Phone className="w-5 h-5" />
            +420 732 112 998
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b-8 border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 text-orange-400 text-sm font-bold mb-8 uppercase tracking-widest border-l-4 border-orange-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-orange-500"></span>
                </span>
                Materiál pro pořádný chlapy
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif font-black leading-none mb-8 text-stone-900 uppercase">
                Léto volá.
                <br />
                <span className="text-orange-700">
                  Postavte to vlastníma rukama.
                </span>
              </h1>
              <p className="text-xl text-stone-700 mb-10 leading-relaxed font-medium">
                Znáte ten pocit zadostiučinění, když vám pod rukama roste dílo z
                cihel, které mají historii? Tvrdá práce, vůně malty a zasloužený
                odpočinek u vlastního grilu. To si nekoupíte, to si musíte
                odpracovat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+420732112998"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-orange-700 hover:bg-orange-800 transition-all border-b-4 border-orange-900 uppercase tracking-wider"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Zavolat a objednat
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[600px] border-8 border-stone-800 shadow-2xl"
            >
              <Image
                src={heroImg}
                alt="Chlapské ruce pokládající starou cihlu"
                fill
                className="object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-orange-700 px-6 py-4 border-l-4 border-white inline-block">
                  <p className="text-xl font-black text-white uppercase tracking-wider">
                    Poctivá práce
                  </p>
                  <p className="text-sm font-bold text-orange-200 uppercase">
                    Výsledek, který přetrvá
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Feeling & Benefits */}
      <section className="py-24 bg-stone-200 border-b-8 border-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-stone-900 mb-6 uppercase">
              Proč stavět ze starých cihel?
            </h2>
            <p className="text-xl text-stone-700 font-medium">
              Nejde o to mít to hotové hned. Jde o ten proces. O to vzít do ruky
              materiál, který už něco zažil, a dát mu nový smysl.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Kus historie",
                desc: "Každá cihla má za sebou desítky let. Oděrky, šrámy a patinu, kterou v moderní továrně prostě nevyrobí. Držíte v ruce kus minulosti.",
              },
              {
                icon: Hammer,
                title: "Čistá hlava a mozoly",
                desc: "Zdění je ta nejlepší terapie. Vypnete hlavu, soustředíte se na maltu, provázek a další řadu. Tvrdá práce, která dává smysl.",
              },
              {
                icon: Flame,
                title: "Zasloužená odměna",
                desc: "Ten pocit, když si večer sednete k hotovému dílu, opřete se o hrubou zeď a otevřete si pivo. To je pocit, který se nedá koupit.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 p-10 border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]"
              >
                <div className="w-16 h-16 bg-stone-800 flex items-center justify-center mb-8 text-orange-500">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-stone-900 mb-4 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-stone-700 leading-relaxed font-medium text-lg">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Inspiration */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-serif font-black text-stone-900 mb-6 uppercase">
                Co letos zvládnete postavit?
              </h2>
              <p className="text-xl text-stone-700 font-medium">
                Inspirujte se projekty, pro které jsou naše cihly jako stvořené.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Zahradní gril a udírna",
                img: grillImg,
                desc: "Kde se peče maso a vypráví historky.",
              },
              {
                title: "Vyvýšené záhony",
                img: bedImg,
                desc: "Poctivá práce pro vaši zahradu.",
              },
              {
                title: "Zídky a ploty",
                img: wallImg,
                desc: "Pevná hranice vašeho království.",
              },
              {
                title: "Dlažba a cestičky",
                img: pathImg,
                desc: "Krok za krokem po staré klasice.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-96 border-4 border-stone-800 overflow-hidden cursor-pointer shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] contrast-125"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black text-white mb-2 uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 font-medium mb-4 text-sm">
                    {item.desc}
                  </p>
                  <div className="h-2 w-16 bg-orange-600 transform origin-left transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      {/* Technical / Process */}
      <section className="py-32 bg-stone-900 text-stone-300 border-t-8 border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-8 uppercase">
                Materiál, který má něco za sebou.
              </h2>
              <p className="text-xl text-stone-400 mb-10 font-medium">
                Víme, že chcete stavět, ne ztrácet čas. Naše cihly jsou pečlivě
                tříděné, očištěné od hrubé malty a připravené k okamžitému
                odběru v Pardubicích.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    text: "Pečlivě tříděné a očištěné od hrubé malty",
                  },
                  {
                    icon: Truck,
                    text: "Možnost nakládky ještěrkou přímo na váš vozík",
                  },
                  {
                    icon: HardHat,
                    text: "Připraveno na paletách k okamžitému odběru",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-6 bg-stone-800 p-4 border-l-4 border-orange-600"
                  >
                    <div className="text-orange-500">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-stone-200 font-bold text-lg uppercase tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-600 p-10 md:p-14 border-8 border-stone-950 shadow-[16px_16px_0px_0px_rgba(12,10,9,1)]">
              <h3 className="text-3xl font-black text-stone-950 mb-6 uppercase">
                Máte vozík? Přijeďte si.
              </h3>
              <p className="text-stone-900 font-bold text-lg mb-10">
                Pro aktuální skladové zásoby nám rovnou zavolejte. Domluvíme
                detaily a můžete začít míchat maltu.
              </p>
              <a
                href="tel:+420732112998"
                className="flex items-center justify-center w-full py-6 px-6 bg-stone-950 text-white text-center font-black text-2xl hover:bg-stone-800 transition-colors mb-6 uppercase tracking-widest border-b-4 border-stone-700"
              >
                <Phone className="mr-4 h-8 w-8 text-orange-500" />
                +420 732 112 998
              </a>
              <p className="text-lg font-bold text-center text-stone-900 uppercase tracking-widest mb-4">
                Sklad: Pardubice a okolí
              </p>
              <div className="text-center">
                <a
                  href="https://skeko.cz/levne-cihly-pardubice"
                  className="text-stone-800 underline decoration-2 underline-offset-4 hover:text-stone-950 font-bold transition-colors"
                >
                  Více o našich cihlách také na Skeko.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-stone-800 text-white text-center border-t-8 border-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 uppercase text-orange-500">
            Nenechte léto protéct mezi prsty
          </h2>
          <p className="text-2xl text-stone-300 mb-12 font-medium">
            Zásoby starých cihel mizí. Co se zbourá, to se prodá. Zajistěte si
            materiál pro svůj projekt ještě dnes a o víkendu můžete začít.
          </p>
          <a
            href="tel:+420732112998"
            className="inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-stone-900 bg-orange-500 hover:bg-orange-400 transition-all border-b-8 border-orange-700 uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(12,10,9,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(12,10,9,1)] active:translate-y-2 active:shadow-none"
          >
            <Phone className="mr-4 h-8 w-8" />
            Zavolat a rezervovat
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-stone-950 py-12 text-center text-stone-500 font-bold uppercase tracking-widest">
        <p className="mb-4">
          © {new Date().getFullYear()} Prodej použitých cihel Pardubice.
        </p>
        <p>
          Volat můžete denně:{" "}
          <a
            href="tel:+420777123456"
            className="text-orange-600 hover:text-orange-400 text-xl ml-2"
          >
            +420 732 112 998{" "}
          </a>
        </p>
        <p className="mt-4 opacity-50 text-xs">
          Partner:{" "}
          <a
            href="https://skeko.cz/levne-cihly-pardubice"
            className="underline hover:text-stone-300"
          >
            Levné staré cihly Pardubice
          </a>
        </p>
      </footer>
    </main>
  );
}
