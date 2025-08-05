import ProfilePicture from "./ProfilePicture"
import AboutMe from "./AboutMe"
import Skills from "./Skills"
import Button from "./Button"


function Profile() {
    const profile = {
        profpic : "my-profile.jpg",
        name : "Jessie Francis Catubay",
        aboutMe : "Hi my name is Jessie Francis P. Catubay a BSIT Student at Cordova Public College, I am 19 years old and I live in Day-as Cordova Cebu. A little bit about myself here is I love playing online games such as Mobile Legends, Call of Duty, and Chess. And of course I love school too, and hoping to be a backend developer in the future.",
        job : "Software Developer",
        socialLink : "https://www.facebook.com/itsmecracklings"
    };

    return (
        <div className="profile-container">
            <img src={profile.profpic} alt="ProfilePic" width="400" height="400"/>
            <h3>{profile.name}</h3>
            <p>{profile.job}</p>
            <div>
                <h1>About Me</h1>
                <p>{profile.aboutMe}</p>
            </div>
            <Skills />
            <a href={profile.socialLink}>
                <button>Social</button>
            </a>
        </div>
    )
}

export default Profile;