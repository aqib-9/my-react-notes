import { BrowserRouter, Routes, Route, Link } from "react-router";

function React_Router() {
    return (
        <>
            <h1>React router</h1>
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/contact">Contact</Link> |{" "}
                    <Link to="/services">Services</Link> |{" "}
                    <Link to="/products">Products</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<h2>Home Page</h2>} />
                    <Route path="/about" element={<h2>About Page</h2>} />
                    <Route path="/contact" element={<h2>Contact Page</h2>} />
                    <Route path="/services" element={<h2>Services Page</h2>} />
                    <Route path="/products" element={<h2>Products Page</h2>} />
                    <Route path="*" element={<h2>404 Not Found</h2>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default React_Router;