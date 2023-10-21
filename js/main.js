const profile = [
    {
      id: 1,
      name: "Miranda",
      img: "./img/img8.webp",
    },
    {
      id: 2,
      name: "Taylor",
      img: "./img/img7.webp",
    },
    {
      id: 3,
      name: "Jack",
      img: "./img/img6.webp",
    },
    {
      id: 4,
      name: "Jimmy",
      img: "./img/img5.webp ",
    },
    {
      id: 5,
      name: "Alex",
      img: "./img/img4.webp",
    },
    {
      id: 6,
      name: "Henry",
      img: "./img/img3.webp",
    },
    {
      id: 7,
      name: "Susan",
      img: "./img/img2.webp",
    },
    {
      id: 8,
      name: "Jamies",
      img: "./img/img1.webp",
    },

 ];

 const personProfie = document.querySelector(".live")

 window.addEventListener("DOMContentLoaded",function(){
    displayProfile(profile)
 })

 function displayProfile(profilePic){
    let displayProfile = profilePic.map(function(item){
        return  ` 
        <div class="person mr-[20px] text-center">
            <div style="background-image:url('${item.img}');" class="profile-pic relative bg-[50%] bg-cover h-[60px] w-[60px] rounded-full"></div>
            <p class="name text-[14px] pt-4">${item.name}</p>
        </div>
     `
    })
displayProfile = displayProfile.join("")
personProfie.innerHTML = displayProfile
//console.log(displayProfile)
 }


 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 10,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navlist a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive) 