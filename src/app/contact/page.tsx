'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);
      
      // Convert FormData to object and add required fields
      const object = Object.fromEntries(formData);
      object.access_key = 'f4158249-895f-4437-a746-a08da57da2f0';
      object.to = 'contact@mercilesshub.com';
      object.subject = 'New Contact Form Submission from Merciless Website';
      
      // Convert to JSON
      const json = JSON.stringify(object);
      
      console.log('Submitting form with data:', object);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();
      console.log('Web3Forms response:', result);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        formRef.current.reset();
        console.log('✅ Form submitted successfully!');
      } else {
        setSubmitStatus('error');
        console.error('❌ Form submission failed:', result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .section-fade');
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-wide text-white mb-6 fade-in-up">
            CONTACT<br />MERCILESS
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Ready to join the elite? Have questions about partnerships, sponsorships, or team opportunities? 
            Get in touch with Merciless eSports.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-zinc-900 section-fade">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 text-white">
                GET IN TOUCH
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Whether you&apos;re interested in joining our team, exploring partnership opportunities, 
                or have general inquiries about Merciless eSports, we&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Email</h3>
                    <a href="mailto:contact@mercilesshub.com" className="text-red-500 hover:text-red-400 transition-colors">
                      contact@mercilesshub.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">💬</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Discord</h3>
                    <a href="https://discord.com/invite/merciless" className="text-red-500 hover:text-red-400 transition-colors">
                      Join our Discord
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Response Time</h3>
                    <p className="text-zinc-400">Usually within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-right">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                  ✅ Message sent successfully! We'll get back to you within 24-48 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600 text-white rounded-lg">
                  ❌ Failed to send message. Please try again or contact us directly at contact@mercilesshub.com
                </div>
              )}

              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden field for bot protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Team Recruitment">Team Recruitment</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Sponsorship Opportunity">Sponsorship Opportunity</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg shadow-xl hover:shadow-2xl"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
              
              <p className="text-zinc-500 text-sm mt-4">
                * Required fields. Form submissions are sent directly to our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-black section-fade">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-6 text-white fade-in-up">
            JOIN THE MERCILESS COMMUNITY
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8 fade-in-up stagger-delay-1">
            Connect with us on Discord for real-time updates, community events, and direct access to our team.
          </p>
          <a 
            href="https://discord.com/invite/merciless" 
            className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold text-white rounded uppercase tracking-wide transition-colors text-lg fade-in-up stagger-delay-2"
          >
            JOIN DISCORD
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-8 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400 text-sm sm:text-base">Copyright © Merciless eSports 2025</p>
        </div>
      </footer>
    </>
  );
}
