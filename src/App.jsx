import { useState } from 'react'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')

  const examples = [
    'A modern 3-bedroom home with an open kitchen, garden and balcony.',
    'A minimalist 2-bedroom home with a spacious living room and home office.',
    'A warm, contemporary family home with 4 bedrooms and a courtyard.'
  ]

  function handleGenerate() {
    if (!prompt.trim()) return

    setSubmittedPrompt(prompt.trim())
  }

  function useExample(example) {
    setPrompt(example)
    setSubmittedPrompt('')
  }

  return (
    <div className="home-page">
      <nav className="top-nav">
        <a className="brand" href="/">
          <span className="brand-mark">H</span>
          <span>homeplan<span className="brand-ai">.ai</span></span>
        </a>

        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#inspiration">Inspiration</a>
          <button className="nav-button" onClick={() => {
            document.getElementById('design-prompt')?.focus()
          }}>
            Start designing <span>↗</span>
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              YOUR HOME, REIMAGINED
            </div>

            <h1>
              Imagine it.
              <br />
              <span>We'll design it.</span>
            </h1>

            <p className="hero-description">
              From a simple idea to a thoughtful home design.
              Describe the home you've always imagined, and
              let your design journey begin.
            </p>

            <div className="prompt-card">
              <label htmlFor="design-prompt">
                DESCRIBE YOUR DREAM HOME
              </label>

              <textarea
                id="design-prompt"
                value={prompt}
                onChange={(event) => {
                  setPrompt(event.target.value)
                  setSubmittedPrompt('')
                }}
                placeholder="I'd love a modern 3-bedroom home with an open kitchen, a spacious living room, a small garden and a balcony..."
                rows="4"
              />

              <div className="prompt-footer">
                <span>✦ Be as descriptive as you like</span>

                <button
                  className="generate-button"
                  onClick={handleGenerate}
                  disabled={!prompt.trim()}
                >
                  Generate my home <span>→</span>
                </button>
              </div>
            </div>

            <div className="example-prompts">
              <span className="example-heading">NEED SOME INSPIRATION?</span>

              <div className="example-list">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    className="example-chip"
                    onClick={() => useExample(example)}
                  >
                    {example}
                    <span>↗</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-image">
              <div className="image-label">
                <span className="label-dot"></span>
                DESIGN INSPIRATION
              </div>

              <div className="image-caption">
                <span>01 / THE MODERN HOME</span>
                <h2>Spaces that<br />feel like you.</h2>
              </div>
            </div>

            <div className="floating-note">
              <span className="note-icon">⌂</span>
              <div>
                <strong>Thoughtful by design</strong>
                <p>Every space begins with an idea.</p>
              </div>
            </div>

            <div className="visual-number">01</div>
          </div>
        </section>

        {submittedPrompt && (
          <section className="preview-section" aria-live="polite">
            <div className="section-eyebrow">YOUR DESIGN BRIEF</div>
            <h2>A home begins with an idea.</h2>
            <p className="submitted-prompt">“{submittedPrompt}”</p>

            <div className="demo-notice">
              <span>✦</span>
              <div>
                <strong>Your design brief is ready.</strong>
                <p>
                  This is currently a homepage prototype. The next milestone
                  is connecting an AI service to interpret your prompt and
                  generate a floor plan. No AI-generated design has been
                  created yet.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="how-section" id="how-it-works">
          <div>
            <div className="section-eyebrow">A SIMPLER WAY TO DESIGN</div>
            <h2>From imagination<br />to your future home.</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span>01</span>
              <h3>Describe</h3>
              <p>Tell us about your home, your lifestyle and the spaces you need.</p>
            </article>

            <article className="step-card">
              <span>02</span>
              <h3>Visualize</h3>
              <p>Explore a thoughtfully planned 2D floor plan and 3D home model.</p>
            </article>

            <article className="step-card">
              <span>03</span>
              <h3>Refine</h3>
              <p>Make changes to your design until it feels right for you.</p>
            </article>
          </div>
        </section>

        <section className="inspiration-section" id="inspiration">
          <div>
            <div className="section-eyebrow">THE HOMEPLAN APPROACH</div>
            <h2>Good design starts<br />with understanding.</h2>
          </div>
          <p>
            Your home should reflect the way you live.
            We are building a space where ideas become plans,
            and plans become something you can explore.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">H</span>
          <span>homeplan<span className="brand-ai">.ai</span></span>
        </a>
        <span>DESIGNED AROUND YOUR IDEAS.</span>
        <span>© 2026 HOMEPLAN AI</span>
      </footer>
    </div>
  )
}

export default App