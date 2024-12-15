import React from 'react'

function About() {
  return (
    <>
    <div className="row">

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Src Folder</h5>
        <p className="card-text">assets/: Houses static assets used in your app (e.g., logos, images).
components/: Reusable UI components.
pages/: Page-specific components, useful for routing setups.
hooks/: Custom hooks for encapsulating logic.
contexts/: For using the React Context API to manage global state.
styles/: Centralized styling (CSS, SCSS, or other pre-processors).
App.jsx: The main component defining the app structure.
main.jsx: The entry point where React is rendered into the DOM.</p>
        <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Configuration and Documentation:</h5>
        <p className="card-text">package.json: Lists dependencies and project metadata.
vite.config.js: Configures Vite for customization if needed.public/: Contains static assets like the favicon.
 Files here are served as-is and won't be processed by Vite.
README.md: For documenting your project.App.jsx: The main component defining the app structure.
main.jsx: The entry point where React is rendered into the DOM.</p>
        <a href="#" className="btn btn-primary" data-mdb-ripple-init>Go somewhere</a>
      </div>
    </div>
  </div>
</div></>
  )
}

export default About