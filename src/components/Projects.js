import Project from './Project'

const Projects = () => {
    return (
        <section id="featured-project-section" class="featured-project-section">
            <div class="wrapper">
                <div class="content">
                    <div class="project-introduction">
                        <h1>Featured Projects</h1>
                        <p>Here are a few of my notable projects. All source code and documentation is provided via a GitHub link to its respective repository. If you would like to check out my other projects, just click on one of the github links below and visit my profile.</p>
                    </div>
                    
                    <div class="projects">
                        <Project image="https://i.ibb.co/Bnmw0rH/maxresdefault-750x400.jpg" name="JSON Message Processing Tool (Boeing Satellite Systems Internship)" description="During my summer internship at Boeing Satellite Systems I worked with the WGS Anti-Jamming Test/Integration team to develop a Java Tool to help Boeing Engineers test new software. The JSON Message Processing Tool allows users to filter messages coming from the Satellites ground station based on a variety of specifications. Project Requirements and specifications are listed in its Github repository." github="https://github.com/Legitzx/JSON-Message-Processing-Tool" />
                        <Project image="https://i.ibb.co/M6BNQ0b/android-750x400.png" name="Computer Science & Electrical Engineering (CSEE) Cookie Tracker" description="The CSEE Cookie Tracker was developed as a service project for the department of Computer Science & Electrical Engineering at my school. This app will serve as a lab assignment for Computer Science students. The app tracks cookies (which are essentially virtual points) that are given out in the class." github="https://github.com/Legitzx/CSEECookieTracker" />
                        <Project image="https://i.ibb.co/ym2j890/aeae578399fc76f4ebc94f1b18b5e5d2-750x400.png" name="Maze Generator" description="After learning the basics of Java Swing, I decided to develop a Maze Generator that generates mazes using the Depth-first search algorithm. This was one of my first projects that utilizes such an algorithm, also it was my first time developing a graphical user interface (GUI) in Java. " github="https://github.com/Legitzx/Maze-Generator" />
                        <Project image="https://i.ibb.co/6HgWkYj/0550b180-71f6-11eb-9e71-98ae80d3df0f-750x400.jpg" name="Guess It Discord Bot" description="The Guess It bot is a Discord Bot that allows server administrators to start fun minigames to engage with their community. As of 3/18/21 the bot has been added to over 1700+ servers and has a combined user account of around 700k. Repository is currently private in respect to the owner who paid for the development of the bot." github="https://github.com/Legitzx" />
                        <Project image="https://i.ibb.co/6HgWkYj/0550b180-71f6-11eb-9e71-98ae80d3df0f-750x400.jpg" name="Discord Connect" description="This Discord Bot connects people with similar interests to improve social contact during the COVID-19 pandemic. During this time our social life has been severely affected which is affecting people's mental health. Developed for Helloo Hacks hackathon [Won Best Use of API]. More information can be found in the Github Repository." github="https://github.com/Legitzx/DiscordConnect" />
                        <Project image="https://i.ibb.co/4j6jbxZ/i-Stock-33780344-VSMALL-750x400.jpg" name="Password Manager" description="Developed a secure password manager that securely stores users login information. Uses salted hashes (bcrypt) and encrypts data using AES-256 (Advanced Encryption Standard) bit encryption algorithm. Uses a backend REST api written in Golang to securely manage users data." github="https://github.com/Legitzx/PasswordManager" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
