import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to My Portfolio</h2>
        <p className="hero-subtitle">Creating Beautiful Digital Experiences</p>
        <button className="cta-button" onClick={() => {
          const contact = document.getElementById('contact');
          contact?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}
