

const Footer = () => {
   return (
     <footer className="container-fluid py-5">
       <div className="container">
         <div className="row">
           <div className="col-lg-4">
             <p className="fs-xsm text-uppercase text-green">Office</p>
             <p className="fs-xsm mb-2">E2E Solutions Ltd</p>
             <p className="fs-xsm mb-2">Ensign Business Centre</p>
             <p className="fs-xsm mb-2">Westwood Way</p>
             <p className="fs-xsm mb-2">Coventry</p>
             <p className="fs-xsm mb-2">CV4 8JA</p>
             <p className="fs-xsm mb-2">Registered No: 3835692 England</p>
           </div>
           <div className="col-lg-4">
             <p className="fs-xsm text-uppercase text-green">Contacts</p>
             <p className="fs-xsm mb-2">
               Email:{" "}
               <a
                 href="mailto:info@e2esolutions.co.uk"
                 className="text-decoration-none text-white"
               >
                 info@e2esolutions.co.uk
               </a>
             </p>
             <p className="fs-xsm mb-2">Tel: 02476 998 014</p>
           </div>
           <div className="col-lg-4">
             <p className="fs-xsm text-uppercase text-green">Social</p>
             <p className="fs-xsm mb-2">Linkedin</p>
             <p className="fs-xsm mb-2">Dribble</p>
           </div>
         </div>
       </div>
     </footer>
   );
}

export default Footer