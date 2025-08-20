import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navigation from './Navigation';
import './Gallery.css';

// Final Type Definition
type GalleryItem = {
  type: 'video' | 'image';
  src: string;
  title: string;
  description: string;
  featured?: boolean;
};

// The Definitive Gallery Component
const Gallery = () => {
  const allItems: GalleryItem[] = [
    // --- FEATURED CAROUSEL ITEMS (3) ---
    { type: 'video', src: '/gallery/gallery11.mp4', title: 'Our Anthem', description: 'The heart and soul of our team, captured in our official anthem video.', featured: true },
    { type: 'image', src: '/gallery/gallery15.jpg', title: 'Women of VFX-Design', description: 'Celebrating the incredible women who lead and inspire us.', featured: true },
    { type: 'image', src: '/gallery/gallery5.jpg', title: 'Group Photo!', description: 'The amazing individuals who make everything possible.', featured: true },
    
    // --- EXISTING GRID ITEMS (13) ---
    { type: 'image', src: '/gallery/gallery9.jpg', title: 'Another Victory', description: 'Honored to be recognized for our hard work and dedication.' },
    { type: 'image', src: '/gallery/gallery4.jpg', title: 'Award Ceremony', description: 'Proudly accepting an award for creative excellence.' },
    { type: 'image', src: '/gallery/gallery1.jpg', title: 'Recording Session', description: 'A behind-the-scenes look at the magic happening in the studio.' },
    { type: 'video', src: '/gallery/gallery12.mp4', title: 'A Day at the Office', description: 'A quick glimpse into the fun and collaborative environment we cherish.' },
    { type: 'image', src: '/gallery/gallery7.jpg', title: 'Traditional Day', description: 'Embracing our culture and traditions together as a team.' },
    { type: 'image', src: '/gallery/gallery2.jpg', title: 'Team Celebration', description: 'Celebrating a major milestone with the whole crew. Good times!' },
    { type: 'image', src: '/gallery/gallery3.jpg', title: 'Candid Moments', description: 'Our lead sound engineer focused and in the zone.' },
    { type: 'image', src: '/gallery/gallery6.jpg', title: 'Brainstorming Session', description: 'Where all our great ideas begin. Collaboration is key.' },
    { type: 'image', src: '/gallery/gallery8.jpg', title: 'Project Launch Party', description: 'Cheers to a successful project launch!' },
    { type: 'image', src: '/gallery/gallery10.jpg', title: 'The Whole Family', description: 'A snapshot of our extended work family.' },
    { type: 'image', src: '/gallery/gallery13.jpg', title: 'Team Outing', description: 'Building bonds and making memories outside the office.' },
    { type: 'image', src: '/gallery/gallery14.jpg', title: 'Focused on the Future', description: 'Working together to build the next big thing.' },
    { type: 'image', src: '/gallery/gallery16.jpg', title: 'Happy Moments', description: 'A candid shot that perfectly captures our team spirit.' },

    // --- ADDED IMAGES UP TO 70 ---
    { type: 'image', src: '/gallery/gallery17.jpg', title: 'Creative Collaboration', description: 'Mapping out our next big project.' },
    { type: 'image', src: '/gallery/gallery18.jpg', title: 'On-Set Action', description: 'Behind the scenes of a recent video shoot.' },
    { type: 'image', src: '/gallery/gallery19.jpg', title: 'Studio Vibes', description: 'The calm before the creative storm.' },
    { type: 'image', src: '/gallery/gallery20.jpg', title: 'Team Workshop', description: 'Learning and growing together.' },
    { type: 'image', src: '/gallery/gallery21.jpg', title: 'Celebrating Success', description: 'Toasting to another project well done.' },
    { type: 'image', src: '/gallery/gallery22.jpg', title: 'Focused Effort', description: 'Attention to detail in every frame.' },
    { type: 'image', src: '/gallery/gallery23.jpg', title: 'Client Presentations', description: 'Sharing our vision and passion.' },
    { type: 'image', src: '/gallery/gallery24.jpg', title: 'Our Creative Space', description: 'Where ideas come to life.' },
    { type: 'image', src: '/gallery/gallery25.jpg', title: 'Annual Retreat', description: 'Connecting as a team in nature.' },
    { type: 'image', src: '/gallery/gallery26.jpg', title: 'The Sound Booth', description: 'Perfecting the audio for our projects.' },
    { type: 'image', src: '/gallery/gallery27.jpg', title: 'Design Sprint', description: 'Rapidly prototyping new concepts.' },
    { type: 'image', src: '/gallery/gallery28.jpg', title: 'A Moment of Laughter', description: 'Good times with great people.' },
    { type: 'image', src: '/gallery/gallery29.jpg', title: 'Late Night Edits', description: 'Putting in the hours to make it perfect.' },
    { type: 'image', src: '/gallery/gallery30.jpg', title: 'Welcoming New Members', description: 'Our team continues to grow.' },
    { type: 'image', src: '/gallery/gallery31.jpg', title: 'Concept Art', description: 'The initial sketches of a new character.' },
    { type: 'image', src: '/gallery/gallery32.jpg', title: 'Motion Capture Session', description: 'Bringing digital characters to life.' },
    { type: 'image', src: '/gallery/gallery33.jpg', title: 'Team Lunch', description: 'Sharing a meal and a conversation.' },
    { type: 'image', src: '/gallery/gallery34.jpg', title: 'Industry Conference', description: 'Representing our work on a bigger stage.' },
    { type: 'image', src: '/gallery/gallery35.jpg', title: '3D Modeling', description: 'Building worlds one polygon at a time.' },
    { type: 'image', src: '/gallery/gallery36.jpg', title: 'UI/UX Design Review', description: 'Ensuring a seamless user experience.' },
    { type: 'image', src: '/gallery/gallery37.jpg', title: 'Coffee and Code', description: 'The fuel for our development team.' },
    { type: 'image', src: '/gallery/gallery38.jpg', title: 'Community Meetup', description: 'Engaging with our fellow creatives.' },
    { type: 'image', src: '/gallery/gallery39.jpg', title: 'Holiday Party', description: 'Celebrating the end of a great year.' },
    { type: 'image', src: '/gallery/gallery40.jpg', title: 'Behind the Camera', description: 'Capturing the perfect shot.' },
    { type: 'image', src: '/gallery/gallery41.jpg', title: 'Post-Production Suite', description: 'Where the final magic happens.' },
    { type: 'image', src: '/gallery/gallery42.jpg', title: 'Team Achievements', description: 'Proudly displaying our awards.' },
    { type: 'image', src: '/gallery/gallery43.jpg', title: 'A New Beginning', description: 'Kicking off a new quarter with energy.' },
    { type: 'image', src: '/gallery/gallery44.jpg', title: 'Sketching Ideas', description: 'From paper to pixels.' },
    { type: 'image', src: '/gallery/gallery45.jpg', title: 'Our Tech Stack', description: 'The tools that power our creativity.' },
    { type: 'image', src: '/gallery/gallery46.jpg', title: 'Volunteering Day', description: 'Giving back to the community.' },
    { type: 'image', src: '/gallery/gallery47.jpg', title: 'The Editing Bay', description: 'Piecing the story together.' },
    { type: 'image', src: '/gallery/gallery48.jpg', title: 'Collaborative Review', description: 'Team feedback is crucial to our process.' },
    { type: 'image', src: '/gallery/gallery49.jpg', title: 'A Successful Pitch', description: 'Winning over a new client.' },
    { type: 'image', src: '/gallery/gallery50.jpg', title: 'Our Office Mascot', description: 'The furry friend who boosts our morale.' },
    { type: 'image', src: '/gallery/gallery51.jpg', title: 'Storyboarding', description: 'Visualizing the narrative arc.' },
    { type: 'image', src: '/gallery/gallery52.jpg', title: 'Client Kick-off Meeting', description: 'Starting a new partnership.' },
    { type: 'image', src: '/gallery/gallery53.jpg', title: 'The Render Farm', description: 'Processing our complex visual effects.' },
    { type: 'image', src: '/gallery/gallery54.jpg', title: 'Training Session', description: 'Always honing our skills.' },
    { type: 'image', src: '/gallery/gallery55.jpg', title: 'A Candid Moment', description: 'Spontaneous smiles in the office.' },
    { type: 'image', src: '/gallery/gallery56.jpg', title: 'Project Debrief', description: 'Learning from every experience.' },
    { type: 'image', src: '/gallery/gallery57.jpg', title: 'The View from Our Office', description: 'Inspiration is all around us.' },
    { type: 'image', src: '/gallery/gallery58.jpg', title: 'Happy Hour', description: 'Winding down after a productive week.' },
    { type: 'image', src: '/gallery/gallery59.jpg', title: 'Innovation Day', description: 'Exploring new technologies and ideas.' },
    { type: 'image', src: '/gallery/gallery60.jpg', title: 'On the Whiteboard', description: 'Visualizing complex solutions.' },
    { type: 'image', src: '/gallery/gallery61.jpg', title: 'The Marketing Team', description: 'Sharing our story with the world.' },
    { type: 'image', src: '/gallery/gallery62.jpg', title: 'User Testing', description: 'Getting valuable feedback.' },
    { type: 'image', src: '/gallery/gallery63.jpg', title: 'A Well-Deserved Break', description: 'Taking a moment to recharge.' },
    { type: 'image', src: '/gallery/gallery64.jpg', title: 'Prototyping in Action', description: 'Bringing an app concept to life.' },
    { type: 'image', src: '/gallery/gallery65.jpg', title: 'Our Supportive Culture', description: 'Team members helping each other succeed.' },
    { type: 'image', src: '/gallery/gallery66.jpg', title: 'The Final Product', description: 'Showcasing a recently completed project.' },
    { type: 'image', src: '/gallery/gallery67.jpg', title: 'Planning for the Future', description: 'Our leadership team setting the vision.' },
    { type: 'image', src: '/gallery/gallery68.jpg', title: 'Hackathon Winners', description: 'Celebrating a creative victory.' },
    { type: 'image', src: '/gallery/gallery69.jpg', title: 'Morning Stand-up', description: 'Aligning for the day ahead.' },
    { type: 'image', src: '/gallery/gallery70.jpg', title: 'Group Huddle', description: 'United and ready for the next challenge.' },

    // --- NEWLY ADDED IMAGES TO REACH 92 TOTAL ---
    // (Continuing from 71 up to 92)
    { type: 'image', src: '/gallery/gallery71.jpg', title: 'New Hire Orientation', description: 'Welcoming the newest talent to our team.' },
    { type: 'image', src: '/gallery/gallery72.jpg', title: 'Sound Design Session', description: 'Crafting the perfect audio landscape.' },
    { type: 'image', src: '/gallery/gallery73.jpg', title: 'UX Flow Mapping', description: 'Detailing the user journey from start to finish.' },
    { type: 'image', src: '/gallery/gallery74.jpg', title: 'Team Building Exercise', description: 'Strengthening our collaborative spirit.' },
    { type: 'image', src: '/gallery/gallery75.jpg', title: 'Lighting Setup', description: 'Setting the mood for a cinematic shot.' },
    { type: 'image', src: '/gallery/gallery76.jpg', title: 'Quarterly Review', description: 'Reflecting on our progress and setting new goals.' },
    { type: 'image', src: '/gallery/gallery77.jpg', title: 'Digital Painting', description: 'Creating stunning visuals from a blank canvas.' },
    { type: 'image', src: '/gallery/gallery78.jpg', title: 'The Green Screen', description: 'Where imagination meets reality.' },
    { type: 'image', src: '/gallery/gallery79.jpg', title: 'Code Refactoring', description: 'Improving our codebase for better performance.' },
    { type: 'image', src: '/gallery/gallery80.jpg', title: 'Celebrating a Birthday', description: 'Taking a moment to celebrate one of our own.' },
    { type: 'image', src: '/gallery/gallery81.jpg', title: 'Pre-production Meeting', description: 'Laying the groundwork for a new project.' },
    { type: 'image', src: '/gallery/gallery82.jpg', title: 'Color Grading Suite', description: 'Fine-tuning the look and feel of our footage.' },
    { type: 'image', src: '/gallery/gallery83.jpg', title: 'Our Library', description: 'A quiet space for research and inspiration.' },
    { type: 'image', src: '/gallery/gallery84.jpg', title: 'Client Workshop', description: 'Collaborating closely with our partners.' },
    { type: 'image', src: '/gallery/gallery85.jpg', title: 'The Animation Desk', description: 'Bringing characters to life, frame by frame.' },
    { type: 'image', src: '/gallery/gallery86.jpg', title: 'Server Room', description: 'The digital backbone of our studio.' },
    { type: 'image', src: '/gallery/gallery87.jpg', title: 'Relaxation Zone', description: 'A space to unwind and recharge creative batteries.' },
    { type: 'image', src: '/gallery/gallery88.jpg', title: 'Charity Run', description: 'Our team participating in a local charity event.' },
    { type: 'image', src: '/gallery/gallery89.jpg', title: 'Product Demo', description: 'Presenting a new software feature to the team.' },
    { type: 'image', src: '/gallery/gallery90.jpg', title: 'Mentorship Moment', description: 'Senior members guiding the next generation.' },
    { type: 'image', src: '/gallery/gallery91.jpg', title: 'End of Day', description: 'Wrapping up another creative and productive day.' },
    { type: 'image', src: '/gallery/gallery92.jpg', title: 'Looking Ahead', description: 'Planning our next creative journey together.' },
  ];

  const featuredItems = allItems.filter(item => item.featured);
  const gridItems = allItems.filter(item => !item.featured);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const autoRotateRef = useRef<NodeJS.Timeout>();

  const handleNav = (index: number) => setActiveIndex((index + featuredItems.length) % featuredItems.length);
  const startAutoRotate = () => { autoRotateRef.current = setInterval(() => setActiveIndex(prev => (prev + 1) % featuredItems.length), 5000); };
  const resetAutoRotate = () => { clearInterval(autoRotateRef.current); startAutoRotate(); };

  useEffect(() => { startAutoRotate(); return () => clearInterval(autoRotateRef.current); }, []);

  return (
    <div className="gallery-page-wrapper">
      <Navigation />
      
      <div className="exhibition-container">
        <header className="exhibition-header">
          <h1 className="text-4xl md:text-6xl font-bold text-shimmer">Our Creative Gallery</h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-muted-foreground">
            A showcase of our culture, achievements, and the people behind our work.
          </p>
        </header>
        
        <section className="hero-carousel-section">
          <div className="carousel-pro-wrapper" onMouseEnter={() => clearInterval(autoRotateRef.current)} onMouseLeave={startAutoRotate}>
            <div className="carousel-pro" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {featuredItems.map(item => (
                <div key={item.src} className="carousel-slide-pro" onClick={() => setLightboxItem(item)}>
                  {item.type === 'image' ? <img src={item.src} alt={item.title} /> : <video src={item.src} autoPlay loop muted playsInline />}
                  <div className="slide-caption"><h3>{item.title}</h3></div>
                </div>
              ))}
            </div>
            <button className="carousel-pro-nav prev" onClick={() => { handleNav(activeIndex - 1); resetAutoRotate(); }}><ChevronLeft size={32} /></button>
            <button className="carousel-pro-nav next" onClick={() => { handleNav(activeIndex + 1); resetAutoRotate(); }}><ChevronRight size={32} /></button>
            <div className="carousel-dots">
              {featuredItems.map((_, index) => <button key={index} className={index === activeIndex ? 'active' : ''} onClick={() => { handleNav(index); resetAutoRotate(); }}></button>)}
            </div>
          </div>
        </section>

        <hr className="gallery-divider" />

        <section className="gallery-grid-section">
          <div className="grid-pro">
            {gridItems.map(item => (
              <div key={item.src} className="grid-item-pro" onClick={() => setLightboxItem(item)}>
                {item.type === 'image' ? <img src={item.src} alt={item.title} /> : <video src={item.src} muted loop playsInline onMouseOver={e => e.currentTarget.play()} onMouseOut={e => e.currentTarget.pause()} />}
              </div>
            ))}
          </div>
        </section>

        {lightboxItem && (
          <div className="lightbox-pro" onClick={() => setLightboxItem(null)}>
            <div className="lightbox-content-pro" onClick={(e) => e.stopPropagation()}>
              {lightboxItem.type === 'image' ? <img src={lightboxItem.src} alt={lightboxItem.title} /> : <video src={lightboxItem.src} controls autoPlay />}
              <div className="lightbox-info-pro">
                <h3>{lightboxItem.title}</h3><p>{lightboxItem.description}</p>
              </div>
            </div>
            <button className="lightbox-close-pro" onClick={() => setLightboxItem(null)}><X size={32} /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;