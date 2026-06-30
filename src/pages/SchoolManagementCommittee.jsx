import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuMail, LuPhone, LuAward, LuShieldAlert, LuUsers } from 'react-icons/lu';

const SchoolManagementCommittee = () => {
  const brandColors = {
    primary: '#FFD700',   // Yellow
    secondary: '#800E13', // Burgundy
    cream: '#FFF9F5',
  };

  const members = [
    {
      name: 'Owek. Kyewalabye Male David',
      role: 'GES Managing Director',
      image: '/Owek. Kyewalabye David Male.png',
      bio: 'Visionary founder and Managing Director of Gombe Education Service. A retired Minister in the Buganda Government, Owek. Kyewalabye Male David has dedicated his life to establishing high-standard, holistic educational institutions across Uganda, nurturing both academic performance and unique student talents.',
    },
    {
      name: 'Mrs. Harriet Mulyanti',
      role: 'GES Executive Chairperson',
      image: '/GES Executive Chairperson Mrs Harriet Mulyanti.JPG',
      bio: 'Executive Chairperson of Gombe Education Service. Providing strategic leadership, administrative governance, and policy oversight. Mrs. Mulyanti guides the management team in maintaining standard compliance, school development planning, and delivering quality educational services.',
    },
    {
      name: 'Daniella Nakayenga',
      role: 'GES Rector',
      image: '/GES Rector - Daniella Nakayenga.jpeg',
      bio: 'Rector of Gombe Education Service. Working closely with school administrators to drive academic innovation, spiritual guidance, and student welfare systems. Daniella oversees operations to ensure the school remains a conducive, supportive home-away-from-home.',
    },
  ];

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
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">Governance</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">Management Committee</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
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
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5 text-sm font-semibold tracking-wide uppercase"
              style={{ backgroundColor: `${brandColors.primary}25`, color: brandColors.primary }}
            >
              <LuUsers className="w-4 h-4" />
              Leadership & Governance
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              School Management Committee
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Meet the executive leaders steering Gombe Junior School and the Gombe Education Service. Through collaborative governance, they ensure educational excellence, character building, and comprehensive talent development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Cards Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              {/* Profile Image Frame */}
              <div className="relative h-96 w-full overflow-hidden bg-gray-100 border-b-4" style={{ borderColor: brandColors.primary }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-white/90 text-[#800E13] shadow-md border border-[#F0E4D8]">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#800E13] mb-1">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#B1742F] mb-4">
                    Gombe Education Service
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Footer specs / decorative line */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-gray-500">Executive Committee</span>
                  <LuAward className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <section className="mt-16 bg-white border border-[#F0E4D8] p-8 text-center shadow-lg max-w-4xl mx-auto">
          <p className="text-[#800E13] font-bold text-lg mb-2">Our Governance Promise</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The School Management Committee remains committed to providing strategic leadership, ensuring high accountability, supporting teachers, and creating a safe, spiritually grounding environment for every child.
          </p>
        </section>
      </main>
    </div>
  );
};

export default SchoolManagementCommittee;
