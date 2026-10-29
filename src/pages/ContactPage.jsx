import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { CONFIG } from '../config';
import { useToast } from '../context/ToastContext';
import { createWhatsAppInquiryLink } from '../utils/whatsapp';

export const ContactPage = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      showToast('Please fill out all required fields', 'error');
      return;
    }

    setIsSent(true);
    showToast('Your message has been sent successfully! We will get back to you shortly.');
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Header */}
      <div className="bg-stone-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            We are here for you
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black">
            Contact & Visit Tajamal Fried Chicken
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Questions, party bulk orders, feedback or directions? Reach out to our Lahore team anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Map Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md space-y-6">
              <h3 className="font-display font-black text-xl text-stone-900">
                Shop Location & Details
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-red-100 text-red-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Branch Address</h4>
                    <p className="text-stone-600 mt-0.5 leading-relaxed">
                      {CONFIG.address}
                    </p>
                    <a
                      href={CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-red-600 font-bold hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Call for Orders</h4>
                    <a href={`tel:${CONFIG.phone}`} className="text-stone-700 block font-semibold hover:text-red-600">
                      {CONFIG.phone}
                    </a>
                    <a href={`tel:${CONFIG.phoneAlt}`} className="text-stone-500 block text-xs hover:text-red-600">
                      {CONFIG.phoneAlt}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Operating Hours</h4>
                    <p className="text-stone-700 font-semibold">{CONFIG.openingHours.days}</p>
                    <p className="text-stone-500 text-xs">{CONFIG.openingHours.time} (Late Night)</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={createWhatsAppInquiryLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Map Representation */}
            <div className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-md overflow-hidden space-y-3">
              <h4 className="font-display font-bold text-sm text-stone-800 px-2">
                Location Map (Lahore)
              </h4>
              <div className="w-full h-52 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 relative group">
                <iframe
                  title="Tajamal Fried Chicken Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13594.135338006198!2d74.3414!3d31.5794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b29a28db945%3A0x6b4fbfe332219e27!2sGhoray%20Shah%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact / Feedback Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block">
                  Write to Us
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-stone-900 mt-1">
                  Send Feedback or Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Have a suggestion or planning a birthday/party catering? Let us know below!
                </p>
              </div>

              {isSent && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold">
                    Thank you! Your inquiry has been logged. Our branch manager will call you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Usman Butt"
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 outline-none focus:border-red-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 outline-none focus:border-red-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Subject / Order Type
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Birthday Party Catering, General Feedback"
                    className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 outline-none focus:border-red-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm text-stone-900 outline-none focus:border-red-500 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm shadow-xl shadow-red-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
