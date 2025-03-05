// Frontend: Admin Dashboard (React.js + Bootstrap)
import { ImInsertTemplate } from "react-icons/im";
import { Container, Row, Col, Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {  FiMenu } from 'react-icons/fi';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";




const Dashborad = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
  <div className={`sidebar ${menuOpen ? "show" : ""}`}>
                <div className="sidebar-header">
                    <FaTimes className="close-menu" onClick={() => setMenuOpen(false)} />
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="active"><FaHome /> Dashboard</Link></li>
                    <li><Link to="insert"><FaPlus /> Add Product</Link></li>
                    <li><Link to="displaycustomer"><FaTable /> Display User</Link></li>
                    <li><Link to="customerorder"><MdOutlineProductionQuantityLimits />Customer Orders</Link></li>
                    <li><Link to="update"><FaEdit /> Update Products</Link></li>
                    <li><Link to="edit"><FaEdit /> Edit Products</Link></li>
                    <li><Link to="customerupdate"><FaEdit /> Update Customers</Link></li>
                    <li><Link to="/" className="logout"><FaSignOutAlt /> Logout</Link></li>
                </ul>
            </div>


      <Container fluid className="bg-dark min-vh-100 p-4" style={{ marginLeft: '250px' }}>
        <Navbar bg="white" expand="lg" className="mb-4 shadow-sm p-3 rounded" style={{position:"sticky", top:"0", zIndex:"10"}}>
          <Navbar.Brand href="#"><FiMenu /></Navbar.Brand>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search Dashboard" className="me-2" />
          </Form>
        </Navbar>
     <Outlet/>
      </Container>
    {/* </div> */}
    </>
  );
};

export default Dashborad;
