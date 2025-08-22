import React, { useState } from 'react';
import { X } from 'lucide-react';

// Type Definition for Guest
type GuestItem = {
  id: number;
  src: string;
  name: string;
  title: string;
  description: string;
};

const Guests = () => {
  // Generate all guest items (57 total, but excluding guest 10, so 56 guests)
  const allGuests: GuestItem[] = Array.from({ length: 57 }, (_, index) => {
    const guestNumber = index + 1;
    
    // Skip guest 10 as requested
    if (guestNumber === 10) return null;
    
    return {
      id: guestNumber,
      src: `/Guests/guests${guestNumber}.png`,
      name: '', // "Guest" text removed
      title: '',
      description: `We are privileged to welcome this esteemed guest to our gathering.`
    };
  }).filter(Boolean) as GuestItem[];

  const [lightboxGuest, setLightboxGuest] = useState<GuestItem | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());

  const handleImageError = (guestId: number) => {
    setImageLoadErrors(prev => new Set([...prev, guestId]));
  };

  const GuestImage = ({ guest, className = "", onClick }: { guest: GuestItem, className?: string, onClick?: () => void }) => {
    const hasError = imageLoadErrors.has(guest.id);
    
    if (hasError) {
      return (
        <div className={`${className} flex items-center justify-center bg-gray-800/50 text-gray-400 text-sm text-center p-4`}>
          <div>
            <div className="text-2xl mb-2">👤</div>
            {/* We don't display the generic name on error anymore */}
          </div>
        </div>
      );
    }

    return (
      <img 
        src={guest.src} 
        alt={guest.name || 'Guest'} // Use a default alt tag if name is empty
        className={className}
        onClick={onClick}
        onError={() => handleImageError(guest.id)}
        loading="lazy"
      />
    );
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f2e 25%, #2d1b3d 50%, #1a0f2e 75%, #0a0a0a 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', padding: '80px 0 60px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Our Honored Guests
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#cbd5e1',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We are privileged to welcome a distinguished gathering of visionaries, leaders, and pioneers who inspire and guide our journey.
          </p>
        </header>

        {/* Grid Section - Full Images Display */}
        <section style={{ paddingBottom: '80px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {allGuests.map(guest => (
              <div 
                key={guest.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setLightboxGuest(guest)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                {/* Image Container - Natural Height to show full image */}
                <div style={{ 
                  width: '100%',
                  overflow: 'hidden'
                }}>
                  <GuestImage 
                    guest={guest} 
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Guest Info - Conditionally render this block if there is a name or title */}
                {(guest.name || guest.title) && (
                  <div style={{ 
                    padding: '20px',
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)',
                    marginTop: 'auto'
                  }}>
                    {guest.name && (
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: guest.title ? '8px' : '0',
                        color: '#f1f5f9',
                        textAlign: 'center'
                      }}>
                        {guest.name}
                      </h3>
                    )}
                    {guest.title && (
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#94a3b8',
                        textAlign: 'center',
                        marginBottom: '0'
                      }}>
                        {guest.title}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxGuest && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px'
            }}
            onClick={() => setLightboxGuest(null)}
          >
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '30px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full Image in Lightbox */}
              <div style={{ 
                maxWidth: '100%',
                maxHeight: '70vh',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <GuestImage 
                  guest={lightboxGuest} 
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>
              
              {/* Guest Details */}
              <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                {lightboxGuest.name && (
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: lightboxGuest.title ? '12px' : '16px',
                    color: '#f1f5f9'
                  }}>
                    {lightboxGuest.name}
                  </h3>
                )}
                {lightboxGuest.title && (
                  <p style={{
                    fontSize: '1.125rem',
                    color: '#fbbf24',
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>
                    {lightboxGuest.title}
                  </p>
                )}
                <p style={{
                  fontSize: '1rem',
                  color: '#cbd5e1',
                  lineHeight: '1.7'
                }}>
                  {lightboxGuest.description}
                </p>
              </div>
            </div>
            
            <button 
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setLightboxGuest(null)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;