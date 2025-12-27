import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

const PricingPage = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$0',
            features: ['Up to 5 members', 'Unlimited tasks', 'Basic boards', 'Community support'],
            highlight: false,
            desc: 'Perfect for small teams getting started.'
        },
        {
            name: 'Professional',
            price: '$12',
            features: ['Unlimited members', 'Timeline view', 'Advanced automation', 'Priority support', 'Admin controls', 'Custom fields'],
            highlight: true,
            desc: 'Powerful tools for growing businesses.'
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: ['Custom onboarding', 'Unlimited everything', 'SSO & SAML', 'Dedicated manager', 'SLA guarantees', 'Audit logs'],
            highlight: false,
            desc: 'Full-scale solutions for large teams.'
        }
    ];

    return (
        <div className="overflow-hidden bg-slate-50 min-h-screen">
            <section className="relative py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20"
                    >
                        <h1 className="text-slate-950 mb-6 font-black tracking-tight">Simple, Transparent Pricing</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                            Choose the plan that fits your team's size and stage. No hidden fees, no surprises.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col p-10 rounded-[2.5rem] bg-white border-2 transition-all duration-500 relative ${plan.highlight ? 'border-primary-600 shadow-premium' : 'border-slate-100 shadow-sm'}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8 text-left">
                                    <h3 className="text-slate-950 text-2xl mb-2 font-black">{plan.name}</h3>
                                    <p className="text-slate-500 text-sm font-medium">{plan.desc}</p>
                                </div>

                                <div className="flex items-baseline mb-8">
                                    <span className="text-6xl font-black text-slate-950 tracking-tighter">{plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="ml-2 text-slate-500 font-bold">/mo</span>}
                                </div>

                                <ul className="space-y-5 mb-12 flex-grow text-left">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600 font-medium">
                                            <div className="mr-3 p-1 bg-emerald-50 rounded-full">
                                                <Check className="h-4 w-4 text-emerald-600" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-5 rounded-2xl font-black transition-all ${plan.highlight ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 hover:bg-primary-700' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
                                >
                                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 flex items-center justify-center space-x-2 text-slate-500 font-medium">
                        <HelpCircle size={20} />
                        <p>
                            Have questions about our plans? <span className="text-primary-600 font-bold cursor-pointer hover:underline">Contact support team</span>
                        </p>
                    </div>
                </div>

                <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[500px] h-[500px] bg-primary-100 rounded-full blur-[150px] opacity-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[150px] opacity-40 pointer-events-none" />
            </section>
        </div>
    );
};

export default PricingPage;
