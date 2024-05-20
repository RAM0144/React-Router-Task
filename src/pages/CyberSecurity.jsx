import "../App.css"


export default function C() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Cyber Security</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Briefings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Trainings</a>
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
            <div style={{ padding: "10px", margin: "5px", height: 300, border: "1px solid", backgroundColor: "black", color: "white" }}>

                <br />
                <br />
                <br />
                <br />
                <h1 style={{ justifyContent: "center", alignItems: "center" }}>Cyber Security</h1>

            </div>
            <div>
                <p style={{ padding: "10px", margin: "5px", border: "1px solid" }}>
                    <h3>What is cybersecurity?</h3>
                    <p>
                        Cybersecurity refers to any technology, measure or practice for preventing cyberattacks or mitigating their impact.

                    </p>

                </p>
                <div>
                    <img src=""></img>

                </div>
                <p>

                    Published: 27 October 2023
                    What is cybersecurity?
                    Cybersecurity refers to any technology, measure or practice for preventing cyberattacks or mitigating their impact.

                    Cybersecurity aims to protect individuals and organizations systems, applications, computing devices, sensitive data and financial
                    assets against computer viruses, sophisticated and costly ransomware attacks, and more.

                    Cyberattacks have the power to disrupt, damage or destroy businesses, and the cost to victims keeps rising. For example, according to
                    IBMs Cost of a Data Breach 2023 report,

                    The average cost of a data breach in 2023 was USD 4.45 million, up 15% over the last three years;

                    The average cost of a ransomware-related data breach in 2023 was even higher, at USD 5.13 million. This number does not include the cost of the ransom payment,
                    which averaged an extra USD 1,542,333, up 89% from the previous year.
                    By one estimate, cybercrime might cost the world economy USD 10.5 trillion per year by 2025 (link resides outside ibm.com).1

                    The expanding information technology (IT) trends of the past few years include:

                    a rise in cloud computing adoption,
                    network complexity,
                    remote work and work from home,
                    bring your own device (BYOD) programs,
                    and connected devices and sensors in everything from doorbells to cars to assembly lines.
                    All these trends create tremendous business advantages and human progress, but also provide exponentially more opportunities for cybercriminals to attack.

                    Not surprisingly, a recent study found that the global cybersecurity worker gap—the gap between existing cybersecurity workers and cybersecurity jobs that need to be filled—was
                    3.4 million workers worldwide.2 Resource-strained security teams are focusing on developing comprehensive cybersecurity strategies that use advanced analytics, artificial intelligence
                    and automation to fight cyberthreats more effectively and minimize the impact of cyberattacks.

                    Report
                    IBM Security X-Force Threat Intelligence Index 2023
                    The X-Force Threat Intelligence Index offers new insights into top threats to help you prepare and respond faster to cyberattacks, extortion and more.

                    Related content
                    Register for the Cost of a Data Breach report


                </p>
            </div>

            <footer style={{ padding: "16px", margin: "5px", height: "90px", border: "1px solid", color: "white", backgroundColor: "black" }}>
                
                <p1>about @cybersecurity.com</p1>
                <a href="#"><i className="fab fa-facebook fs-3"></i></a>

                <a href="#"><i className="fab fa-twitter fs-3"></i></a>

                <a href="#"><i className="fab fa-instagram fs-3"></i></a>
            </footer>


        </div>

    )
}

