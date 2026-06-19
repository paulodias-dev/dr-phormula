import { motion } from "motion/react";
import Header from "./components/organisms/Header";
import HeroSection from "./components/organisms/HeroSection";
import FeaturesGrid from "./components/organisms/FeaturesGrid";
import ServicesGrid from "./components/organisms/ServicesGrid";
import ProcessTimeline from "./components/organisms/ProcessTimeline";
import PrescriptionForm from "./components/organisms/PrescriptionForm";
import TrustPartners from "./components/organisms/TrustPartners";
import Footer from "./components/organisms/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col transition-colors duration-300 antialiased overflow-x-hidden selection:bg-primary-container/20 selection:text-primary">
      {/* Premium Translucent Header */}
      <Header />

      {/* Main page sections with staggered motion fade-in animations */}
      <main className="flex-grow w-full relative">
        
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          id="hero-wrapper"
        >
          <HeroSection />
        </motion.div>

        {/* Features / Value propositions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="features-wrapper"
        >
          <FeaturesGrid />
        </motion.div>

        {/* Speciality Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="services-wrapper"
        >
          <ServicesGrid />
        </motion.div>

        {/* Process Timeline Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="process-wrapper"
        >
          <ProcessTimeline />
        </motion.div>

        {/* Interactive Upload Recipe Organism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="prescription-wrapper"
        >
          <PrescriptionForm />
        </motion.div>

        {/* Trust certificates and Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="trust-wrapper"
        >
          <TrustPartners />
        </motion.div>

      </main>

      {/* Corporate compliant footer */}
      <Footer />
    </div>
  );
}
