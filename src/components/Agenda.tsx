import React from 'react';
import { Award, Globe, Target, Video, Users as UsersIcon, Shield, Package, Star, Share2, Calendar } from 'lucide-react';

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 px-6 bg-gradient-to-b from-purple-950/30 to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Brand Promotion Section */}
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              Brand Promotion
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Elevate your brand with exclusive promotion opportunities at Yoda Ratna Awards
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Brand Promotion Benefits */}
            <div className="flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:flex-col md:overflow-x-visible md:px-0 md:mx-0">
              <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Brand Spotlight</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Logo visibility on Banners, Backdrops, Certificates & Social Media</h4>
                      <p className="text-gray-400 text-sm">Comprehensive brand visibility across all event materials</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Prestigious Association</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Align with a Reputable Event Honoring Heroes & Achievers</h4>
                      <p className="text-gray-400 text-sm">Associate your brand with national pride and excellence</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Targeted Exposure</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Reach Veterans, Women Leaders, Entrepreneurs & Media</h4>
                      <p className="text-gray-400 text-sm">Connect with high-value target audience segments</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Massive Media Reach</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Video className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Coverage via Press, Interviews, Reels and Live Streaming</h4>
                      <p className="text-gray-400 text-sm">Extensive media coverage across multiple platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:flex-col md:overflow-x-visible md:px-0 md:mx-0">
              <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">High-Value Networking</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <UsersIcon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Direct access to VIPs, Influencers & Business Leaders</h4>
                      <p className="text-gray-400 text-sm">Premium networking opportunities with key decision-makers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Trust & Credibility Boost</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Association with National Pride Enhances Public Trust</h4>
                      <p className="text-gray-400 text-sm">Build credibility through patriotic association</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Product/Service Showcase</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Package className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Booth Display or Brochure Inclusion in Delegate Kits</h4>
                      <p className="text-gray-400 text-sm">Showcase your products/services to targeted audience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">On-Stage Recognition</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Star className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Stage Mention, Award Presentation & Speech Opportunity</h4>
                      <p className="text-gray-400 text-sm">Get recognized on stage with speaking opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Social Media Buzz</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Share2 className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Tagged Posts, Reels and Sponsor Highlights Across Platforms</h4>
                      <p className="text-gray-400 text-sm">Amplify your brand across social media channels</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 min-w-[85vw] snap-center md:min-w-0">
                <h3 className="text-2xl font-bold text-white mb-6">Lasting Post-Event Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Featured in thank-you Posts, Videos, Blogs & Newsletters</h4>
                      <p className="text-gray-400 text-sm">Extended brand visibility through post-event content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Fee */}
          <div className="mt-12 text-center">
            <div className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Brand Promotion Package</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-4">₹ 10,000</div>
              <p className="text-gray-300 text-lg mb-6">Comprehensive brand promotion with maximum visibility</p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300">
                Contact for Brand Promotion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
