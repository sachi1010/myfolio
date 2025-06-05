import { Link } from 'react-router-dom';
import '../css/Header.css';


export const Header = () => {
    

    return (
        <div data-aos="fade-down" className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top">
                <div className="container-fluid">
                    <span className="navbar-brand fw-bold">Sachithananthan</span>
                    <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
