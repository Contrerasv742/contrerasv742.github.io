function createHeader() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  
  const pages = [
    {page: 'index', label: 'Home'},
    {page: 'projects', label: 'Projects'},
    {page: 'education', label: 'Education'},
    {page: 'interests', label: 'Interests'},
    {page: 'mech', label: 'Mech'}
  ];
  
  const navButtons = pages.map(({page, label}) => {
    const isActive = page === currentPage ? ' active' : '';
    return `<a href="${page}.html" class="nav-button${isActive}">${label}</a>`;
  }).join('');
  
  return `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="nav-buttons">
            ${navButtons}
          </div>
        </div>
      </div>
    </header>
  `;
}

class Projects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="projects container">
            <!-- Project 1 -->
            <div class="project-card from-left">
                <div class="project-image"><img src="imgs/login_page.png" alt="Vault..."></div>
                <div class="project-content">
                    <h2 class="project-title">Vault</h2>
                    <p class="project-desc">
                        • Developed a deep understanding of industry-standard
                        encryption methods: 2048-bit RSA for key exchange and
                        AES-256 for data encryption
                    </p>
                    <p class="project-desc">
                        • Implemented a hybrid cryptosystem, combining
                        asymmetric and symmetric encryption for optimal
                        security and performance
                    </p>
                    <p class="project-desc">
                        • Designed an intuitive user interface with features
                        like password strength assessment, auto-fill
                        functionality, and secure password generation
                    </p>
                    <p class="project-desc">
                        • Utilized JSON for efficient data serialization,
                        enabling easy local storage and future cloud
                        integration
                    </p>
                    <div class="tech-stack">
                        <span class="tech">C++</span>
                        <span class="tech">Git</span>
                        <span class="tech">JSON</span>
                        <span class="tech">Cybersecurity</span>
                        <span class="tech">Cryptography</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Contrerasv742/vault" class="project-link">
                            View Demo
                        </a>
                        <a href="https://github.com/Contrerasv742/vault" class="project-link secondary">
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="project-card">
                <div class="project-content">
                    <h2 class="project-title">Emulator</h2>
                    <p class="project-desc">
                        • Applied extensive knowledge of computer architecture
                        to develop a highly efficient virtual CPU and GPU
                    </p>
                    <p class="project-desc">
                        • Learned the intricacies of continuous integration and
                        crafted robust .yml files to streamline development
                    </p>
                    <p class="project-desc">
                        • Strengthened team leadership and collaboration skills
                        through extensive work on git and continuous
                        integration
                    </p>
                    <div class="tech-stack">
                        <span class="tech">C++</span>
                        <span class="tech">Git</span>
                        <span class="tech">Team Management</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Demo</a>
                        <a href="#" class="project-link secondary">GitHub Repo</a>
                    </div>
                </div>
                <div class="project-image"><span>Project 2</span></div>
            </div>

            <!-- Project 3 -->
            <div class="project-card from-left">
                <div class="project-image"><span>Mult-threaded HTTP Server</span></div>
                <div class="project-content">
                    <h2 class="project-title">Multi-threaded HTTP Server</h2>
                    <p class="project-desc">
                        • Gained a deep understanding of common HTTP request
                        formatting and best practices
                    </p>
                    <p class="project-desc">
                        • Implemented a sophisticated reader-writer lock system
                        to optimize performance and ensure data integrity
                    </p>
                    <p class="project-desc">
                        • Developed a robust server capable of handling 100+
                        concurrent HTTP requests efficiently
                    </p>
                    <div class="tech-stack">
                        <span class="tech">C</span>
                        <span class="tech">Git</span>
                        <span class="tech">Regex</span>
                        <span class="tech">HTTP</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Demo</a>
                        <a href="#" class="project-link secondary">GitHub Repo</a>
                    </div>
                </div>
            </div>

            <!-- Project 4 -->
            <div class="project-card">
                <div class="project-content">
                    <h2 class="project-title">Webscraper</h2>
                    <p class="project-desc">
                        • Engineered a powerful bot that seamlessly interacts
                        with Twitter, opening up new data collection
                        opportunities
                    </p>
                    <p class="project-desc">
                        • Mastered advanced web scraping techniques using C,
                        enabling the extraction of valuable insights
                    </p>
                    <p class="project-desc">
                        • Developed strong SQL skills to effectively store,
                        manage, and analyze the scraped data
                    </p>
                    <div class="tech-stack">
                        <span class="tech">C</span>
                        <span class="tech">HTML/CSS</span>
                        <span class="tech">JavaScript</span>
                        <span class="tech">SQL</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Demo</a>
                        <a href="#" class="project-link secondary">GitHub Repo</a>
                    </div>
                </div>
                <div class="project-image"><span>Project 4</span></div>
            </div>

            <!-- Project 5 -->
            <div class="project-card from-left">
                <div class="project-image"><span>Lunar Rover</span></div>
                <div class="project-content">
                    <h2 class="project-title">Lunar Rover</h2>
                    <p class="project-desc">
                        • Selected to participate in the prestigious 12-week,
                        NASA-funded engineering workforce development
                    </p>
                    <p class="project-desc">
                        • Designed and optimized a lunar rover filtration
                        system using CAD software, implementing Flow Charts and
                        Verification Matrices to validate system requirements
                    </p>
                    <p class="project-desc">
                        • Led technical documentation efforts for subsystem
                        integration, developing comprehensive verification
                        procedures and test protocols
                    </p>
                    <p class="project-desc">
                        • Developed redundant data verification systems that
                        stabilized transmission risk at Level 3 (moderate)
                        through implementation of checksums and error
                        correction protocols
                    </p>
                    <div class="tech-stack">
                        <span class="tech">Verification Matrix</span>
                        <span class="tech">Budgeting</span>
                        <span class="tech">Team Work</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Demo</a>
                        <a href="#" class="project-link secondary">GitHub Repo</a>
                    </div>
                </div>

            <!-- Project 6 -->
            <div class="project-card from-left">
                <div class="project-image"><span>Lunar Rover</span></div>
                <div class="project-content">
                    <h2 class="project-title">Lunar Rover</h2>
                    <p class="project-desc">
                        • Designed and fabricated a fully 3D-printed 
                          autonomous robot capable of firing M&M's 
                          at IR beacons and obstacles
                    </p>
                    <p class="project-desc">
                        • Engineered modular stacking design with yaw 
                          and pitch tilt system using stepper motors
                    </p>
                    <p class="project-desc">
                        • Mitigated stepper motor limitations through
                          mechanical optimization and friction (via 
                          rubber band) enhancement
                    </p>
                    <p class="project-desc">
                        • Resolved critical center-of-mass displacement
                          issues through iterative counterweight 
                          optimization and strategic plastic volume 
                          redistribution, maintaining structural integrity 
                          while rebalancing 386mm³ design within volume 
                          constraints
                    </p>
                    <div class="tech-stack">
                        <span class="tech">Verification Matrix</span>
                        <span class="tech">Budgeting</span>
                        <span class="tech">Team Work</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="project-link">View Demo</a>
                        <a href="#" class="project-link secondary">GitHub Repo</a>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('portfolio-projects', Projects);
