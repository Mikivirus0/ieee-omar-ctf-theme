// IEEE OMAN CTF 2025 - Main Page Component

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="hero">
        <div className="container wrap">
          <div className="row" style={{alignItems: 'center'}}>
            <div className="col">
              <span className="eyebrow">IEEE Student Branch · Oman</span>
              <h1 className="title">IEEE OMAN CTF 2025</h1>
              <p className="lead">
                Professional jeopardy‑style cybersecurity competition organized by IEEE Oman Student 
                and Young Professionals Congress 2025 with challenges in Web, Pwn, Reverse, Crypto & Forensics. 
                Compete with precision—no gimmicks.
              </p>
              
              <div className="btn-group">
                <a className="btn btn-solid" href="/register">
                  <i className="fa-solid fa-user-plus"></i> Register
                </a>
                <a className="btn btn-ghost" href="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </a>
                <a className="btn btn-ghost" href="/challenges">
                  <i className="fa-solid fa-flag"></i> Challenges
                </a>
                <a className="btn btn-ghost" href="/scoreboard">
                  <i className="fa-solid fa-trophy"></i> Scoreboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
