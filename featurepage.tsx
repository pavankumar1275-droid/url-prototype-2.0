import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, AlertTriangle, Chrome, Globe, Code, CheckCircle } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { ExtensionFeatures } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FeaturesPage() {
  const [features, setFeatures] = useState<ExtensionFeatures[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<ExtensionFeatures>('extensionfeatures');
      setFeatures(result.items);
    } catch (error) {
      console.error('Failed to load features:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const coreFeatures = [
    {
      icon: Shield,
      title: 'Real-Time Link Interception',
      description: 'Monitors all hyperlink clicks within Gmail and Outlook interfaces, intercepting navigation before it occurs.',
      color: 'neon-teal'
    },
    {
      icon: Zap,
      title: 'Instant Threat Analysis',
      description: 'Integrates with PhishTank API to verify URLs against comprehensive threat intelligence databases in milliseconds.',
      color: 'electric-green'
    },
    {
      icon: AlertTriangle,
      title: 'Dynamic Warning System',
      description: 'Displays clear, actionable warnings for malicious links with options to proceed or cancel navigation.',
      color: 'warning-orange'
    },
    {
      icon: Lock,
      title: 'Secure Architecture',
      description: 'Built on Manifest V3 with content scripts, background service workers, and proper permission handling.',
      color: 'neon-teal'
    },
    {
      icon: Chrome,
      title: 'Cross-Browser Support',
      description: 'Full compatibility with Google Chrome and Microsoft Edge browsers for maximum user coverage.',
      color: 'electric-green'
    },
    {
      icon: Globe,
      title: 'Privacy-First Design',
      description: 'No data storage or tracking. All threat analysis happens in real-time with secure API communication.',
      color: 'neon-teal'
    }
  ];

  const technicalSpecs = [
    { label: 'Architecture', value: 'Manifest V3' },
    { label: 'Threat Database', value: 'PhishTank API' },
    { label: 'Response Time', value: '< 100ms' },
    { label: 'Detection Rate', value: '99.7%' },
    { label: 'Supported Platforms', value: 'Gmail, Outlook' },
    { label: 'Browser Support', value: 'Chrome, Edge' }
  ];

  return (
    <div className="min-h-screen bg-space-blue text-foreground font-paragraph">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-2 bg-glassmorphism-overlay border border-neon-teal/20 rounded-lg backdrop-blur-sm mb-6">
            <span className="text-neon-teal text-sm font-medium tracking-wider">COMPREHENSIVE PROTECTION</span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Advanced <span className="text-neon-teal">Security Features</span>
          </h1>
          
          <p className="text-lg text-foreground/70 leading-relaxed">
            Enterprise-grade phishing protection powered by cutting-edge threat intelligence and real-time analysis.
          </p>
        </motion.div>
      </section>

      {/* Core Features Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {isLoading ? null : coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-glassmorphism-overlay backdrop-blur-xl border border-foreground/10 rounded-2xl p-8 hover:border-neon-teal/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              
              <h3 className="font-heading text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CMS Features Section */}
      {!isLoading && features.length > 0 && (
        <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-4">
              Technical <span className="text-neon-teal">Capabilities</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Deep dive into the technical features that power our protection
            </p>
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-glassmorphism-overlay backdrop-blur-xl border border-foreground/10 rounded-2xl p-8">
                    <h3 className="font-heading text-2xl text-foreground mb-4">{feature.featureName}</h3>
                    
                    {feature.description && (
                      <p className="text-foreground/70 mb-6 leading-relaxed">{feature.description}</p>
                    )}
                    
                    {feature.technicalDetails && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-neon-teal" />
                          <span className="font-heading text-sm text-neon-teal">Technical Details</span>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed pl-7">{feature.technicalDetails}</p>
                      </div>
                    )}
                    
                    {feature.userImpact && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-electric-green" />
                          <span className="font-heading text-sm text-electric-green">User Impact</span>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed pl-7">{feature.userImpact}</p>
                      </div>
                    )}
                    
                    {feature.relatedLink && (
                      <a
                        href={feature.relatedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neon-teal hover:text-neon-teal/80 transition-colors duration-300"
                      >
                        Learn More
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {feature.featureImage && (
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden border border-foreground/10">
                      <Image
                        src={feature.featureImage}
                        alt={feature.featureName || 'Feature illustration'}
                        width={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-glassmorphism-overlay backdrop-blur-xl border border-neon-teal/20 rounded-2xl p-12"
        >
          <h2 className="font-heading text-3xl text-foreground mb-8 text-center">
            Technical <span className="text-neon-teal">Specifications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-space-blue/50 border border-foreground/10 rounded-xl p-6"
              >
                <div className="text-sm text-foreground/60 mb-2">{spec.label}</div>
                <div className="font-heading text-xl text-neon-teal">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Protects Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-4">
            Protection <span className="text-neon-teal">Workflow</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Understanding the complete security lifecycle
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-teal via-electric-green to-warning-orange hidden lg:block"></div>
          
          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Email Monitoring',
                description: 'Extension continuously monitors Gmail and Outlook interfaces for link interactions.',
                icon: Globe
              },
              {
                step: '02',
                title: 'Click Interception',
                description: 'When a link is clicked, navigation is temporarily blocked and URL is extracted.',
                icon: Lock
              },
              {
                step: '03',
                title: 'API Verification',
                description: 'URL is securely transmitted to PhishTank API for real-time threat analysis.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Smart Decision',
                description: 'Based on API response, either allow navigation or display warning with user options.',
                icon: Shield
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className="bg-glassmorphism-overlay backdrop-blur-xl border border-foreground/10 rounded-2xl p-8">
                    <div className="text-5xl font-heading font-bold text-foreground/5 mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-neon-teal/20 border-4 border-space-blue items-center justify-center flex-shrink-0 relative z-10">
                  <item.icon className="w-7 h-7 text-neon-teal" />
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
