import "../App.css"


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Full Stack Development</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <p style={{ padding: "10px", margin: "5px", border: "1px solid", backgroundColor: "black", color: "white" }}>
                <h5 style={{ color: "violet", justifyContent: "center" }}> Development, Web Development</h5>
                <br />
                <h3>The Web Developer</h3>
                <br />
                Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!
                <br />

                <br />

                <br />

                <br />

                <br />

            </p>
            <div>

                <p style={{ padding: "10px", margin: "5px", border: "1px solid" }}>
                    <h2>About</h2>

                    What you learn
                    The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021<br />
                    Make REAL web applications using cutting-edge technologies<br />
                    Create responsive, accessible, and beautiful layouts<br />
                    Recognize and prevent common security exploits like SQL-Injection & XSS<br />
                    Continue to learn and grow as a developer, long after the course ends<br />
                    Create a blog application from scratch using Node, Express, and MongoDB.<br />
                    Create a complicated yelp-like application from scratch<br />
                    Deploy your applications and work with cloud databases<br />
                    Create static HTML and CSS portfolio sites and landing pages<br />
                    Think like a developer. Become an expert at Googling code questions!<br />
                    Create complex HTML forms with validations<br />

                </p>
                <div>
                    <p style={{ margin: 16 }}>
                        <h3 style={{ margin: 10, color: "purple" }}>Description</h3>
                        Now with over 10 hours of React content.  Just updated on May 15th, 2023.<br />

                        Massive new React expansion pack covers: React basics, JSX, props, state, Vite, MaterialUI, hooks, useEffect, React design patterns, and more.<br />

                        Hi! Welcome to the brand new version of The Web Developer Bootcamp, Udemys most popular web development course. <br />

                        This course was just completely overhauled to prepare students for the 2023 job market, with over 60 hours of brand new content.<br />

                        This is the only course you need to learn web development. There are a lot of options for online developer training,<br />
                        but this course is without a doubt the most comprehensive and effective on the market.
                        Here why:

                        This is the only Udemy course taught by a professional bootcamp instructor with a track record of success.
                    </p>
                </div>
            </div>

            <footer style={{ padding: "16px", margin: "5px", height: "90px", border: "1px solid", color: "white", backgroundColor: "black" }}>

                <h5>Top companies choose Udemy Business to build in-demand career skills.</h5>

            </footer>


        </div>

    )
}

