
import { useState } from 'react'
import FloorPlan from './FloorPlan'
import './App.css'

function App() {
  const [page, setPage] = useState('dashboard')
  const [project, setProject] = useState({
    name: '',
    length: '',
    width: '',
    floors: '1',
    bedrooms: '2',
    bathrooms: '2',
    requirements: ''
  })

  const [created, setCreated] = useState(false)

  function handleChange(e) {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (Number(project.length) <= 0 || Number(project.width) <= 0) {
      alert('Please enter valid plot dimensions.')
      return
    }

    setCreated(true)
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>🏡 HomePlan AI</h2>

        <nav>
          <p onClick={() => setPage('dashboard')}>Dashboard</p>
          <p onClick={() => setPage('project')}>My Projects</p>
          <p onClick={() => setPage('project')}>Floor Plans</p>
          <p onClick={() => setPage('project')}>3D Designs</p>
        </nav>

        <div className="sidebar-bottom">
          <p>Settings</p>
          <p>Help & Support</p>
        </div>
      </aside>

      <main className="main-content">

        {page === 'dashboard' ? (
          <>
            <header>
              <div>
                <h1>Design your dream home.</h1>
                <p>Turn your ideas into beautiful house plans with AI.</p>
              </div>
              <button onClick={() => {
                setPage('project')
                setCreated(false)
              }}>
                + New Project
              </button>
            </header>

            <section className="welcome">
              <div>
                <span>YOUR PERSONAL AI ARCHITECT</span>
                <h2>Imagine it. Describe it. Build it.</h2>
                <p>
                  Tell us about your dream home and let AI help
                  you bring your vision to life.
                </p>
                <button onClick={() => {
                  setPage('project')
                  setCreated(false)
                }}>
                  Start Designing →
                </button>
              </div>
            </section>

            <section className="projects">
              <h2>Start with a project</h2>

              <div className="project-grid">
                <div className="project-card" onClick={() => setPage('project')}>
                  <span>🏠</span>
                  <h3>Generate a Floor Plan</h3>
                  <p>Create a layout from your plot dimensions and requirements.</p>
                </div>

                <div className="project-card" onClick={() => setPage('project')}>
                  <span>🧱</span>
                  <h3>Explore 3D Designs</h3>
                  <p>Visualize your future home in three dimensions.</p>
                </div>

                <div className="project-card" onClick={() => setPage('project')}>
                  <span>💬</span>
                  <h3>Ask AI to Design</h3>
                  <p>Describe your dream home in your own words.</p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="form-section">
            <button className="back-button" onClick={() => setPage('dashboard')}>
              ← Back to Dashboard
            </button>

            {!created ? (
              <>
                <h1>Create your dream home</h1>
                <p className="form-description">
                  Tell us about your plot and what kind of home you want.
                </p>

                <form onSubmit={handleSubmit}>
                  <label>Project Name</label>
                  <input
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                    placeholder="e.g. My Dream Home"
                    required
                  />

                  <h3>Plot Dimensions (in feet)</h3>

                  <div className="form-row">
                    <div>
                      <label>Plot Length</label>
                      <input
                        type="number"
                        name="length"
                        min="1"
                        value={project.length}
                        onChange={handleChange}
                        placeholder="e.g. 40"
                        required
                      />
                    </div>

                    <div>
                      <label>Plot Width</label>
                      <input
                        type="number"
                        name="width"
                        min="1"
                        value={project.width}
                        onChange={handleChange}
                        placeholder="e.g. 30"
                        required
                      />
                    </div>
                  </div>

                  <h3>House Requirements</h3>

                  <div className="form-row">
                    <div>
                      <label>Number of Floors</label>
                      <select name="floors" value={project.floors} onChange={handleChange}>
                        <option value="1">1 Floor</option>
                        <option value="2">2 Floors</option>
                        <option value="3">3 Floors</option>
                      </select>
                    </div>

                    <div>
                      <label>Bedrooms</label>
                      <select name="bedrooms" value={project.bedrooms} onChange={handleChange}>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3 Bedrooms</option>
                        <option value="4">4 Bedrooms</option>
                        <option value="5">5 Bedrooms</option>
                      </select>
                    </div>
                  </div>

                  <label>Bathrooms</label>
                  <select name="bathrooms" value={project.bathrooms} onChange={handleChange}>
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="4">4 Bathrooms</option>
                  </select>

                  <label>Additional Requirements</label>
                  <textarea
                    name="requirements"
                    value={project.requirements}
                    onChange={handleChange}
                    placeholder="e.g. I want a balcony, parking space, open kitchen..."
                    rows="4"
                  />

                  <button type="submit" className="create-button">
                    Create Project →
                  </button>
                </form>
              </>
            ) : (
              <div className="success-section">
                <h1>🎉 Project Details Saved!</h1>
                <p>Your project information has been captured.</p>

                <div className="project-summary">
                  <h2>{project.name}</h2>
                  <p>Plot: {project.length} × {project.width} feet</p>
                  <p>Plot area: {Number(project.length) * Number(project.width)} sq. ft.</p>
                  <p>Floors: {project.floors}</p>
                  <p>Bedrooms: {project.bedrooms}</p>
                  <p>Bathrooms: {project.bathrooms}</p>
                  <p>Requirements: {project.requirements || 'None specified'}</p>
                </div>
                <FloorPlan project={project} />

                <p className="next-message">
                  Next, we'll use these details to generate your floor plan.
                </p>

                <button onClick={() => setPage('dashboard')}>
                  Back to Dashboard
                </button>
              </div>
            )}
          </section>
        )}

      </main>
    </div>
  )
}

export default App
