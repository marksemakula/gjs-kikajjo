import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuDownload, LuAward, LuTrophy, LuFileText } from 'react-icons/lu';

const brandColors = {
  primary: '#FFD700',
  secondary: '#800E13',
  cream: '#FFF9F5',
  gold: '#C9A227',
  ink: '#1F2937',
};

const results = [
  {
    year: '2022',
    title: 'PLE Results 2022',
    description: 'Primary Leaving Examinations results for the 2022 academic year. Ranked among the top 5 schools nationwide with 100% Division One.',
    file: '/Resources/PLE%20RESULTS%202022.docx',
    highlight: '#5 Nationwide',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const UNEBResults = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans" style={{ backgroundColor: brandColors.cream }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7D4B9] bg-white text-sm font-medium text-[#59311B] hover:bg-[#FFF3D8] transition"
          >
            <LuArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <img
              src="/Gombe Junior School logo.png"
              alt="GJS Logo"
              className="h-10 w-10 object-contain hidden sm:block"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">Academics</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">UNEB Results</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white py-16 overflow-hidden" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-400" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-400" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuAward className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              UNEB Results Archives
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-4 text-yellow-300">
              Primary Leaving Examinations (PLE)
            </p>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Our consistent academic performance speaks for itself. Browse and download official PLE results from past years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div {...fadeUp} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
            <span className="text-3xl font-extrabold block mb-1" style={{ color: brandColors.gold }}>90%+</span>
            <span className="text-xs text-gray-600">Division One rate across 12 years of PLE</span>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
            <span className="text-3xl font-extrabold block mb-1" style={{ color: brandColors.secondary }}>100%</span>
            <span className="text-xs text-gray-600">Division 1 in 2017 & 2022</span>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
            <LuTrophy className="w-8 h-8 mx-auto mb-1 text-yellow-500" />
            <span className="text-xs text-gray-600">Ranked #3 & #5 Nationwide</span>
          </motion.div>
        </div>
      </section>

      {/* Results List */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div {...fadeUp}>
          <h3 className="text-2xl font-bold mb-2" style={{ color: brandColors.ink }}>
            Downloadable Results
          </h3>
          <p className="text-sm text-gray-500 mb-8">
            Click on a result to download the official document.
          </p>
        </motion.div>

        <div className="space-y-4">
          {results.map((result, index) => (
            <motion.a
              key={index}
              href={result.file}
              download
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
              className="group flex items-center justify-between gap-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-[#C9A227] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${brandColors.secondary}10` }}
                >
                  <LuFileText className="w-6 h-6" style={{ color: brandColors.secondary }} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#800E13] transition-colors">
                    {result.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {result.description}
                  </p>
                  {result.highlight && (
                    <span
                      className="inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${brandColors.secondary}10`, color: brandColors.secondary }}
                    >
                      {result.highlight}
                    </span>
                  )}
                </div>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${brandColors.gold}20` }}
              >
                <LuDownload className="w-5 h-5 group-hover:animate-bounce" style={{ color: brandColors.gold }} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-yellow-50/60 border border-yellow-200 rounded-lg p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-800">Note:</strong> Results are published as provided by the Uganda National Examinations Board (UNEB). 
            For more information about our academic performance or to request additional years, please contact the school at{' '}
            <a href="mailto:gombejuniorschool@gmail.com" className="font-semibold underline" style={{ color: brandColors.secondary }}>
              gombejuniorschool@gmail.com
            </a>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default UNEBResults;
