import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('model');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For better user experience

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Show loading feedback

    // --- THIS IS THE CRITICAL FIX ---
    // We must tell the template which type of registration this is.
    // The email template is waiting for a variable called "registrationType".
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      age: formData.age,
      // This line was missing. It adds the registration type to the data being sent.
      registrationType: activeTab === 'model' ? 'Model' : 'Makeup Artist'
    };
    // ------------------------------------

    emailjs.send(
      'service_hcfhpph',         // Your Service ID
      'template_31z6xyp',        // Your Template ID
      templateParams,            // The complete data, including registrationType
      'LmwRMvkKI1kpJdxH0'        // Your Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', age: '' }); // Clear the form
    })
    .catch((error) => {
      alert('Failed to send registration. Please check the console for errors.');
      console.error('EmailJS error:', error);
    })
    .finally(() => {
        setIsLoading(false); // Stop loading
    });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="registration" className="py-20 px-6 bg-gradient-to-b from-purple-950/30 to-black min-h-screen text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent mb-4">
            Register Your Interest
          </h2>
          <p className="text-gray-300">Choose your category below</p>
          <div className="flex justify-center mt-6 space-x-4">
            <button onClick={() => handleTabChange('model')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'model' ? 'bg-gradient-to-r from-pink-500 to-purple-600 ring-2 ring-pink-400 text-white' : 'bg-black/50 text-white hover:bg-pink-500/30 border border-pink-500/30'}`}>
              Model Registration
            </button>
            <button onClick={() => handleTabChange('makeup')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'makeup' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 ring-2 ring-cyan-400 text-white' : 'bg-black/50 text-white hover:bg-cyan-500/30 border border-cyan-500/30'}`}>
              Make-up for Warriors
            </button>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Registration Successful!</h3>
            <p className="text-gray-300 mb-6">Thank you for registering. We will contact you soon with further details.</p>
            <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300">
              Register Another
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {activeTab === 'model' ? 'Model Registration Form' : 'Make-up for Warriors Form'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required type="email" className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <input name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} required type="number" className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-300" />
                <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300 disabled:opacity-60">
                   {isLoading ? 'Submitting...' : (activeTab === 'model' ? 'Register as Model' : 'Register for Make-up')}
                </button>
              </form>
            </div>

            <div className="lg:w-1/3 bg-gradient-to-b from-blue-900 to-black p-6 rounded-xl shadow-md flex flex-col justify-between">
              {activeTab === 'model' ? (
                  <div>
                    <h3 className="text-yellow-400 text-2xl font-bold mb-2">Model Registration</h3>
                    <p className="text-white text-lg mb-4 font-semibold">Yoda Ratna Event Benefits</p>
                    <ul className="list-none text-white space-y-3 text-sm">
                      <li><span className="font-bold text-pink-400">•</span> Registered models will get a chance to participate in an <span className="font-bold text-yellow-300">exclusive Ramp Walk</span> during the Yoda Ratna event.</li>
                      <li><span className="font-bold text-pink-400">•</span> Receive <span className="font-bold text-yellow-300">professional grooming and training sessions</span> to enhance stage presence.</li>
                      <li><span className="font-bold text-pink-400">•</span> All participating models will be <span className="font-bold text-yellow-300">featured on our official social media</span> platforms.</li>
                      <li><span className="font-bold text-pink-400">•</span> <span className="font-bold text-yellow-300">High-quality photo and video coverage</span> for personal and professional use.</li>
                      <li><span className="font-bold text-pink-400">•</span> A golden opportunity to <span className="font-bold text-yellow-300">kickstart or grow your modeling career</span>.</li>
                      <li><span className="font-bold text-pink-400">•</span> Get noticed by <span className="font-bold text-yellow-300">fashion designers, makeup artists, and event organizers</span>.</li>
                      <li><span className="font-bold text-pink-400">•</span> Stand a chance to be selected for <span className="font-bold text-yellow-300">brand shoots, future shows, and campaigns</span>.</li>
                      <li><span className="font-bold text-pink-400">•</span> Portfolio boost with <span className="font-bold text-yellow-300">professional event coverage</span>.</li>
                      <li><span className="font-bold text-pink-400">•</span> Gain <span className="font-bold text-yellow-300">confidence, recognition, and exposure</span> on a grand stage.</li>
                      <li><span className="font-bold text-pink-400">•</span> <span className="italic text-pink-300">Step into the spotlight and let your talent shine!</span></li>
                    </ul>
                  </div>
              ) : (
                  <div>
                    <h3 className="text-cyan-400 text-2xl font-bold mb-2">Makeup & Models Registration Benefits</h3>
                    <ul className="list-none text-white space-y-3 text-sm">
                      <li><span className="font-bold text-cyan-300">•</span> Participating makeup artists will receive a <span className="font-bold text-yellow-300">Participation Certificate</span>, <span className="font-bold text-yellow-300">Portfolio Coverage</span>, and exclusive <span className="font-bold text-yellow-300">Collaboration Opportunities</span>.</li>
                      <li><span className="font-bold text-cyan-300">•</span> These benefits help artists build a stronger professional profile and gain more visibility in the industry.</li>
                      <li><span className="font-bold text-cyan-300">•</span> From our previous events, many artists have received offers and new projects post participation.</li>
                      <li><span className="font-bold text-cyan-300">•</span> Your work will be professionally captured and added to your portfolio, enhancing your credibility.</li>
                      <li><span className="font-bold text-cyan-300">•</span> It's an ideal stage to network with models, designers, and industry experts.</li>
                      <li><span className="font-bold text-cyan-300">•</span> You'll be featured in our event promotions and highlights.</li>
                      <li><span className="font-bold text-cyan-300">•</span> Our team ensures your talent gets the recognition it deserves.</li>
                      <li><span className="font-bold text-cyan-300">•</span> This exposure opens the door to freelance gigs, agency tie-ups, and brand shoots.</li>
                      <li><span className="font-bold text-cyan-300">•</span> You'll also be considered for future events and collaborations by our partner studios.</li>
                      <li><span className="font-bold text-cyan-300">•</span> <span className="italic text-cyan-200">Be part of a celebration where your art is showcased and celebrated!</span></li>
                    </ul>
                  </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;
