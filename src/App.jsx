import React, { useState } from 'react';
import { 
  TrendingUp, 
  Brain, 
  Search, 
  Zap, 
  Activity, 
  Link2, 
  MessageSquare, 
  ChevronRight,
  Shield,
  Microscope,
  Network
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { researchData } from './data';
import './index.css';

const StatCard = ({ icon: Icon, title, value, trend, color }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="glass p-6 glass-hover"
  >
    <div className="flex items-start justify-between">
      <div className={`p-3 rounded-xl bg-${color}/10`} style={{ backgroundColor: `${color}22` }}>
        <Icon size={24} color={color} />
      </div>
      <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
    <h3 className="text-slate-400 mt-4 text-sm uppercase tracking-wider font-bold">{title}</h3>
    <p className="text-3xl font-bold mt-1">{value}</p>
  </motion.div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold gradient-text">{title}</h2>
    <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const chartData = [
    { name: '2020', ai: 400, quantum: 240, bio: 200 },
    { name: '2021', ai: 600, quantum: 300, bio: 280 },
    { name: '2022', ai: 900, quantum: 500, bio: 450 },
    { name: '2023', ai: 1400, quantum: 750, bio: 600 },
    { name: '2024', ai: 2100, quantum: 1100, bio: 850 },
  ];

  return (
    <div className="min-h-screen relative pb-20">
      {/* Background Decor */}
      <div className="bg-glow">
        <div className="glow-orb" style={{ width: '600px', height: '600px', top: '-10%', left: '-5%', backgroundColor: '#00f2ff' }}></div>
        <div className="glow-orb" style={{ width: '500px', height: '500px', bottom: '-5%', right: '-5%', backgroundColor: '#8b5cf6' }}></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-x-0 border-t-0 border-b border-white/5 px-8 py-4 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
              <Brain className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter">NEURAL<span className="text-cyan-400">IRIS</span></span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search publications, trends, or knowledge gaps..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            {['overview', 'clusters', 'gaps', 'directions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={Activity} title="Analyzed Papers" value="12,482" trend={12.5} color="#00f2ff" />
                <StatCard icon={TrendingUp} title="Active Trends" value="84" trend={8.2} color="#8b5cf6" />
                <StatCard icon={Zap} title="Knowledge Gaps" value="18" trend={-4.1} color="#f59e0b" />
                <StatCard icon={Network} title="Growth Velocity" value="3.4x" trend={22.9} color="#10b981" />
              </div>

              {/* Chart Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass p-8">
                  <SectionHeader title="Research Growth Analysis" subtitle="Publication volume trends across primary computational domains" />
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%" minHeight={350}>
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickMargin={12} />
                        <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickMargin={12} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#141416', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="ai" stroke="#00f2ff" fillOpacity={1} fill="url(#colorAi)" strokeWidth={3} />
                        <Area type="monotone" dataKey="quantum" stroke="#8b5cf6" fillOpacity={0} strokeWidth={3} strokeDasharray="5 5" />
                        <Area type="monotone" dataKey="bio" stroke="#10b981" fillOpacity={0} strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                </div>

                <div className="glass p-8 flex flex-col">
                  <SectionHeader title="Top Emergent Topics" subtitle="Highest semantic velocity" />
                  <div className="space-y-6 flex-1">
                    {researchData.trends.map((trend, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{trend.name}</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${trend.growth > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                              {trend.growth}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.abs(trend.growth)}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className={`h-full rounded-full ${trend.growth > 0 ? 'bg-gradient-to-r from-cyan-500 to-cyan-300' : 'bg-rose-500'}`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button className="mt-8 py-3 w-full rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold flex items-center justify-center gap-2 text-slate-400 hover:text-white hover:border-cyan-500/30">
                    View Full Trend Map <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Network and Influential Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass p-8">
                   <SectionHeader title="Influence Flow" subtitle="Cross-domain citation density and structural impact" />
                   <div className="h-[300px] w-full flex items-center justify-center relative bg-white/[0.02] rounded-2xl border border-white/5">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                         <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      </div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Mock Network Visualization */}
                        <div className="relative">
                           <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md">
                              <Brain className="text-cyan-400" size={32} />
                           </motion.div>
                           {[0, 72, 144, 216, 288].map((angle, i) => (
                             <motion.div 
                               key={i}
                               initial={{ opacity: 0, scale: 0 }}
                               animate={{ opacity: 1, scale: 1 }}
                               transition={{ delay: 1 + i * 0.2 }}
                               style={{ 
                                 position: 'absolute', 
                                 top: '50%', 
                                 left: '50%', 
                                 transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)` 
                               }}
                               className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 cursor-pointer transition-all group/node shadow-lg shadow-black/50"
                             >
                               <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/node:scale-150 transition-transform"></div>
                             </motion.div>
                           ))}
                           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] -z-10 overflow-visible">
                              {[0, 72, 144, 216, 288].map((angle, i) => (
                                <line 
                                  key={i} 
                                  x1="100" y1="100" 
                                  x2={100 + 80 * Math.sin(angle * Math.PI / 180)} 
                                  y2={100 - 80 * Math.cos(angle * Math.PI / 180)} 
                                  stroke="rgba(0, 242, 255, 0.4)" 
                                  strokeWidth="1.5" 
                                  strokeDasharray="4 4"
                                />
                              ))}
                           </svg>

                        </div>
                      </div>
                   </div>
                </div>
                <div className="glass p-8">
                  <SectionHeader title="Top Papers" subtitle="Foundational research components" />
                   <div className="space-y-4">
                      {researchData.papers.map((paper, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer group">
                           <div className="flex justify-between items-center">
                              <h4 className="text-sm font-bold truncate pr-4 group-hover:text-cyan-400 transition-colors">{paper.title}</h4>
                              <span className="text-[10px] font-bold text-cyan-500/70 shrink-0">{paper.citations} Citations</span>
                           </div>
                           <p className="text-xs text-slate-500 mt-1 line-clamp-1">{paper.abstract}</p>
                        </div>
                      ))}
                   </div>
                   <button className="mt-6 text-sm text-center w-full text-slate-500 hover:text-cyan-400 font-medium transition-colors">
                     Explore full citation network
                   </button>
                </div>
              </div>

            </motion.div>
          )}

          {activeTab === 'clusters' && (
            <motion.div
              key="clusters"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {researchData.clusters.map((cluster, i) => (
                <div key={i} className="glass p-8 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-500">
                      <Search size={28} />
                    </div>
                    <div className="flex gap-2">
                      {cluster.connections.map((c, ci) => (
                        <span key={ci} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 border border-white/5">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{cluster.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{cluster.description}</p>
                  
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Key Publications</span>
                    {cluster.papers.map((paper, pi) => (
                      <div key={pi} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors cursor-pointer">
                        <Link2 size={14} className="text-violet-400" />
                        <span className="text-sm text-slate-300 truncate">{paper}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'gaps' && (
            <motion.div
              key="gaps"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <SectionHeader title="Knowledge Gap Intelligence" subtitle="Under-explored areas with high strategic potential" />
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                     <div className="w-3 h-3 rounded-full bg-cyan-500"></div> Density
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                     <div className="w-3 h-3 rounded-full bg-violet-500"></div> Potential
                   </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {researchData.gaps.map((gap, i) => (
                  <div key={i} className="glass p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-tighter border border-amber-500/20">
                        {gap.potential} POTENTIAL
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 text-[10px] font-bold uppercase tracking-tighter border border-white/5">
                        {gap.density} DENSITY
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{gap.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{gap.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(x => (
                          <div key={x} className="w-8 h-8 rounded-full border-2 border-[#141416] bg-slate-800 flex items-center justify-center">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-900"></div>
                          </div>
                        ))}
                      </div>
                      <button className="text-cyan-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Initiate Research Protocol <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'directions' && (
            <motion.div
              key="directions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <div className="space-y-8">
                   <SectionHeader title="Methodology Roadmap" subtitle="Current limitations and proposed computational shifts" />
                   <div className="glass p-8 border-l-4 border-l-cyan-500">
                     <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Core Limitations</h4>
                     <p className="text-slate-300 leading-relaxed mb-6 font-light">{researchData.methodologyInsights.limitations}</p>
                     <div className="flex flex-wrap gap-2">
                        {researchData.methodologyInsights.common.map((m, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-lg text-xs font-medium border border-white/5 uppercase tracking-wider">{m}</span>
                        ))}
                     </div>
                   </div>
                   <div className="glass p-8 border-l-4 border-l-violet-500">
                     <h4 className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-4">Strategic Recommendation</h4>
                     <p className="text-slate-200 text-lg leading-relaxed italic">"{researchData.methodologyInsights.suggestions}"</p>
                   </div>
                 </div>

                 <div className="space-y-8">
                   <SectionHeader title="Novel Research Vectors" subtitle="Exploratory combinations for breakthrough innovation" />
                   {researchData.suggestedDirections.map((dir, i) => (
                     <div key={i} className="glass p-8 relative overflow-hidden flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
                          <Zap className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{dir.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{dir.idea}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center gap-2 text-slate-400 border-r border-white/10 pr-4">
          <MessageSquare size={18} />
          <span className="text-xs font-medium tracking-wide">AI AGENT ACTIVE</span>
        </div>
        <div className="flex gap-3">
          <button className="p-2 hover:bg-white/5 rounded-lg text-cyan-400 transition-colors"><Shield size={20} /></button>
          <button className="p-2 hover:bg-white/5 rounded-lg text-violet-400 transition-colors"><Microscope size={20} /></button>
          <button className="p-2 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg text-white shadow-lg shadow-cyan-500/20"><TrendingUp size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default App;
