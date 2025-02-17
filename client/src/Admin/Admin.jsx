import {  Row, Col, Card, } from 'react-bootstrap';
import { FiShoppingCart, FiDollarSign, FiUser, FiHeart} from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Admin=()=>{
    const DashboardCard = ({ title, value, icon, color }) => (
        <Card className={`text-white ${color} mb-4`}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <h5>{title}</h5>
              <span className="fs-1">{icon}</span>
            </div>
            <h2 className="mt-2">{value}</h2>
          </Card.Body>
        </Card>
      );



      const data = [
        { name: "Jan", sales: 5000 },
        { name: "Feb", sales: 7000 },
        { name: "Mar", sales: 12000 },
        { name: "Apr", sales: 15500 },
        { name: "May", sales: 10000 },
        { name: "Jun", sales: 9000 }
      ];


    return(
        <>
        <Row>
          <Col md={6} lg={3}><DashboardCard title="Products Sold" value="4565" icon={<FiShoppingCart />} color="bg-primary" /></Col>
          <Col md={6} lg={3}><DashboardCard title="Net Profit" value="$8541" icon={<FiDollarSign />} color="bg-danger" /></Col>
          <Col md={6} lg={3}><DashboardCard title="New Customers" value="4565" icon={<FiUser />} color="bg-warning" /></Col>
          <Col md={6} lg={3}><DashboardCard title="Customer Satisfaction" value="99%" icon={<FiHeart />} color="bg-success" /></Col>
        </Row>
        <div style={{ width: "100%", height: 300, background: "#fff", padding: 20, borderRadius: 10 }}>
      <h3>Product Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
        
        </>
    )
}
export default Admin;