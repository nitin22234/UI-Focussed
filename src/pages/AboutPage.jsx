import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const AboutPage = () => {
    const team = [
        {
            name: 'Priyanka Sharma',
            role: 'CEO & Founder',
            bio: 'Former strategy lead at a top Indian tech firm. Passionate about bringing world-class productivity tools to Indian teams.',
            image: '/images/avatar_1.png'
        },
        {
            name: 'Vikram Malhotra',
            role: 'Head of Product',
            bio: 'Design obsessive and workflow expert. Focused on creating seamless digital experiences for high-growth startups.',
            image: '/images/avatar_2.png'
        },
        {
            name: 'Arjun Gupta',
            role: 'Engineering Lead',
            bio: 'Architect of FocusFlow\'s high-performance engine. Loves solving complex scalability challenges for global users.',
            image: '/images/avatar_3.png'
        }
    ];

    return (
        <div className="overflow-hidden">
            <section className="relative py-24 lg:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-slate-950">Our Mission</h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            We believe that productivity shouldn't be a struggle. FocusFlow was born from a simple observation:
                            most toolsets are too complex for their own good. We're on a mission to bring simplicity
                            back to the workspace.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px]" />
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-slate-950 mb-4">Meet the Team</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">The humans behind the tools that help you do your best work.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            className="group text-center space-y-6 p-8 rounded-3xl hover:bg-slate-50 transition-colors duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="relative w-48 h-48 mx-auto">
                                <div className="absolute inset-0 bg-primary-200 rounded-full scale-105 group-hover:scale-110 transition-transform duration-500 opacity-20" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full shadow-lg relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute bottom-2 right-2 z-20 flex space-x-2">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <Linkedin className="w-4 h-4 text-primary-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-slate-950 text-2xl">{member.name}</h3>
                                <p className="font-bold text-primary-600 uppercase text-xs tracking-widest">{member.role}</p>
                                <p className="text-slate-500 leading-relaxed font-medium">{member.bio}</p>
                            </div>
                            <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Mail className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary-600" />
                                <Github className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary-600" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-600 to-indigo-700 p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-white mb-8 text-4xl lg:text-5xl">Join our journey</h2>
                        <p className="text-primary-100 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
                            We're always looking for talented people who care about building the next generation of productive workspaces.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-colors shadow-xl flex items-center mx-auto"
                        >
                            View Open Positions
                            <ExternalLink className="ml-2 w-5 h-5" />
                        </motion.button>
                    </div>
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
