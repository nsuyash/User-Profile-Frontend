 import Header from '../components/Header'
 import Footer from '../components/Footer'

 const Profile = () => {

   const displayProfile = {
     id: 15,
     name: "Suyash Nandurkar",
     profilePhoto: "https://i.ibb.co/C1PmMpL/malePic.png",
     dob: "24-12-2003",
     gender: "Male",
     bio: "Fitness enthusiast and personal trainer."
   }

   return(
     <>
       <Header />
       <main className='container mt-5'>
         <div className='row w-75'>
           <div className='col'>
             <img src={displayProfile.profilePhoto} alt={displayProfile.gender === "Male" ? "Male Profile Picture" : "Female Profile Picture"} style={{width: "150px"}} />
           </div>
           <div className='col'>
             <h2 className='mt-3'>{displayProfile.name}</h2>
             <p>{displayProfile.dob}</p>
             <p>{displayProfile.gender}</p>
             <p>{displayProfile.bio}</p>
           </div>
         </div>
       </main>
       <Footer />
     </>
   )

 }

 export default Profile;