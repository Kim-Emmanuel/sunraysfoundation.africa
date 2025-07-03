'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Globe, Heart, Shield, Target } from 'lucide-react';
import MissionAndVision from './MissionAndVision';

const AboutUsSection: React.FC = () => {
  const controls = useAnimation();
  const statsControls = useAnimation();
  const [, setInView] = useState(false);
  const [, setStatsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          statsControls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, staggerChildren: 0.1 },
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsControls]);

  const locations = [
    { country: "South Sudan", cities: ["Yambio (Head Office)", "Juba", "Torit", "Magwi"] },
    { country: "Uganda", cities: ["Field Operations"] },
    { country: "Kenya", cities: ["Nairobi (Liaison Office)"] },
    { country: "Lesotho", cities: ["Regional Programs"] }
  ];

  const values = [
    { icon: Heart, title: "Compassion", description: "Driven by love and empathy for vulnerable communities" },
    { icon: Users, title: "Inclusion", description: "Prioritizing marginalized groups and people with disabilities" },
    { icon: Target, title: "Impact", description: "Sustainable community-based solutions for lasting change" }
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Globe className="w-4 h-4" />
            Est. 2019 • Youth-Led Humanitarian Organization
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Sunrays Foundation
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering vulnerable communities through sustainable, community-based solutions across East Africa
          </motion.p>
        </motion.div>

        {/* Hero Image and Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/banner.png"
                alt="Sunrays Foundation community work"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Operating across 4 countries
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Youth-Led Change in <span className="text-primary">East Africa</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sunrays Foundation (SRF) is a youth-led humanitarian non-profit organization established in 2019 by a group of passionate South Sudanese change makers. We support the most vulnerable members of society—children, youth, women, and people with disabilities—through sustainable community-based solutions that build resilience and promote long-term social and economic well-being.

              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We started in South Sudan, where we are still rooted, and have since expanded to East Africa and Lesotho. We are registered and operational in South Sudan, Uganda, Kenya, and Lesotho, implementing programs that prioritize inclusion, empowermen,t and long-term development.
              </p>
            </div>

            {/* Registration Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-green-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Official Registration</h3>
              <p className="text-gray-600">
                Registered with the Relief and Rehabilitation Commission (RRC) of South Sudan
              </p>
              <p className="text-sm text-green-600 font-medium mt-1">Registration No. 3313</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          ref={statsRef}
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={statsControls}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Locations Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Presence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategically positioned across East Africa to maximize our impact and reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{location.country}</h3>
                </div>
                <ul className="space-y-2">
                  {location.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {city}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission and Vision Statement  */}
        <MissionAndVision />
      </div>
    </div>
  );
};

export default AboutUsSection;