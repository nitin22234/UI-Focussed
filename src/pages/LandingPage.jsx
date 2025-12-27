import { motion } from 'framer-motion';
import {
    Layout,
    Zap,
    Settings,
    BarChart3,
    MessageSquare,
    Lock,
    ArrowRight,
    PlayCircle,
    CheckCircle2
} from 'lucide-react';

const LandingPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            title: 'Visual Architecture',
            desc: 'Map out your projects with easy-to-use boards and timelines.',
            icon: Layout,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            title: 'Real-time Sync',
            desc: 'Updates happen instantly across all devices. No refresh needed.',
            icon: Zap,
            color: 'text-amber-600',
            bg: 'bg-amber-50'
        },
        {
            title: 'Custom Workflows',
            desc: 'Adapt the tool to your process, not the other way around.',
            icon: Settings,
            color: 'text-purple-600',
            bg: 'bg-purple-50'
        },
        {
            title: 'Detailed Analytics',
            desc: 'Track progress and identify bottlenecks before they happen.',
            icon: BarChart3,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            title: 'Team Chat',
            desc: 'Talk to your team right where the work happens.',
            icon: MessageSquare,
            color: 'text-rose-600',
            bg: 'bg-rose-50'
        },
        {
            title: 'Security First',
            desc: 'Your data is encrypted and backed up 24/7.',
            icon: Lock,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50'
        }
    ];

    return (
        <div className="overflow-hidden">
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                        <motion.div
                            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                            initial="initial"
                            animate="animate"
                            variants={fadeIn}
                        >
                            <h1 className="text-slate-950">
                                <span className="block">Manage your work</span>
                                <span className="block text-primary-600">without the chaos.</span>
                            </h1>
                            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                                FocusFlow helps teams organize, track, and complete projects in one shared workspace.
                                Stop jumping between tabs and start finishing what matters.
                            </p>
                            <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary px-8 py-4 text-lg font-bold shadow-lg shadow-primary-200 w-full sm:w-auto"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-secondary px-8 py-4 text-lg font-bold w-full sm:w-auto"
                                >
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </motion.button>
                            </div>
                            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500 font-medium">
                                <span className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                                    Free trial
                                </span>
                                <span className="flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                                    No credit card
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-16 lg:mt-0 lg:col-span-6 relative"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative mx-auto w-full lg:max-w-none">
                                <div className="absolute -inset-4 bg-primary-200/30 rounded-3xl blur-2xl animate-pulse" />
                                <img
                                    className="relative w-full rounded-2xl shadow-premium border border-white/20 animate-float"
                                    src="/images/hero_v2.png"
                                    alt="FocusFlow Dashboard"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">
                        Trusted by industry leaders
                    </p>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-2xl font-black text-slate-400">TECH.CO</div>
                        <div className="text-2xl font-black text-slate-400">STARTUP</div>
                        <div className="text-2xl font-black text-slate-400">GLOBAL</div>
                        <div className="text-2xl font-black text-slate-400">PULSE</div>
                        <div className="text-2xl font-black text-slate-400">CREATIVE</div>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-slate-950"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Everything you need to ship faster
                    </motion.h2>
                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-xl text-slate-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A single tool to replace your sticky notes, spreadsheets, and messy email chains.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="group bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
                            <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 font-bold group-hover:scale-110 transition-transform`}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-slate-950 mb-4 relative z-10">{feature.title}</h3>
                            <p className="text-slate-600 relative z-10 leading-relaxed text-lg">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-7xl mx-auto bg-slate-950 rounded-[3rem] py-20 px-8 text-center text-white overflow-hidden relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl">Ready to transform your workflow?</h2>
                        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join 10,000+ teams already using FocusFlow to build the future of project management.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-slate-950 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors shadow-2xl"
                        >
                            Start Your Free Trial
                        </motion.button>
                        <p className="mt-8 text-slate-500 font-medium">No credit card required • 14-day free trial</p>
                    </div>

                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-600 rounded-full opacity-20 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-900 rounded-full opacity-30 blur-[100px]" />
                </motion.div>
            </section>
        </div>
    );
};

export default LandingPage;
