import React from "react";
import{BrowserRoute as Router, Route, Switch} from 'react-router-dom';
class PageContent extends React.Component {
    render() {
       return(
     
        <div class="container-fluid p-0">
        
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Siyu
                    <span class="text-primary">Lyu</span>
                </h1>
                <div class="subheading mb-5">
                    Greater Seattle Area  · (517) 515-3433 ·
                    <a href="mailto:name@email.com">lyu.si@northeastern.edu</a>
                </div>
                <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div class="social-icons">
                    <a class="social-icon" href="https://www.linkedin.com/in/siyu-lyu-728460103/"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-icon" href="https://github.com/siyuLyu?tab=repositories"><i class="fab fa-github"></i></a>
                    {/* <a class="social-icon" href="#"><i class="fab fa-twitter"></i></a> */}
                    {/* <a class="social-icon" href="#"><i class="fab fa-facebook-f"></i></a> */}
                </div>
            </div>
        </section>
        <hr class="m-0" />
      
        <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2 class="mb-5">Experience</h2>
               
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Mobile Developer Intern</h3>
                        <div class="subheading mb-3">Yaonology</div>
                        <p>• Builded and Supported the entire IOS/Android application lifecycle for fintech company by using Flutter
                        framework and coding in Dart</p>
                        <p>• Integrated WooCommerce RESTful APIs into mobile application to guided users generate buy/sell signals using
algorithmic trading strategies on S&P 500 and Bitcoin in order to gain higher profit</p>
                        <p>• Reducing unnecessary data flow and enhancing load time performance by 20%</p>
                        <p>• Collaborated with UX design team to implemented UI and core features of mobile application to improve user
experiences</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">July 2020 - Present</span></div>
                </div>
            </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="projects">
            <div class="resume-section-content">
                <h2 class="mb-5">Projects</h2>
               
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Job Master Application</h3>
                        <div class="subheading mb-3">Web Application</div>
                        <p>• Designed and implemented a full-stack job search website via React/Redux , Java Spring Boot</p>
                        <p>• Created RESTful API with SpringBoot, utilized Spring Security for user authentication and authorization</p>
                        <p>• Used Hibernate for Persistence support as backend; H2 for development environment, and Heroku for
                            deployment environment</p>
                        <p>• Created the fronted with React and MDbootstrap, integrated with Redux for state managment</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">March 2020 - April 2020</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Long URL to Short URL</h3>
                        <div class="subheading mb-3">Web Application</div>
                         <p>• Developed a full stack web application with MVC architecture, using the MERN stack (MongoDB, Express, React
                            and Node.js) to deliver URL shorten service</p>
                        <p>• Used React / Redux to maintain the Data/Logic/View separation shown in the previous section in front end
                            design, implemented Mongoose schema to store data in backend</p>
                        <p>• Generated CRUD operations with database via RESTful API with Mongodb and Maggose for data modeling and
                            presistance</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">March 2020 - March 2020</span></div>
                </div>

                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Gesture-based Music Notation System</h3>
                        <div class="subheading mb-3">Web Application</div>
                        <p>• Developed GUI for users to generate music components and gesture models, programming in Java</p>
                        <p>• Captured and analyzed thousands of input gestures from users and to compare the glyphs to the model stored in
                        the database</p>
                        <p>• Implemented serialization and deserialization to store and retrive data</p>
                        <p>• Developed react systems such as draw, save, undo, exit and so on to support user’s operation</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">September 2019 - December 2019</span></div>
                </div>
                <p></p>
                <p></p>
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Movie Searching Engine</h3>
                        <div class="subheading mb-3">Web Application</div>
                        <p>• Built file crawler, file parser and crawled movie information via C programming language by using advanced
                            data structure</p>
                        <p>• Established connection between multiple clients and servers with socket programming and self-defined protocol</p>
                        <p>• Accelerated file indexing and processing with multi-thread and concurrency</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">Janurary 2019 - May 2019</span></div>
                </div>

            </div>
        </section>
        <hr class="m-0" />
      
        <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2 class="mb-5">Education</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Northeastern University</h3>
                        <div class="subheading mb-3">Master of Science</div>
                        <div>Computer Science </div>
                        <p>GPA: 3.70</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">August 2018 - Present</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Michigan State University</h3>
                        <div class="subheading mb-3">Bachelor of Arts</div>
                        <div>Major: Computer Science </div>
                        <div>Minor: German</div>
                        <p>GPA: 3.29</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">August 2013 - December 2016</span></div>
                </div>
            </div>
        </section>
        <hr class="m-0" />
       
        <section class="resume-section" id="skills">
            <div class="resume-section-content">
                <h2 class="mb-5">Skills</h2>
                <div class="subheading mb-3">Programming Languages & Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    <li class="list-inline-item"><i class="fab fa-java"></i></li>
                    <li class="list-inline-item"><i class="fab fa-python"></i></li>
                    <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                </ul>
                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Agile Development & Scrum
                    </li>
                </ul>
            </div>
        </section>
        <hr class="m-0" />
       
        <section class="resume-section" id="interests">
            <div class="resume-section-content">
                <h2 class="mb-5">Interests</h2>
                <p>Apart from being a web developer/ Mobile developer, I love fashion, make ups, running, reading and yummy food.</p>
                <p class="mb-0">I love fried chicken, french fries, pizza and lasagna. Just love anything unhealthy, but I eat plenty of veggies for fitness and healthy purpose. </p>
            </div>
        </section>
        <hr class="m-0" />
       
        <section class="resume-section" id="awards">
            <div class="resume-section-content">
                <h2 class="mb-5">Scholarship</h2>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        Merit Scholarship
                    </li>
                    
                </ul>
            </div>
        </section>
    </div>
       )
    }
}


export default PageContent