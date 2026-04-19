// "use client";

// import { motion } from "framer-motion";

// const services = [
//   { title: "AI Websites", desc: "Build stunning AI-powered websites" },
//   { title: "Automation", desc: "Save time with smart workflows" },
//   { title: "AI Tools", desc: "Custom GPT & AI solutions" },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 px-6 text-center">
//       <h2 className="text-4xl neon-text mb-12">Our Services</h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
//           >
//             <h3 className="text-xl mb-3 neon-text">{service.title}</h3>
//             <p className="text-gray-400">{service.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }