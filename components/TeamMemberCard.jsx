import Image from 'next/image'



// <Image src="" alt="Diversification image" width={636} height={553} />

const TeamMemberCard = ({ user }) => {
   return (
     <div className="user_info">
       <img src={user.img} alt="" width={336} />
       <h2 className="fs-sm fw-bolder py-3 m-0">{user.name}</h2>
       <h2 className="fs-sm">Nickname: {user.nickname}</h2>
     </div>
   );
 }

export default TeamMemberCard;