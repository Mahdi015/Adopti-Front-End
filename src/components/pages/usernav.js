import React from 'react'
import {Link} from 'react-router-dom'


export const Usernav = () => {
    return (
        <div>
         
            <nav>
        <ul className="nav">
            <li className="nav-item nav-link" >
                <Link to="/admin/dash"><i class="fas fa-bars"></i>Admin Dashboard </Link>
            </li>

            <li className="nav-item nav-link" >
                <Link to="/admin/product">Add Products</Link>
            </li>


            <li className="nav-item nav-link" >
                <Link to="/admin/products">Products List</Link>
            </li>


            <li className="nav-item nav-link" >
                <Link to="/admin/category">Category</Link>
            </li>

            <li className="nav-item nav-link" >
                <Link to="/admin/sub">Sub Category</Link>
            </li>

            <li className="nav-item nav-link" >
                <Link to="/admin/coupon">Coupon</Link>
            </li>

            <li className="nav-item nav-link" >
                <Link to="/user/UpdatePassword">Update Password</Link>
            </li>

        </ul>

    </nav>

        </div>
    )
}
export default Usernav;