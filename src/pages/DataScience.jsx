import "../App.css"


export default function DataScience() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Data Science</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Syllabus</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Certification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Placement</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <p style={{ padding: "10px", margin: "5px", border: "1px solid", backgroundColor: "#2e3a57", color: "white" }}>

                <br />

                <br />

                <br />
                <h1 style={{ justifyContent: "center" }}>Data Science</h1>
                <br />

                <br />

                <br />

                <br />

            </p>
            <div>
                <p style={{ padding: "10px", margin: "5px", border: "1px solid" }}>
                    <h3>About Data Science Course</h3>
                    IIT-M Pravartak Certified Advanced Programmer with Data Science Mastery Program is a leading-edge Technological Program paving your way to an<br />
                    assured lucrative career. It is an integrated course directed by GUVI - an IIT-M incubated company. Instructed by the industry’s best Technical<br />
                    Experts & Founders(Ex-Paypal Employees), this program offers mentorship through Data Experts and directs you to the Fortune 500 companies. <br />
                    The vision is to make the premium organizations discover the Right talent through GUVI’s Zen Class.
                </p>
                <div>
                    <img src="https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg"></img>

                </div>
            </div>

            <footer style={{ padding: "16px", margin: "5px", height: "90px", border: "1px solid", color: "white", backgroundColor: "black" }}>
                <h5>Still have queries? Contact Us
                    Request a callback. An expert from the admission office will call you in the next 24 working hours.
                    You can also reach out to us at cs@vpms</h5>
            </footer>


        </div>

    )
}

