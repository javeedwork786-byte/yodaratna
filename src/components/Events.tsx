import React from 'react';
// You can import icons from lucide-react if needed, e.g.:
// import { Award } from 'lucide-react';

const AwardCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'Yoda Shakti Samman',
      forWhom: 'For Outstanding Contributions by Ex-Army Personnal',
      taglines: [
        'Recognition for Bravery – Yoda Shakti Samman',
        'Honoring the Strength Behind the Uniform.',
        'A Salute Beyond Service – Yoda Shakti Samman.',
        'From Battlefield to Brotherhood – Recognizing the Real Heroes.',
      ],
    },
    {
      id: 2,
      title: 'Yoda Raksha Ratna',
      forWhom: 'For Army Wives and Mothers',
      description: 'Honoring their strength, silent sacrifices, and unwavering support to our national heroes.',
      taglines: [
        "Beyond the Uniform Lies a Mother's Courage and a Wife's Faith",
        'The Strength Behind Every Soldier – Yoda Raksha Ratna',
        'Honoring Silent Sacrifices, Celebrating Brave Hearts',
        'She Raises Warriors. She Stands Strong.',
      ],
    },
    {
      id: 3,
      title: 'Yoda Veera Naari',
      forWhom: 'For Women Entrepreneurs',
      description: `She leads with purpose, builds with power, and transforms ideas into impact - a true force of inspiration.`,
      benefits: [
        'Trophy & Certificate of Excellence',
        'Media Coverage & Social Media Highlights',
        'Professional Recognition',
        'Brand Visibility & Personal Branding',
        'Networking Opportunities',
        'Stage Time & Spotlight Moment',
        'Eligibility for Advanced Programs & Features',
        'Inspiration to Others',
        'Lifetime Achievement Records',
      ],
      taglines: [
        'Yoda Veera Naari',
        'For Women Entrepreneurs',
        'Celebrate Talent. Reward Excellence. Inspire the Future',
      ],
      website: 'www.yodaratna.com',
    },
  ];

  return (
    <section id="award-categories" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            AWARD CATEGORIES
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            YODA RATNA AWARDS - Honoring excellence, courage, and unwavering spirit.
          </p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-10 md:overflow-x-visible md:px-0 md:mx-0">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 md:p-10 shadow-xl animate-on-scroll hover:border-pink-500/60 transition-all duration-300 hover:scale-105 min-w-[85vw] snap-center md:min-w-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <p className="text-xl text-yellow-400 font-semibold mb-4">
                  FOR: {category.forWhom}
                </p>
                {category.description && (
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {category.description}
                  </p>
                )}
                {category.benefits && (
                  <ul className="mb-6 text-gray-200 list-disc list-inside space-y-1">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="pl-2">{benefit}</li>
                    ))}
                  </ul>
                )}
                <div className="space-y-3 mb-6">
                  {category.taglines.map((tagline, taglineIndex) => (
                    <p key={taglineIndex} className="text-gray-300 italic text-md md:text-lg">
                      "{tagline}"
                    </p>
                  ))}
                </div>
                {category.website && (
                  <div className="mt-6 text-center md:text-left">
                    <a
                      href={`https://${category.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                    >
                      Visit {category.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardCategories;
