
import { Link } from "react-router-dom";


const links = [
    {
        name: "FULL STACK DEVELOPMENT",
        path: "/fullstack",
        imgs: "https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg",

    },
    {
        name: "DATA SCIENCE",
        path: "/datascience",
        imgs: "https://wallpaperaccess.com/full/1704555.jpg"
    },
    {
        name: "CYBER SECURITY",
        path: "/cybersecurity",
        imgs: "https://th.bing.com/th/id/OIP.WBzz0smt-skJwF4TdklCtQAAAA?rs=1&pid=ImgDetMain",

    }
];


const HomePage = () => {
    return (
        <>
            {links.map((link) => (
                <Link key={link.name} to={link.path} style={{ margin: 25, color: "black", fontSize: "20px" }}>

                    <img
                        alt={link.name}
                        style={{ height: "200px", width: "300px", objectFit: "contain" }}
                        src={link.imgs}
                    />
                    {link.name}

                </Link>
            ))}

        </>
    )
}
export default HomePage;