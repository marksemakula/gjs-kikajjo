import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuArrowLeft, LuMapPin, LuPhone, LuMail, LuAward, LuBookOpen,
  LuUsers, LuActivity, LuHeart, LuBuilding, LuCompass, LuShield,
  LuSparkles, LuCheck, LuClock, LuBriefcase
} from 'react-icons/lu';

const SchoolProfile = () => {
  const brandColors = {
    primary: '#FFD700',   // Yellow
    secondary: '#800E13', // Burgundy
    cream: '#FFF9F5',
  };

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('identity');

  useEffect(() => {
    if (location.hash === '#mission' || location.hash === '#core-values') {
      setActiveTab('identity');
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  const tabs = [
    { id: 'identity', label: 'Identity & History', icon: LuCompass },
    { id: 'academics', label: 'Academics & ICT', icon: LuBookOpen },
    { id: 'facilities', label: 'Facilities & Security', icon: LuBuilding },
    { id: 'activities', label: 'Co-Curricular & Clubs', icon: LuSparkles },
    { id: 'community', label: 'Community & Health', icon: LuHeart },
    { id: 'sister-schools', label: 'Sister Schools', icon: LuUsers },
  ];

  const coreValues = [
    { name: 'God Fearing', desc: 'Putting God first in all our endeavors.' },
    { name: 'Respect', desc: 'Value yourself, others, and the environment.' },
    { name: 'Teamwork', desc: 'Collaborating together to achieve greatness.' },
    { name: 'Integrity', desc: 'Acting with honesty and strong moral principles.' },
    { name: 'Excellence', desc: 'Striving to be outstanding in everything we do.' },
    { name: 'Time Management', desc: 'Valuing time as a resource for success.' },
  ];

  const clubs = [
    { name: 'Chess Club',            category: 'moments'     },
    { name: 'Robotics',              category: 'ict-lab'     },
    { name: 'Scouts Club',           category: 'moments'     },
    { name: 'Piano Club',            category: 'music-rooms' },
    { name: 'Jazz Band Club',        category: 'music-rooms' },
    { name: 'Violin Club',           category: 'music-rooms' },
    { name: 'Guitar Club',           category: 'music-rooms' },
    { name: 'Happy Kids Club',       category: 'moments'     },
    { name: 'MDD Club',              category: 'moments'     },
    { name: 'Food and Nutrition Club', category: 'home-economics' },
    { name: 'Soccer Academy',        category: 'sports'      },
    { name: 'Art and Crafts Club',   category: 'moments'     },
    { name: 'Netball Club',          category: 'sports'      },
    { name: 'Volleyball Club',       category: 'sports'      },
    { name: 'Board Games Club',      category: 'moments'     },
  ];

  const sisterSchools = [
    { name: 'Gombe Institute of Business, Science & Technology', loc: 'Kabalagala - Muzaana Zone, Kampala', url: 'http://gibst.ac.ug' },
    { name: 'Gombe Junior School, Kikajjo', loc: 'Kikajjo (Same Location)', url: 'https://www.kikajjo.gombejuniorschool.ac.ug' },
    { name: 'Gombe Junior School, Gulu', loc: 'Gulu City', url: 'https://www.gulu.gombejuniorschool.ac.ug' },
    { name: 'Scooby-Doo International School Uganda (SISU), Katale', loc: 'Along Sseguku - Katale Rd', url: 'https://www.katale.scoobydoointernational.ac.ug' },
    { name: 'Scooby-Doo International School Uganda (SISU), Gulu', loc: 'Gulu City', url: 'https://www.gulu.scoobydoointernational.ac.ug' },
    { name: 'St. Andrew Kaggwa Gombe High School, Bujuuko', loc: 'Kampala - Mityana Road', url: 'http://www.bujuuko.gombehighschool.ac.ug/' },
    { name: 'St. Andrew Kaggwa Gombe High School, Kawaala', loc: 'Kampala - Hoima Road', url: 'http://www.kawaala.gombehighschool.ac.ug/' },
    { name: 'International Education Pathway Program', loc: 'Gombe Education Service', url: 'https://www.ipp.ges.ac.ug' },
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
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">About Us</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">School Profile</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative text-white py-16 overflow-hidden" style={{ backgroundColor: brandColors.secondary }}>
        {/* Wavy lines / circles background */}
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
            <img
              src="/Gombe Junior School logo.png"
              alt="Gombe Junior School Logo"
              className="w-24 h-24 mx-auto mb-6 object-contain drop-shadow-lg"
            />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Gombe Junior School
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-6 text-yellow-300">
              “Ssosolye Bwatafa” — Success Through Perseverance
            </p>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Scooby Doo International School Uganda (SISU) was established in 2013 and is located in Kikajjo, off Katale Road, in the Seguku area of Wakiso District, Uganda. Part of the Gombe Educational Services (GES) family of schools, we have grown into a respected institution known for nurturing children's academic, social, emotional and physical development through holistic learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-none shadow-md border border-gray-100 p-4 space-y-1">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold px-3 mb-3">Sections</p>
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-none text-left text-sm font-medium transition-all duration-200 ${isActive
                      ? 'text-white shadow-md'
                      : 'text-gray-600 hover:bg-[#FFF6CC] hover:text-[#800E13]'
                      }`}
                    style={isActive ? { backgroundColor: brandColors.secondary } : {}}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#800E13]'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-none shadow-xl border border-[#F0E4D8] p-8 sm:p-10 min-h-[500px]"
              >

                {/* ── TAB 1: IDENTITY & HISTORY ── */}
                {activeTab === 'identity' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">School Identity</h3>
                      <p className="text-gray-500">The foundation, location, and beliefs that define our mixed day & boarding school.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-2">
                        <span className="text-xs font-bold uppercase text-[#B1742F]">Nature of School</span>
                        <h4 className="text-lg font-bold text-gray-800">International Early Childhood School</h4>
                        <p className="text-sm text-gray-600">SISU offers a child-friendly environment in a quiet, traffic-free setting that provides a safe and conducive atmosphere for young children's learning and development.</p>
                      </div>

                      <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-2">
                        <span className="text-xs font-bold uppercase text-[#B1742F]">Initiation & Visionaries</span>
                        <h4 className="text-lg font-bold text-gray-800">Established in 2013</h4>
                        <p className="text-sm text-gray-600">
                          Initiated by <strong className="text-gray-800">Owek. Kyewalabye Male David</strong> and his wife <strong className="text-gray-800">Rosalind Tanayita Kyewalabye (RIP)</strong> to cater for both academic and talent development.
                        </p>
                      </div>
                    </div>

                    {/* Motto Story Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF7E6] to-[#FFF1D8] p-6 rounded-none border-2 border-yellow-300">
                      {/* Ssosolye bird watermark */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
                        <img
                          src="/Ssosolye or Red-chested Cuckoo (Cuculus solitarius).png"
                          alt=""
                          className="h-52 w-auto object-contain opacity-60"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-[#800E13] mb-3 flex items-center gap-2">
                        <LuCompass className="w-5 h-5 text-yellow-500" />
                        Our Motto: “Ssosolye Bwatafa”
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        Literally showing that we can achieve success through <strong className="text-[#800E13]">Perseverance</strong>.
                      </p>
                      <p className="text-gray-600 text-xs italic leading-relaxed pr-32">
                        &ldquo;Ssosolye&rdquo; is a Kiganda name for a bird (Red-chested Cuckoo (Cuculus solitarius)) that eats ripe bananas but continues pecking unripe ones until it falls on a ripe one after a while (the Red Chested Cuckoo). Through its perseverance, it gets the ripe banana. The message is that through toiling we can achieve success.
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Location & Contact Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-3">
                          <LuMapPin className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Location</strong>
                            <span className="text-gray-600">Kikajjo, off Katale Road, Seguku area, Wakiso District, Uganda.</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuPhone className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Contacts</strong>
                            <span className="text-gray-600 block">Landline: +256 200 949 291</span>
                            <span className="text-gray-600 block">Mobile: +256 708 800 001 / 2 / 3 / 4</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuMail className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Email & Address</strong>
                            <span className="text-gray-600 block">Email: gombejuniorschool@gmail.com</span>
                            <span className="text-gray-600 block">Postal: P.O. Box 71523 Kampala</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuBuilding className="w-5 h-5 text-purple-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">Ownership</strong>
                            <span className="text-gray-600">Solely owned by Owek. Kyewalabye Male David, retired Minister in the Buganda Government.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vision & Mission */}
                    <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                      <div className="bg-red-50/50 p-6 rounded-none border border-red-100">
                        <h4 className="text-lg font-bold text-[#800E13] mb-2">Our Vision</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &ldquo;At the helm of producing Competent, Responsible, Self-Reliant and Flexible Citizens.&rdquo;
                        </p>
                      </div>
                      <div className="bg-yellow-50/30 p-6 rounded-none border border-yellow-100">
                        <h4 className="text-lg font-bold text-[#B1742F] mb-2">Our Mission</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &ldquo;To provide Quality Holistic Education that Fosters Creativity, Critical thinking and Collaboration to Produce Competent Global Citizens.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Core Values */}
                    <div id="core-values" className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Core Values</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {coreValues.map((value, i) => (
                          <div key={i} className="p-4 bg-white rounded-none border border-gray-100 shadow-sm hover:border-yellow-300 transition-colors">
                            <span className="text-[#800E13] font-bold text-lg block mb-1">0{i + 1}. {value.name}</span>
                            <span className="text-xs text-gray-500">{value.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ── TAB 2: ACADEMICS & ICT ── */}
                {activeTab === 'academics' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Academics & ICT</h3>
                      <p className="text-gray-500">Combining national curriculum excellence with modern digital instruction.</p>
                    </div>

                    <div className="bg-[#FFF9F5] p-6 rounded-none border border-[#F5E6DA] space-y-4">
                      <h4 className="text-xl font-bold text-gray-800">Curriculum Offered</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Gombe Junior School is a National School applying international practices. We offer a <strong className="text-gray-800">UNEB Curriculum</strong> that centers on the 4 major subjects for PLE, while incorporating language instruction in Swahili, French, and Luganda.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We cherish the competence-based curriculum as guided by the Uganda National Examinations Board (UNEB) and the National Curriculum Development Centre (NCDC).
                      </p>
                    </div>

                    {/* Interactive lower school & ICT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-none border border-gray-100 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-[#4FB8FF]">
                          <LuActivity className="w-5 h-5" />
                          <h5 className="font-bold text-gray-800">ICT Integration</h5>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Training and instruction at school is driven by ICT integration. Learners utilize technology in research work and daily activities, boosting early digital literacy.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-none border border-gray-100 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-[#5FD068]">
                          <LuCheck className="w-5 h-5" />
                          <h5 className="font-bold text-gray-800">Interactive Lower School</h5>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Our lower school utilizes interactive smart boards. Other than the 4 core subjects, lower school strands include Luganda, RE, Art, P.E, Reading, and Writing.
                        </p>
                      </div>
                    </div>

                    {/* Workbooks info */}
                    <div className="bg-blue-50/50 p-6 rounded-none border border-blue-100 space-y-2">
                      <h5 className="font-bold text-blue-900">Custom Workbooks</h5>
                      <p className="text-xs text-blue-800 leading-relaxed">
                        We compile and design custom workbooks focusing on designated learning areas as provided by the Ministry of Education and Sports. These workbooks are compiled by our competent staff for the 4 core subjects and supported by other supplementary books for research and revision.
                      </p>
                    </div>

                    {/* Performance & Rank */}
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <LuAward className="w-5 h-5 text-yellow-500" />
                        National Rankings & PLE Performance
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-yellow-50/50 p-4 rounded-none border border-yellow-100 text-center">
                          <span className="text-3xl font-extrabold text-[#B1742F] block">90%+</span>
                          <span className="text-xs text-gray-600">Division One rate across 12 years of PLE</span>
                        </div>

                        <div className="bg-red-50/50 p-4 rounded-none border border-red-100 text-center">
                          <span className="text-3xl font-extrabold text-[#800E13] block">100%</span>
                          <span className="text-xs text-gray-600">Division 1 in 2017 & 2022 (Ranked #3 & #5 Nationwide)</span>
                        </div>

                        <div className="bg-green-50/50 p-4 rounded-none border border-green-100 text-center">
                          <span className="text-3xl font-extrabold text-green-700 block">#14</span>
                          <span className="text-xs text-gray-600">Nationwide in National Math Contest (Top 10-Yr average)</span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                        Gombe Junior School has established itself as an academic giant. In 2018 and 2019, our students took the absolute lead with the best math performance nationwide, recognized by the National Mathematics Society.
                      </p>
                    </div>

                  </div>
                )}

                {/* ── TAB 3: FACILITIES & SECURITY ── */}
                {activeTab === 'facilities' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">School Facilities</h3>
                      <p className="text-gray-500">A child-friendly environment equipped with facilities that support learning and well-being.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: '🏫', label: 'Spacious, Safe & Secure Classrooms', desc: 'Purposefully designed learning spaces that keep children safe and comfortable.' },
                        { icon: '🛝', label: 'Indoor & Outdoor Play Areas', desc: 'Dedicated spaces for active play and physical development.' },
                        { icon: '🏊', label: 'Water Play & Swimming Facilities', desc: 'Supervised water play and swimming for fun and development.' },
                        { icon: '🛏️', label: 'Sleeping Room for Full Day Learners', desc: 'Comfortable rest facilities for children enrolled in the full day program.' },
                        { icon: '🍽️', label: 'Warm Nutritious Meals On-Site', desc: 'Freshly prepared meals by a qualified school chef every day.' },
                        { icon: '🩺', label: 'Resident Nurse', desc: 'On-site nurse providing first aid and health support at all times.' },
                        { icon: '🚌', label: 'School Transport Services', desc: 'Safe transport covering the school and surrounding areas.' },
                        { icon: '💻', label: 'Smart Interactive Boards', desc: 'ICT-integrated teaching using modern smart interactive boards in classrooms.' },
                        { icon: '📚', label: 'Learning Materials Provided', desc: 'All essential learning materials are provided by the school.' },
                        { icon: '🚿', label: 'Clean Sanitation & Secure Compound', desc: 'Well-maintained sanitation facilities within a fully secured school compound.' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-[#FFF9F5] rounded-none border border-[#F5E6DA] hover:border-[#C9A227] transition-colors">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                      <div className="bg-red-50/50 p-6 rounded-none border border-red-100 flex items-start gap-4">
                        <LuShield className="w-8 h-8 text-[#800E13] flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-bold text-[#800E13] mb-1">Safe & Secure Environment</h5>
                          <p className="text-xs text-gray-600 leading-relaxed">The school is situated in a quiet, traffic-free environment providing a safe and conducive atmosphere for young children's learning and development.</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50/30 p-6 rounded-none border border-yellow-100 flex items-start gap-4">
                        <LuCheck className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-bold text-[#B1742F] mb-1">Health & Wellness Support</h5>
                          <p className="text-xs text-gray-600 leading-relaxed">A resident nurse is always on hand for first aid and health support, ensuring every child's well-being throughout the school day.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ── TAB 4: UNIQUE PROGRAMS ── */}
                {activeTab === 'activities' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Unique Programs</h3>
                      <p className="text-gray-500">Scooby Doo International School distinguishes itself through a variety of child-centered programs.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: '🎮', label: 'Play-Based Learning', desc: 'Following the NCDC and EYFS curriculum for holistic early childhood development.' },
                        { icon: '📖', label: 'Jolly Phonics & Early Literacy', desc: 'Strong emphasis on Jolly Phonics, early reading, and writing skills.' },
                        { icon: '🎭', label: 'Arts & Performance', desc: 'Ballet, dance & drama, music, soccer, chess, piano, Kids for Peace, and creative art.' },
                        { icon: '🏊', label: 'Swimming & Water Play', desc: 'Regular supervised swimming and water play activities for all learners.' },
                        { icon: '🤝', label: 'Life Skills Development', desc: 'Communication, leadership, and teamwork skills woven into daily learning.' },
                        { icon: '🌟', label: 'Talent Identification & Nurturing', desc: 'Every child\'s unique talent is identified early and nurtured with care.' },
                        { icon: '👨‍👩‍👧', label: 'Parent Participation', desc: 'Active parent involvement through presentations, meetings, and school events.' },
                        { icon: '🙏', label: 'Character Education', desc: 'Values of respect, integrity, teamwork, excellence and God-fearing embedded in school life.' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-[#FFF9F5] rounded-none border border-[#F5E6DA] hover:border-[#C9A227] transition-colors">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-6 rounded-none border border-gray-100 shadow-sm">
                      <h5 className="font-bold text-[#800E13] mb-3 pb-2 border-b border-gray-100">Student Clubs</h5>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                        {clubs.map((club, idx) => (
                          <Link key={idx} to={`/gallery?category=${club.category}`}
                            className="flex items-center gap-1.5 text-gray-600 hover:text-[#800E13] transition-colors group">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:bg-[#800E13] transition-colors flex-shrink-0" />
                            {club.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 italic">Clubs are chosen by students according to their personal interests and with guidance from parents.</p>
                  </div>
                )}

                 {/* ── TAB 5: COMMUNITY & HEALTH ── */}
                {activeTab === 'community' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Community, Staff &amp; Health</h3>
                    </div>

                    {/* Health Services */}
                    <div className="bg-red-50/50 p-6 rounded-none border border-red-100 flex items-start gap-4 border-t border-gray-100 pt-6">
                      <LuActivity className="w-8 h-8 text-[#800E13] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#800E13] mb-1">Health Services</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Supported by a dedicated team of on-campus nurses. Complex cases are referred to our sister hospital located on Balintuma Road in Mengo, known as <strong className="text-gray-800">Gombe Medical Services</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Community Engagement */}
                    <div className="border-t border-gray-100 pt-6 space-y-4">
                      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <LuHeart className="w-5 h-5 text-red-500" />
                        Community Engagement & CSR
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We actively join staff, students, and parents to support the less privileged at <strong className="text-gray-800">TORUWU Home of the Disabilities</strong> in Kikajjo (approx. 1 km from the school), as well as <strong className="text-gray-800">Sanyu Babies Home</strong> for orphans. Donations include milk, maize flour, rice, sugar, soap, clothes, cooking oil, and diapers.
                      </p>
                    </div>

                    {/* International Partners & Parents */}
                    <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h5 className="font-bold text-[#B1742F]">International Partners</h5>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          We exchange visits annually with our prominent international partner, <strong className="text-gray-800">SAI International School</strong> in India.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-bold text-[#B1742F]">Parental Involvement</h5>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Parents actively support GJS through the <strong className="text-gray-800">Parents Class Committee (PCC)</strong> to promote student and staff welfare. We hold Academic Days for teacher-parent interface, and Parents General Meetings for regular feedback.
                        </p>
                      </div>
                    </div>

                    {/* Religious functions */}
                    <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-3">
                      <h5 className="font-bold text-[#800E13] text-base">A Multi-Religious School</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Muslims', 'Catholics', 'Anglicans', 'Pentecostals', 'Seventh-day Adventists'].map((faith) => (
                          <span key={faith} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">{faith}</span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        At Gombe Junior School, we are committed to providing an inclusive learning environment where every child is respected, valued, and supported in both their academic and spiritual journey. We proudly welcome learners from diverse faith backgrounds, including Muslims, Catholics, Anglicans, Pentecostals, and Seventh-day Adventists.
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We recognize the importance of nurturing each child's faith by providing opportunities for appropriate religious instruction, worship, and spiritual guidance in accordance with their beliefs. Our learners are encouraged to embrace values such as integrity, respect, compassion, discipline, and service, while appreciating the diversity of others.
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        By fostering a culture of mutual respect, tolerance, and unity, Gombe Junior School prepares children to become academically successful, morally upright, and socially responsible citizens who can thrive in a diverse and interconnected world.
                      </p>
                    </div>

                  </div>
                )}

                {/* ── TAB 6: SISTER SCHOOLS ── */}
                {activeTab === 'sister-schools' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Sister Schools</h3>
                      <p className="text-gray-500">Other institutions operating under the Gombe Education Service (GES).</p>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gombe Junior School is sister to several other academic institutions under the direct stewardship of <strong className="text-gray-800">Owek. Kyewalabye Male David</strong>:
                    </p>

                    <div className="space-y-3">
                      {sisterSchools.map((school, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 hover:bg-[#FFF9F5] rounded-none border border-gray-100 flex items-center justify-between gap-4 transition-colors">
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-gray-400 block">Institution 0{idx + 1}</span>
                            <span className="font-bold text-gray-800 text-sm sm:text-base block">{school.name}</span>
                            <a
                              href={school.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#800E13] hover:underline truncate block mt-0.5"
                            >
                              {school.url}
                            </a>
                          </div>
                          <span className="text-xs bg-[#800E13]/10 text-[#800E13] font-semibold px-3 py-1.5 rounded-full flex-shrink-0 text-right">
                            {school.loc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Conclusion / Footer Statement */}
        <section className="mt-12 bg-white border border-[#F0E4D8] rounded-none p-8 text-center shadow-lg">
          <p className="text-[#800E13] font-bold text-xl mb-3">Why Choose Us?</p>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choosing the right preschool is one of the most important decisions you will make for your child. At Scooby Doo International School Uganda, we provide an exceptional learning experience built on <strong className="text-gray-800">care, excellence and holistic child development</strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default SchoolProfile;
