import linkedin from './assets/linkedin-icon.svg';
import github from './assets/github-icon.svg';

const Navbar = () => {
    return (
        <div class="navbar">
            <nav>
                <a href="index.html" class="logo">Luciano Kholos</a>

                <div class="container">
                    <ul class="main-navbar-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#featured-project-section">Projects</a></li>
                        <li><a id="last-item-navbar" href="index.html#contact-section">Contact</a></li>
                    </ul>

                    <ul class="social-media-links">
                        <li><a href="https://github.com/Legitzx" target="_blank"><img src={github} alt="Github Icon"/></a></li>
                        <li><a href="https://www.linkedin.com/in/luciano-kholos-422a5b1a9/" target="_blank"><img src={linkedin} alt="Linkedin Icon"/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
