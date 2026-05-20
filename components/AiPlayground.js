'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Cpu,
  Database,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Layers,
  FileText,
  CheckCircle2,
  ArrowRight,
  Copy,
  Check,
  Download,
  Sparkles,
  RefreshCw,
  Hourglass,
  Flame,
  Grid,
  Users
} from 'lucide-react';

// Map icon strings returned from API to Lucide components
const iconMap = {
  mail: Mail,
  brain: Brain,
  database: Database,
  message: MessageSquare,
  search: Search,
  settings: Settings,
  grid: Grid,
  file: FileText,
  users: Users,
  'check-circle': CheckCircle2
};

const AiPlayground = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Terminal Simulator States
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'terminal'
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = (res) => {
    const activeRes = res || result;
    if (!activeRes) return;
    
    setIsSimulating(true);
    setTerminalLogs([]);
    
    const time = () => new Date().toLocaleTimeString();
    const steps = [
      `alex@agentic-system:~$ python ${activeRes.title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.py`,
      `[${time()}] [INFO] Starting Alex's Automated pipeline: ${activeRes.title}...`,
      `[${time()}] [INFO] Loaded credentials from secure environment config successfully.`,
      `[${time()}] [INFO] Recommended APIs & Libraries activated: ${activeRes.stack?.join(', ') || 'Standard packages'}`,
      `[${time()}] [INFO] Initiating dynamic execution steps:`,
      ...(activeRes.steps ? activeRes.steps.map((s, idx) => `[${time()}]   ➔ Node #${idx + 1} (${s.name}): ${s.desc}`) : []),
      `[${time()}] [INFO] Validating workflow output metrics...`,
      `[${time()}] [SUCCESS] Script finished executing cleanly with exit code 0.`,
      `[${time()}] [SUCCESS] ROI Analytics Synchronized: Saved ~${activeRes.hoursSaved} hours of manual work this week!`,
      `alex@agentic-system:~$ █`
    ];

    let currentStep = 0;
    setTerminalLogs([steps[0]]);

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setTerminalLogs(prev => [...prev, steps[currentStep]]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  // Reset states when result changes
  useEffect(() => {
    if (result) {
      setActiveTab('code');
      setTerminalLogs([]);
      setIsSimulating(false);
    }
  }, [result]);

  const presets = [
    {
      title: 'Ticket Router',
      desc: 'Route urgent support emails to Slack',
      prompt: 'Auto-summarize incoming customer emails, categorize sentiment, and alert Slack on urgent tickets.'
    },
    {
      title: 'Price Tracker',
      desc: 'Scrape competitor prices to Google Sheets',
      prompt: 'Scrape daily competitor prices, store them in a Google Sheet, and send a PDF digest weekly.'
    },
    {
      title: 'LinkedIn Lead Gen',
      desc: 'Enrich prospects and draft warm emails',
      prompt: 'LinkedIn lead generation agent that finds target prospects, drafts personalized outreach, and logs them in CRM.'
    }
  ];

  const loadingMessages = [
    'Consulting AI Automation Architect...',
    'Synthesizing Python Pipelines...',
    'Formulating Workflow Diagrams...',
    'Reviewing Clean Code Guidelines...',
    'Finalizing Scoped Package...'
  ];

  // Rotate loading messages during API calls
  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
      }, 1500);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleScope = async (selectedPrompt) => {
    const activePrompt = selectedPrompt || prompt;
    if (!activePrompt.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/scoper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: activePrompt })
      });

      if (!response.ok) {
        throw new Error('API routing failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      // Fail gracefully with a custom model if necessary, but route handles it internally
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (!result?.code) return;
    navigator.clipboard.writeText(result.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadCode = () => {
    if (!result?.code) return;
    const blob = new Blob([result.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    // Format filename to snake_case
    const filename = (result.title || 'automation_agent')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/(^_+|_+$)/g, '') + '.py';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ai-playground" className="relative py-24 md:py-32 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
      {/* Dynamic styling for background details */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full mb-4 shadow-sm select-none">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Interactive Agent Scoper
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            Scope Your Business AI <br className="hidden sm:inline" /> Automation in Real-Time.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Describe a repetitive workflow or agentic pipeline below. Our resident AI System Architect will instantly diagram your flow, select the optimal Python stack, and draft a production-ready script.
          </p>
        </div>

        {/* Play Area Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interaction & Presets */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200/60 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Define Your System</h3>
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider font-semibold">Step 1: Input workflow requirement</p>
              
              {/* Input Area */}
              <div className="relative mb-6">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Every hour, check our sales database for new transactions. If a deal is over $1,000, draft a personalized congratulations email using Gemini, write to Google Sheet, and ping the sales channel on Slack."
                  className="w-full min-h-[140px] p-4 text-sm bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:bg-white text-gray-900 rounded-2xl placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none leading-relaxed"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleScope()}
                disabled={isLoading || !prompt.trim()}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-emerald-600/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-sm tracking-wide"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    <span>Analyzing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Cpu className="w-4.5 h-4.5" />
                    <span>Generate Automation Blueprint</span>
                  </>
                )}
              </button>
            </div>

            {/* Presets Cards */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Or Select A Preset Blueprint</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {presets.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setPrompt(p.prompt);
                      handleScope(p.prompt);
                    }}
                    disabled={isLoading}
                    className="w-full text-left bg-white border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50/20 p-4 rounded-2xl shadow-sm hover:shadow transition-all duration-300 group flex justify-between items-center cursor-pointer"
                  >
                    <div className="pr-4">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                        {p.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-light mt-1">
                        {p.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Blueprint Output */}
          <div className="lg:col-span-7 h-full min-h-[460px]">
            <AnimatePresence mode="wait">
              {/* State 1: Awaiting Input */}
              {!isLoading && !result && (
                <motion.div
                  key="awaiting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="h-full min-h-[460px] bg-white rounded-3xl border border-gray-200/60 p-8 flex flex-col items-center justify-center text-center shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Awaiting System Specifications</h3>
                  <p className="text-sm text-gray-500 font-light max-w-sm leading-relaxed">
                    Submit a workflow description on the left or select a template to visualize your dynamic agentic architecture.
                  </p>
                </motion.div>
              )}

              {/* State 2: Processing AI Scoper */}
              {isLoading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-full min-h-[460px] bg-white rounded-3xl border border-gray-200/60 p-8 flex flex-col items-center justify-center text-center shadow-lg"
                >
                  <div className="relative w-20 h-20 mb-8">
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 animate-ping" />
                    <div className="absolute inset-2 rounded-full border-4 border-emerald-500/30 animate-pulse" />
                    <div className="absolute inset-4 rounded-full bg-emerald-50 flex items-center justify-center shadow-md">
                      <Cpu className="w-8 h-8 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Synthesizing Pipeline</h3>
                  <p className="text-sm text-emerald-600 font-semibold mb-1 tracking-wider uppercase text-xs">
                    {loadingMessages[loadingStep]}
                  </p>
                  <p className="text-xs text-gray-400 font-light max-w-xs">
                    Leveraging advanced LLM models to draft production-grade python microservices.
                  </p>
                </motion.div>
              )}

              {/* State 3: Displaying Blueprint Results */}
              {!isLoading && result && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Card Main: Metrics & Workflow */}
                  <div className="bg-white rounded-3xl border border-gray-200/60 p-6 sm:p-8 shadow-xl">
                    <div className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 rounded-full">
                          AI ARCHITECT DIAGRAM
                        </span>
                        <h3 className="text-xl font-black text-gray-900 mt-2 tracking-tight">
                          {result.title}
                        </h3>
                      </div>

                      {/* Stack ROI Statistics */}
                      <div className="flex gap-4">
                        <div className="bg-gray-50 border border-gray-150 px-4 py-2 rounded-xl text-center shadow-sm">
                          <span className="text-[9px] font-bold text-gray-400 uppercase block tracking-wider mb-0.5">Efficiency Gain</span>
                          <span className="text-sm font-black text-emerald-600 flex items-center justify-center gap-1">
                            <Hourglass className="w-3.5 h-3.5" />
                            +{result.hoursSaved}h<span className="text-[10px] font-normal text-gray-500">/wk</span>
                          </span>
                        </div>
                        <div className="bg-gray-50 border border-gray-150 px-4 py-2 rounded-xl text-center shadow-sm">
                          <span className="text-[9px] font-bold text-gray-400 uppercase block tracking-wider mb-0.5">Complexity</span>
                          <span className="text-sm font-black text-blue-600 flex items-center justify-center gap-1">
                            <Flame className="w-3.5 h-3.5" />
                            {result.complexity}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Steps Visual Diagram */}
                    <div className="space-y-4 relative">
                      {/* Vertical line connecting steps */}
                      <div className="absolute top-6 bottom-6 left-6.5 w-[2px] bg-gray-100 -z-10" />

                      {result.steps?.map((step, idx) => {
                        const StepIcon = iconMap[step.icon.toLowerCase()] || Brain;
                        return (
                          <div key={idx} className="flex gap-4 group items-start">
                            <div className="w-13 h-13 rounded-2xl bg-gray-50 border border-gray-200 group-hover:border-emerald-400 group-hover:bg-emerald-50/20 text-gray-600 group-hover:text-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0 transition-all duration-300">
                              <StepIcon className="w-6 h-6" />
                            </div>
                            <div className="pt-1.5">
                              <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                                {step.name}
                              </h4>
                              <p className="text-xs text-gray-500 font-light leading-relaxed mt-0.5">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-3">RECOMMENDED INTEGRATIONS</span>
                      <div className="flex flex-wrap gap-2">
                        {result.stack?.map((tech, idx) => (
                          <span key={idx} className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Code: Technical Output Script & Terminal Simulator */}
                  <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-800">
                    <div className="bg-slate-950 px-6 py-4 flex flex-wrap justify-between items-center border-b border-slate-800 gap-4">
                      
                      {/* Tabs */}
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                          <span className="w-3 h-3 rounded-full bg-amber-500 block" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                        </div>
                        
                        <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                          <button
                            onClick={() => setActiveTab('code')}
                            className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center ${
                              activeTab === 'code'
                                ? 'bg-slate-850 text-emerald-400 border border-slate-800/60'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <FileText className="w-3.5 h-3.5 mr-1.5" />
                            pipeline.py
                          </button>
                          <button
                            onClick={() => {
                              setActiveTab('terminal');
                              if (terminalLogs.length === 0) runSimulation();
                            }}
                            className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center ${
                              activeTab === 'terminal'
                                ? 'bg-slate-850 text-emerald-400 border border-slate-800/60'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <Cpu className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
                            Live Terminal
                          </button>
                        </div>
                      </div>

                      {/* Actions based on active tab */}
                      {activeTab === 'code' ? (
                        <div className="flex gap-2">
                          <button
                            onClick={handleCopyCode}
                            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                            title="Copy Code"
                          >
                            {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={handleDownloadCode}
                            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                            title="Download Python Script"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            onClick={() => runSimulation()}
                            disabled={isSimulating}
                            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-800 text-white font-bold rounded-lg text-xs shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                            <span>{isSimulating ? 'Running...' : 'Run Simulation'}</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Content Box */}
                    <div className="p-6 overflow-x-auto min-h-[280px] max-h-[360px] bg-slate-900 font-mono text-xs text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-900">
                      {activeTab === 'code' ? (
                        <pre><code>{result.code}</code></pre>
                      ) : (
                        <div className="space-y-1.5 text-slate-300">
                          {terminalLogs.length === 0 && (
                            <div className="h-[200px] flex flex-col items-center justify-center text-center text-slate-500 font-sans">
                              <Cpu className="w-10 h-10 mb-3 text-slate-700" />
                              <p className="text-sm font-semibold">Ready for Execution</p>
                              <p className="text-xs text-slate-600 max-w-xs mt-1">
                                Click "Run Simulation" above to execute the agentic workflow pipeline.
                              </p>
                            </div>
                          )}
                          {terminalLogs.map((log, index) => {
                            const isCommand = log.startsWith('alex@');
                            const isSuccess = log.includes('[SUCCESS]');
                            const isError = log.includes('[ERROR]');
                            let textColor = 'text-slate-300';
                            if (isCommand) textColor = 'text-emerald-500 font-bold';
                            else if (isSuccess) textColor = 'text-emerald-400 font-medium';
                            else if (isError) textColor = 'text-rose-400 font-medium';

                            return (
                              <div key={index} className={`whitespace-pre-wrap ${textColor}`}>
                                {log}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Premium Action CTA Panel */}
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left">
                      <h4 className="text-lg sm:text-xl font-bold tracking-tight">Deploy this agentic automation to production.</h4>
                      <p className="text-xs sm:text-sm text-emerald-100 font-light mt-1 max-w-lg leading-relaxed">
                        Let's connect this draft pipeline to your real databases, security channels, and live applications with rigorous error handling and scalable cloud hosting.
                      </p>
                    </div>

                    <a
                      href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer text-sm"
                    >
                      <span className="w-4.5 h-4.5 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[9px] font-black tracking-tighter leading-none pb-[2px] pr-[0.5px] select-none">
                        up
                      </span>
                      <span>Book Integration on Upwork</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiPlayground;
