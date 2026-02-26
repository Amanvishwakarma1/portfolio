import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import icons from lucide-react (now that it's installed)
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Shield, 
  Video, 
  Brain, 
  Terminal, 
  ChevronRight,
  Box
} from 'lucide-react';

const ProjectCard = ({ title, desc, tags, icon: Icon, color, delay, githubLink, liveLink }) => {
  // Use the provided icon or fallback to Box
  const IconComponent = Icon || Box;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-[#0a0a0c] p-8 transition-all hover:border-white/20 hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]"
    >
      {/* Visual Accent */}
      <div className={`absolute -right-2 -top-2 h-24 w-24 rounded-full blur-[60px] opacity-10 ${color} group-hover:opacity-30 transition-opacity`} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <IconComponent size={28} className="text-white" />
          </div>
          
          <div className="flex gap-2">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:text-purple-400 transition-all"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-slate-500 hover:text-white transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-cyan-500/30">
      
      {/* Dynamic Background Noise/Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">A</div>
          <span>PORTFOLIO_2026</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-slate-500">
          <span className="hover:text-white cursor-pointer transition">PROJECTS</span>
          <span className="hover:text-white cursor-pointer transition">EXPERIENCE</span>
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white">{time}</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        
        {/* HERO SECTION */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-800">
                INTELLIGENT
              </span> <br />
              SYSTEMS.
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <p className="text-lg text-slate-400 max-w-md border-l-2 border-cyan-500 pl-6">
                Specializing in Computer Vision, Real-time Architecture, and Predictive Analytics. 
                Based in India, building globally.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 group"
              >
                Let's Talk <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-xs font-black tracking-[0.3em] text-slate-500 uppercase flex items-center gap-3">
            <Terminal size={14} className="text-cyan-500" /> Selected Works / 001-003
          </h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ProjectCard 
            title="VisionSafe AI"
            desc="Optimized for industrial fire safety. This custom-trained YOLOv8 model uses a dehazing preprocessing layer to identify safety gear in fog/smoke with high-precision (0.98 mAP)."
            icon={Shield}
            color="bg-orange-600"
            tags={["PyTorch", "OpenCV", "CUDA", "FastAPI"]}
            githubLink="https://github.com/Amanvishwakarma1/object-detection"
            liveLink="https://huggingface.co/spaces/aman9832/object-detection"
            delay={0.1}
          />

          <ProjectCard 
            title="OmniConnect"
            desc="A high-concurrency group meeting platform using Socket.io and WebRTC. Features multi-peer video synchronization, low-latency chat, and real-time screen sharing."
            icon={Video}
            color="bg-blue-600"
            tags={["WebRTC", "Socket.io", "Node.js", "Redis"]}
            githubLink="https://github.com/Amanvishwakarma1/Chat-App"
            liveLink="https://chat-app-4-5ebp.onrender.com"
            delay={0.2}
          />

          <ProjectCard 
            title="Track-U Dashboard"
            desc="An ML-driven financial hub. Uses an LSTM neural network to analyze historical spending and forecast next month's expenses with 92% accuracy across 12 categories."
            icon={Brain}
            color="bg-emerald-600"
            tags={["Scikit-Learn", "TensorFlow", "React Query", "Postgres"]}
            githubLink="https://github.com/Amanvishwakarma1/TRACK-U-"
            liveLink="https://trackurl.netlify.app/"
            delay={0.3}
          />

        </section>

        {/* FOOTER BENTO */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-2 rounded-[3rem] bg-white/5 p-12 flex flex-col justify-between border border-white/5">
              <h2 className="text-4xl font-bold tracking-tighter">Ready to evolve your digital presence?</h2>
              <div className="flex gap-4 mt-8">
                <a href="#" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all">
                  <Mail size={24} />
                </a>
                <a href="#" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all">
                  <Github size={24} />
                </a>
              </div>
           </div>
           <div className="md:col-span-1 rounded-[3rem] bg-gradient-to-br from-cyan-500 to-blue-700 p-12 flex flex-col justify-end text-black font-black italic text-5xl tracking-tighter">
              2026.
           </div>
        </section>

      </main>
    </div>
  );
}

export default App;