import Link from 'next/link';
import TeamMemberCard from '../components/TeamMemberCard'

const TeamMemberList = ({ users }) => (
  <div className="row">
      {users.map(user => (
            <div key={ user.id } className="col-6 col-lg-4 mt-5">
               <a className="">
                  <TeamMemberCard user={user} />
               </a>
            </div>
         ))}
        
  </div>
  
);

export default TeamMemberList
