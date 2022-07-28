import Head from 'next/head'
import Navbar from '../components/Navbar'
import TeamMemberCard from '../components/TeamMemberCard'

// https://randomuser.me/api/?results=6
// https://jsonplaceholder.typicode.com/users
// https://www.breakingbadapi.com/api/characters?limit=6

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.breakingbadapi.com/api/characters?limit=6"
  );
  const data = await res.json();

  return {
     props: { users: data }
  }
}

const aboutUs = ({ users }) => {
   return (
     <>
       <Head>
         <title>About Us</title>
         <meta
           name="demo website for a financial firm"
           content="financial firm"
         />
       </Head>
       <Navbar />
       <div className="container mt-lg-5 pt-lg-5">
         <div className="row">
           <div className="col-12 col-lg-6">
             <h2 className="fs-xxxl">Our Firm</h2>
           </div>
           <div className="col-12 col-lg-6">
             <h2 className="fs-xxl text-uppercase">
               A diversified global leader
             </h2>
             <p className="fs-lg py-lg-5">
               Millennium is a global alternative investment management firm,
               founded in 1989, which manages more than $56 billion in assets.
               We seek to pursue a diverse array of investment strategies across
               industry sectors, asset classes, and geographies.
             </p>
           </div>
         </div>
         <hr />
         <div className="container py-lg-5 mt-5">
           <div className="row text-center">
             <h2 className="fs-xxl text-uppercase">Driven by independence</h2>
           </div>
           <div className="row text-center">
             <h2 className="fs-xxl text-uppercase">Sustained by discipline</h2>
           </div>
         </div>
         <div className="container">
           <div className="row">
             <div className="col-lg-6">
               <p className="fs-lg py-lg-5">
                 We are focused on effectively navigating our dynamic and
                 multi-jurisdictional regulatory environment. Our professional
                 in-house legal and compliance teams provide comprehensive
                 control, guidance, and oversight.
               </p>
               <p className="fs-lg pb-lg-5">
                 Nearly a decade ago, we established a Regulatory and Compliance
                 Advisory Council, comprised of external experts. The council
                 helps us gain a more comprehensive perspective on critical
                 regulatory developments and to adapt our policies and
                 procedures in accordance with best practices.
               </p>
             </div>
           </div>
         </div>
         <hr />
         <div className="row">
           <h2 className="fs-xxl text-uppercase">The team</h2>
         </div>
         <div className="row">
           {users.map((user) => (
             <div key={user.char_id} className="col-6 col-lg-4 mt-5">
               <TeamMemberCard user={user} />
             </div>
           ))}
         </div>
         <hr />
       </div>
     </>
   );
}

export default aboutUs