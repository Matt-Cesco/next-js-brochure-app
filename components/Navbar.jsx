import Image from 'next/image'
import logo from '../public/images/logo-lion.jpg'
import Link from 'next/link'
import { NavLink } from '../styles/styled'

const Navbar = () => {
   return (
     <div className="container-fluid border-bottom">
      <div className="container">
       <div className="row">
         <div className="d-flex justify-content-between align-items-center">
           <div className="navbar-logo">
            <Link href="/index">
             <a> <Image src={logo} alt="Company logo" width={85} height={85} /> </a>
            </Link>
           </div>
           <div className="d-flex justify-content-center">
             <div className="fs-md fw-bolder text-uppercase mx-4">
               <Link href="/aboutUs">
                <NavLink>About us</NavLink>
               </Link>
             </div>
             <div className="fs-md fw-bolder text-uppercase mx-4">
               <Link href="/strategy">
                <NavLink>strategy</NavLink>
               </Link>
             </div>
             <div className="fs-md fw-bolder text-uppercase mx-4">
               <Link href="/contacts">
                <NavLink>contacts</NavLink>
               </Link>
             </div>
           </div>
         </div>
       </div>
      </div>
     </div>
   );
}

export default Navbar


