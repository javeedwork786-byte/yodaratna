import React from 'react';

const Founders = () => {
  const founders = [
    {
      name: 'BAVYA REDDY',
      title: 'CEO & DIRECTOR',
      image: '/images/bavyareddy.jpg',
      roles: [
        {
          position: 'Founder & CEO',
          organization: 'BBR Foundation',
          type: 'primary'
        },
        
        {
          position: 'Secretary and Executive Director',
          organization: 'Nitika Charitable Foundation',
          type: 'secondary'
        }
      ]
    },
    {
      name: 'PRASANNA KANJARALA',
      title: 'FOUNDER AND CHAIRPERSON',
      image: '/images/Prasanna.jpg',
      roles: [
        {
          position: 'Founder & President',
          organization: 'Nitika Charitable Foundation',
          type: 'primary'
        },
       
      ]
    }
  ];

  return (
    <>
      <section id="founders" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              FOUNDERS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Meet the founders behind Yoda Ratna Awards
          </p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-8 md:overflow-x-visible md:px-0 md:mx-0">
            {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 shadow-xl animate-on-scroll hover:border-pink-500/60 transition-all duration-300 min-w-[85vw] snap-center md:min-w-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-4">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl mb-4 w-32 h-32 mx-auto">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover bg-black hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Name and Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    {founder.name}
                </h3>
                <p className="text-xl text-yellow-400 font-semibold mb-4">
                    {founder.title}
                </p>
              </div>
              {/* Roles */}
              <div>
                <h4 className="text-lg text-pink-400 font-bold mb-3 text-center">Leadership Roles</h4>
                <div className="space-y-2">
                    {founder.roles.map((role, roleIndex) => (
                    <div 
                      key={roleIndex}
                      className="bg-black/30 border border-pink-500/20 rounded-lg p-3 hover:border-pink-500/40 transition-all duration-300 text-center"
                      style={{ animationDelay: `${(index * 0.2) + (roleIndex * 0.1)}s` }}
                    >
                      <p className="text-white font-semibold text-base mb-1">
                        {role.position}
                      </p>
                      <p className="text-gray-300 text-sm">
                        of {role.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organization Highlights */}
        <div className="mt-10 flex flex-row overflow-x-auto gap-4 pb-2 -mx-2 px-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-x-visible md:px-0 md:mx-0">
          <div className="text-center p-4 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg border border-pink-500/30 min-w-[70vw] snap-center md:min-w-0">
            <h5 className="text-pink-400 font-bold mb-2 text-base">BBR Foundation</h5>
            <p className="text-gray-300 text-sm">Empowering communities through fashion and philanthropy</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-lg border border-purple-500/30 min-w-[70vw] snap-center md:min-w-0">
            <h5 className="text-purple-400 font-bold mb-2 text-base">Nitika Charitable Foundation</h5>
            <p className="text-gray-300 text-sm">Dedicated to social welfare and charitable causes</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-lg border border-yellow-500/30 min-w-[70vw] snap-center md:min-w-0">
            <h5 className="text-yellow-400 font-bold mb-2 text-base">Vaastu Treasure Consultant</h5>
            <p className="text-gray-300 text-sm">Expert consultation in Vaastu and traditional wisdom</p>
          </div>
        </div>
      </div>
    </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 px-6 bg-gradient-to-b from-purple-950/30 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              SPEAKERS
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Meet our distinguished speakers and special guest for the event
            </p>
          </div>

          {/* Categorize speakers */}
          {(() => {
            let allSpeakers = [
              {
                img: '/images/22.png',
                name: 'GADDAM VIVEK VENKATSWAMY GARU',
                title: 'CHEIF GUEST',
                desc: "Office Of The Hon'ble Minister For Labour, Employment, Training, Factories And Mines & Geology"
              },
              {
                img: '/images/pras.png',
                name: 'PRASANNA MARIPI GARU',
                title: 'GUEST OF HONOUR',
                desc: 'Bjp State Mahila Office Secretary\nTelangana'
              },
              {
                img: '/images/jay.png',
                name: 'MAJOR D.JAYASUDHA GARU',
                title: 'CHEIF GUEST',
                desc: 'NCC officer\nKasturba Gandhi Degree College\nMotivational Speaker'
              },
              {
                img: '/images/moyyi.png',
                name: 'MOYYI SUJATHA GARU',
                title: 'AWARDEE\nYODA SHAKTI SAMMAN AWARD',
                desc: 'Bjp state Publicity Secretary OBC\nTelangana'
              },
              {
                img: '/images/sajida.png',
                name: 'DR. SAJIDA KHAN GARU',
                title: 'AWARDEE\nYODA VEERA NAARI AWARD',
                desc: 'Audio Engineer\nPresident Awardee'
              },
              {
                img: '/images/tamma.png',
                name: 'DR. CHINMAYEE TAMMAREDDY GARU',
                title: 'AWARDEE\nYODA VEERA NAARI AWARD',
                desc: 'Psychologist, Emotional intelligence\nLife Coach, Motivational Speaker, Author.'
              },
              {
                img: '/images/rekha.png',
                name: 'CH REKHA RAO GARU',
                title: 'GUEST OF HONOUR',
                desc: 'Renowned academician, Political Analyst\nMountaineering & Rock climber, Motivational Speaker\nSocial influencer'
              },
              {
                img: '/images/vij.png',
                name: 'LADY SUPERSTAR VIJAYA SHANTI GARU',
                title: 'CHEIF GUEST',
                desc: 'Member of Telangana legislative council\nActress, Film producer, Politician, Social Worker'
              },
              {
                img: '/images/veer.png',
                name: 'PALLE.VEERAMANI GARU',
                title: 'AWARDEE\nYODA VEERA NAARI AWARD',
                desc: 'Founder & President Mathruka Foundation,\nBJP Senior Leader, Indian Red Cross,\nVice-President of BC Kula sangala Ikya Vedhika'
              },
              {
                img: '/images/13.png',
                name: 'THONDAPU ROHINI REDDY',
                title: 'GUEST OF HONOUR',
                desc: 'M.Sc, M.Tech, PhD\nAssociate professor\nmunicipal councillor peddamberpet Agriculture'
              },
              {
                img: '/images/27.png',
                name: 'DR.ALAPATI GARU',
                title: 'GUEST OF HONOUR',
                desc: 'Kala Sindhu\nTagline King'
              },
            ].concat([
              ...['/images/11.png', '/images/12.png', '/images/14.png', '/images/15.png', '/images/16.png', '/images/17.png', '/images/18.png'].map((img, idx) => {
                if (idx === 0) {
                  return {
                    img,
                    name: 'KOTHA KALPANA GARU',
                    title: 'AWARDEE\nYODA VEERA NAARI AWARD',
                    desc: 'Journalist'
                  };
                } else if (idx === 1) {
                  return {
                    img,
                    name: 'MOTHE SRILATHA SHOBAN REDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'GhmC deputy mayor'
                  };
                } else if (idx === 2) {
                  return {
                    img,
                    name: 'DR. KAMMELA SREEDHAR GARU',
                    title: 'CHEIF GUEST',
                    desc: 'M.S., M.Ch.(P.G.I.Chandigarh), FRUS(USA), FACC(USA)\nEleven World Records Holder, Gold Medalist\nSr.Consultant Robotic Urologist, Microsurgical Andrologist, Transplant Surgeon.\nLaparoscopic Robotic Minimally invasive Surgeon'
                  };
                } else if (idx === 3) {
                  return {
                    img: '/images/24.png',
                    name: 'VUNDAVALLI SRIDEVI GARU',
                    title: 'CHEIF GUEST',
                    desc: 'AP SC cooperation chairperson.\nEX-Former Member of the Legislative Assembly of Andhra Pradesh\nMBBS, MD, Gynecologist, Infertility Specialist.'
                  };
                } else if (idx === 4) {
                  return {
                    img,
                    name: 'PURUREDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'BJP Leader\nSanath Nagar Constancy'
                  };
                } else if (idx === 5) {
                  return {
                    img,
                    name: 'N. RAMCHANDER RAO GARU',
                    title: 'CHEIF GUEST',
                    desc: 'BJP\nTelangana Rashtra Adhyakshulu'
                  };
                } else if (idx === 6) {
                  return {
                    img: '/images/24.png',
                    name: 'GOPU RAMANA REDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Ex-Army JCO, MLA Aspirant for Malkajgiri Assembly Constituency and MD of 25 PMBJAKs, & OPEN NGO President, BJP.'
                  };
                } else {
                  return {
                    img,
                    name: `Speaker Name ${idx+16}`,
                    title: 'Speaker Title',
                    desc: 'Short description or designation goes here.'
                  };
                }
              }),
              ...['/images/22.png', '/images/25.png', '/images/23.png', '/images/21.png', '/images/24.png'].map((img, idx) => {
                if (idx === 0) {
                  return null;
                } else if (idx === 1) {
                  return {
                    img,
                    name: 'CHINNA SRISAILAM GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Chairman, BC & JAC Committee'
                  };
                } else if (idx === 2) {
                  return null;
                } else if (idx === 3) {
                  return null;
                } else {
                  return {
                    img,
                    name: `Speaker Name ${idx+24}`,
                    title: 'Speaker Title',
                    desc: 'Short description or designation goes here.'
                  };
                }
              }),
              ...[
                {
                  img: '/images/sp.png',
                  name: 'MAHENDRA NATH KONDLA GARU',
                  title: 'SPECIAL GUEST',
                  desc: 'Film producer\nMaha Movies M3 media,\nSabari Studios, Sabari Music'
                },
                {
                  img: '/images/madhavi.png',
                  name: 'MAADHAVI LATHA GARU',
                  title: 'SPECIAL GUEST',
                  desc: 'Actress, BJP Leader,\nSocial Activist, Motivational speaker'
                },
                {
                  img: '/images/16.png',
                  name: 'MARRI PURUREDDY GARU',
                  title: 'CHEIF GUEST',
                  desc: 'BJP Leader\nSanath Nagar constituency'
                },
                {
                  img: '/images/29.png',
                  name: 'DEVI REDDY ADVAITH REDDY GARU',
                  title: 'SPECIAL GUEST',
                  desc: 'Actor\nSalaar Fame'
                },
                {
                  img: '/images/28.png',
                  name: "NIXON D'CRUZ GARU",
                  title: 'SPECIAL GUEST',
                  desc: 'Master\nChoreographer  TFI\nArya 2, Panjaa'
                },
                {
                  img: '/images/26.png',
                  name: 'DR.MADALA RAVI GARU',
                  title: 'CHEIF GUEST',
                  desc: 'Actor, Producer\nMAA Movie Artists,\nAssociation, vice president'
                },
              ]
            ]).filter(Boolean);
            const categories = [
              { key: 'special guest', label: 'Special Guests', color: 'from-yellow-400 to-pink-400' },
              { key: 'chief guest', label: 'Chief Guests', color: 'from-cyan-500 to-blue-500' },
              { key: 'guest of honour', label: 'Guests of Honour', color: 'from-pink-500 to-yellow-500' },
              { key: 'awardee', label: 'Awardees', color: 'from-purple-500 to-pink-500' },
            ];
            return categories.map((cat, cidx) => {
              const filtered = cat.key === 'chief guest'
                ? allSpeakers.filter(s => s.title.toLowerCase().includes('chief guest') || s.title.toLowerCase().includes('cheif guest'))
                : allSpeakers.filter(s => s.title.toLowerCase().includes(cat.key));
              
              // For chief guests, only show the heading and the first chief guest card
              if (cat.key === 'chief guest') {
                const chiefGuests = [
                  {
                    img: '/images/21.png',
                    name: 'GADDAM VIVEK VENKATSWAMY GARU',
                    title: 'CHEIF GUEST',
                    desc: "The Hon'ble Minister For Labour, Employment, Training, Factories And Mines & Geology"
                  },
                  {
                    img: '/images/vij.png',
                    name: 'LADY SUPERSTAR VIJAYA SHANTI GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Member of Telangana legislative council\nActress, Film producer, Politician, Social Worker'
                  },
                  {
                    img: '/images/12.png',
                    name: 'MOTHE SRILATHA SHOBAN REDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Ghmc deputy mayor'
                  },
                  {
                    img: '/images/17.png',
                    name: 'N. RAMCHANDER RAO GARU',
                    title: 'CHEIF GUEST',
                    desc: 'BJP\nTelangana Rashtra Adhyakshulu'
                  },
                  {
                    img: '/images/18.png',
                    name: 'GOPU RAMANA REDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Ex-Army JCO, MLA Aspirant for Malkajgiri Assembly Constituency and MD of 25 PMBJAKs, & OPEN NGO President, BJP.'
                  },
                  {
                    img: '/images/16.png',
                    name: 'MARRI PURUREDDY GARU',
                    title: 'CHEIF GUEST',
                    desc: 'BJP Leader\nSanath Nagar constituency'
                  },
                  {
                    img: '/images/jay.png',
                    name: 'MAJOR D.JAYASUDHA GARU',
                    title: 'CHEIF GUEST',
                    desc: 'NCC officer\nKasturba Gandhi Degree College\nMotivational Speaker'
                  },
                  {
                    img: '/images/15.png',
                    name: 'VUNDAVALLI SRIDEVI GARU',
                    title: 'CHEIF GUEST',
                    desc: 'AP SC cooperation chairperson.\nEX-Former Member of the Legislative Assembly of Andhra Pradesh\nMBBS, MD, Gynecologist, Infertility Specialist.'
                  },
                  {
                    img: '/images/14.png',
                    name: 'DR. KAMMELA SREEDHAR GARU',
                    title: 'CHEIF GUEST',
                    desc: 'M.S., M.Ch.(P.G.I.Chandigarh), FRUS(USA), FACC(USA)\nEleven World Records Holder, Gold Medalist\nSr.Consultant Robotic Urologist, Microsurgical Andrologist, Transplant Surgeon.\nLaparoscopic Robotic Minimally invasive Surgeon'
                  },
                  {
                    img: '/images/22.png',
                    name: 'CHINNA NAVEEN YADAV GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Contested MLA Jubilee Hills Constituency.'
                  },
                  {
                    img: '/images/25.png',
                    name: 'CHINNA SRISAILAM GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Chairman, BC & JAC Committee'
                  },
                  {
                    img: '/images/26.png',
                    name: 'DR.MADALA RAVI GARU',
                    title: 'CHEIF GUEST',
                    desc: 'Actor, Producer\nMAA Movie Artists,\nAssociation, vice president'
                  },
                ];
                return (
                  <div key={cat.key} className="mb-16">
                    <h3 className={`text-3xl font-bold mb-8 text-center bg-gradient-to-r ${cat.color} bg-clip-text text-transparent uppercase tracking-widest drop-shadow-lg`}>{cat.label}</h3>
                    <div className={
                      `flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-8 md:overflow-x-visible md:px-0 md:mx-0`
                    }>
                      {chiefGuests.map((chiefGuest, idx) => (
                        <div
                          key={idx}
                          className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-cyan-400/30 max-w-xs w-full min-w-[80vw] snap-center flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/30 animate-fade-in-up md:max-w-full md:min-w-0 p-6 md:p-8"
                          style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                          <span className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full shadow uppercase tracking-widest z-10 text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                            Chief Guest
                          </span>
                          <div className="w-24 h-24 rounded-full border-4 border-cyan-300/40 shadow-lg mb-4 mt-8 overflow-hidden bg-black">
                            <img src={chiefGuest.img} alt={chiefGuest.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="text-xl font-extrabold mb-1 text-white drop-shadow">
                            {chiefGuest.name}
                          </h4>
                          <p className="text-base font-semibold mb-2 uppercase tracking-wide text-cyan-300">{chiefGuest.title}</p>
                          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-2 mx-auto" />
                          <p className="text-gray-100 text-sm whitespace-pre-line text-center font-medium mb-1">
                            {chiefGuest.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              
              if (!filtered.length) return null;
              return (
                <div key={cat.key} className="mb-16">
                  <h3 className={`text-3xl font-bold mb-8 text-center bg-gradient-to-r ${cat.color} bg-clip-text text-transparent uppercase tracking-widest drop-shadow-lg`}>{cat.label}</h3>
                  <div className={
                    `flex flex-row overflow-x-auto gap-6 pb-4 -mx-4 px-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-8 md:overflow-x-visible md:px-0 md:mx-0`
                  }>
                    {filtered.map((speaker, idx) => (
                      <div
                        key={idx}
                        className={
                          cat.key === 'chief guest'
                            ? 'relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 max-w-xs w-full min-w-[80vw] snap-center flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-pink-400/30 animate-fade-in-up md:max-w-full md:min-w-0 p-4 md:p-5'
                            : 'relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 max-w-xs w-full min-w-[80vw] snap-center flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-pink-400/30 animate-fade-in-up md:max-w-full md:min-w-0 p-6 md:p-8'
                        }
                        style={{ animationDelay: `${idx * 0.08}s`, minHeight: cat.key === 'chief guest' ? undefined : undefined }}
                      >
                        <span className={`absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full shadow uppercase tracking-widest z-10 text-xs font-bold text-white bg-gradient-to-r ${cat.key === 'special guest' ? 'from-yellow-400 to-pink-400' : cat.key === 'chief guest' ? 'from-cyan-500 to-blue-500' : cat.key === 'guest of honour' ? 'from-pink-500 to-yellow-500' : 'from-purple-500 to-pink-500'}`}>{cat.label}</span>
                        <div className={cat.key === 'chief guest' ? 'w-20 h-20 rounded-full border-4 border-white/40 shadow-lg mb-2 mt-4 overflow-hidden bg-black' : 'w-24 h-24 rounded-full border-4 border-white/40 shadow-lg mb-4 mt-8 overflow-hidden bg-black'}>
                          <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="text-xl font-extrabold mb-1 text-white drop-shadow">
                          {speaker.name}
                        </h4>
                        <p className={`text-base font-semibold mb-2 uppercase tracking-wide ${cat.key === 'special guest' ? 'text-yellow-300' : cat.key === 'chief guest' ? 'text-cyan-300' : cat.key === 'guest of honour' ? 'text-pink-300' : 'text-purple-200'}`}>{speaker.title}</p>
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 mb-2 mx-auto" />
                        <p className="text-gray-100 text-sm whitespace-pre-line text-center font-medium mb-1">
                          {speaker.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </section>
    </>
  );
};

export default Founders;
