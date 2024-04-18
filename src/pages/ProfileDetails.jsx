import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfileDetails = () => {

  const profileName = useParams()

  const profileData = [
    {
      id: 1,
      name: "John Doe",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "24-12-2003",
      gender: "Male",
      bio: "Passionate about coding and exploring new technologies.",
      description: "Tech enthusiast and aspiring software developer.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      postDate: "2024-04-17"
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "10-05-1998",
      gender: "Female",
      bio: "Travel lover and foodie, always seeking new adventures.",
      description: "Freelance writer with a passion for storytelling.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      postDate: "2024-04-16"
    },
    {
      id: 3,
      name: "Michael Johnson",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "15-08-1995",
      gender: "Male",
      bio: "Musician and guitar enthusiast.",
      description: "Songwriter and performer, spreading joy through music.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      postDate: "2024-04-15"
    },
    {
      id: 4,
      name: "Emily Brown",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "03-11-2000",
      gender: "Female",
      bio: "Bookworm and aspiring novelist.",
      description: "Dreaming of creating captivating worlds through literature.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postDate: "2024-04-14"
    },
    {
      id: 5,
      name: "Daniel Martinez",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "28-09-1989",
      gender: "Male",
      bio: "Outdoor enthusiast and nature lover.",
      description: "Hiking trails and exploring the wilderness are my passions.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      postDate: "2024-04-13"
    },
    {
      id: 6,
      name: "Olivia Johnson",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "17-03-1996",
      gender: "Female",
      bio: "Fitness fanatic and yoga practitioner.",
      description: "Helping others find balance and strength through exercise.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      postDate: "2024-04-12"
    },
    {
      id: 7,
      name: "William Lee",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "09-07-1985",
      gender: "Male",
      bio: "Coffee aficionado and amateur photographer.",
      description: "Capturing moments and savoring the aroma, one shot at a time.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      postDate: "2024-04-11"
    },
    {
      id: 8,
      name: "Sophia Garcia",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "21-06-2001",
      gender: "Female",
      bio: "Art enthusiast and aspiring painter.",
      description: "Finding beauty in the world and expressing it through art.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postDate: "2024-04-10"
    },
    {
      id: 9,
      name: "Ethan Wilson",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "14-02-1994",
      gender: "Male",
      bio: "Tech geek and gadget collector.",
      description: "Always on the lookout for the latest innovations and gadgets.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      postDate: "2024-04-09"
    },
    {
      id: 10,
      name: "Ava Taylor",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "02-04-1999",
      gender: "Female",
      bio: "Animal lover and volunteer at the local shelter.",
      description: "Finding joy in helping animals and making a difference.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      postDate: "2024-04-08"
    },
    {
      id: 11,
      name: "Noah Rodriguez",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "11-10-1992",
      gender: "Male",
      bio: "Food enthusiast and amateur chef.",
      description: "Exploring culinary delights and experimenting in the kitchen.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      postDate: "2024-04-07"
    },
    {
      id: 12,
      name: "Isabella Martinez",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "30-07-1997",
      gender: "Female",
      bio: "Fashion lover and aspiring designer.",
      description: "Creating unique styles and expressing myself through fashion.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      postDate: "2024-04-06"
    },
    {
      id: 13,
      name: "James Brown",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "19-03-1988",
      gender: "Male",
      bio: "Movie buff and cinephile.",
      description: "Exploring the world of cinema and analyzing its nuances.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      postDate: "2024-04-05"
    },
    {
      id: 14,
      name: "Mia Davis",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/femalePic.svg",
      dob: "08-09-2002",
      gender: "Female",
      bio: "Music lover and concert-goer.",
      description: "Immersing myself in melodies and experiencing the magic of live music.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      postDate: "2024-04-04"
    },
    {
      id: 15,
      name: "Alexander Wilson",
      profilePhoto: "https://775be7be-8d4d-479f-a75e-46713e576d35-00-13ksn1wk04itk.pike.replit.dev/public/malePic.svg",
      dob: "25-01-1993",
      gender: "Male",
      bio: "Fitness enthusiast and personal trainer.",
      description: "Helping others achieve their fitness goals and lead healthier lives.",
      postUrl: "https://via.placeholder.com/200",
      postContent: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      postDate: "2024-04-03"
    }
  ];

  const displayProfile = profileData.find(profile => profile.name == profileName.profileName)

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

export default ProfileDetails;