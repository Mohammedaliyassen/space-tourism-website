const theData = {
    "destinations": [
      {
        "name": "Moon",
        "images": {
          "png": "assets/destination/image-moon.png",
          "webp": "assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "name": "Mars",
        "images": {
          "png": "./assets/destination/image-mars.png",
          "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "name": "Europa",
        "images": {
          "png": "./assets/destination/image-europa.png",
          "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "name": "Titan",
        "images": {
          "png": "./assets/destination/image-titan.png",
          "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ],
    "crew": [
      {
        "name": "Douglas Hurley",
        "images": {
          "png": "./assets/crew/image-douglas-hurley.png",
          "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      },
      {
        "name": "Mark Shuttleworth",
        "images": {
          "png": "./assets/crew/image-mark-shuttleworth.png",
          "webp": "./assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      },
      {
        "name": "Victor Glover",
        "images": {
          "png": "assets/crew/image-victor-glover.png",
          "webp": "./assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      },
      {
        "name": "Anousheh Ansari",
        "images": {
          "png": "./assets/crew/image-anousheh-ansari.png",
          "webp": "./assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      }
    ],
    "technology": [
      {
        "name": "Launch vehicle",
        "images": {
          "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
          "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      },
      {
        "name": "Spaceport",
        "images": {
          "portrait": "./assets/technology/image-spaceport-portrait.jpg",
          "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      {
        "name": "Space capsule",
        "images": {
          "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
          "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      }
    ]
  }
console.log(theData)

const moon = function(){
    
        postData(mydata = {
            description :theData.destinations[0].description ,
            distance: theData.destinations[0].distance,
            name : theData.destinations[0].name,
            imag: theData.destinations[0].images.png,
            travel: theData.destinations[0].travel
        }).then(()=>postInfo());

}
const mars = function(){
    postData(mydata = {
        description :theData.destinations[1].description ,
        distance: theData.destinations[1].distance,
        name : theData.destinations[1].name,
        imag: theData.destinations[1].images.png,
        travel: theData.destinations[1].travel
    }).then(()=>postInfo());

}

const europa = function(){
    postData(mydata = {
        description :theData.destinations[2].description ,
        distance: theData.destinations[2].distance,
        name : theData.destinations[2].name,
        imag: theData.destinations[2].images.png,
        travel: theData.destinations[2].travel
    }).then(()=>postInfo());

}

const titan = function(){
    postData(mydata = {
        description :theData.destinations[3].description ,
        distance: theData.destinations[3].distance,
        name : theData.destinations[3].name,
        imag: theData.destinations[3].images.png,
        travel: theData.destinations[3].travel
    }).then(()=>postInfo());

}
const Commander = function(){

        postData(datacrow = {
            bio :theData.crew[0].bio ,
            role: theData.crew[0].role,
            name : theData.crew[0].name,
            imag1: theData.crew[0].images.png
        }).then(()=>postInfoCrow());
}
const MissionSpecialist = function(){
    postData(datacrow = {
        bio :theData.crew[1].bio ,
        role: theData.crew[1].role,
        name : theData.crew[1].name,
        imag1: theData.crew[1].images.png
    }).then(()=>postInfoCrow());
}
const Pilot = function(){
   
        postData(datacrow = {
            bio :theData.crew[2].bio ,
            role: theData.crew[2].role,
            name : theData.crew[2].name,
            imag1: theData.crew[2].images.png
        }).then(()=>postInfoCrow());
}

const FlightEngineer = function(){

        postData(datacrow = {
            bio :theData.crew[3].bio ,
            role: theData.crew[3].role,
            name : theData.crew[3].name,
            imag1: theData.crew[3].images.png
        }).then(()=>postInfoCrow());

}

const LaunchVehicle = function(){

        postData(dataTechno = {
            name :theData.technology[0].name ,
            description: theData.technology[0].description,
            imag: theData.technology[0].images.portrait,
        }).then(()=>postInfoTechno0());


}
const Spaceport = function(){

        postData(dataTechno = {
            name :theData.technology[1].name ,
            description: theData.technology[1].description,
            imag: theData.technology[1].images.portrait,
        })
.then(()=>postInfoTechno2());

}
const SpaceCapsule = function(){

        postData(dataTechno = {
            name :theData.technology[2].name ,
            description: theData.technology[2].description,
            imag: theData.technology[2].images.portrait,
        }).then(()=>postInfoTechno1());

}

const postData = async ( mydata = {})=>{
      console.log(mydata);
      return mydata;
  }

  const postInfo = async ()=>{
    try{
        
        document.getElementById('name').innerHTML = mydata.name;
        
        document.getElementById('description').innerHTML = mydata.description;
        
        document.getElementById('distance').innerHTML = mydata.distance;

        document.getElementById('travel').innerHTML = mydata.travel;
        
        document.getElementById('images').src =mydata.imag;
        
        
    } catch(error){
        alert('your error is :'+error);
        console.log('your error is :'+error);
    }
}

const postInfoCrow = async ()=>{

    try{

        document.getElementById('name').innerHTML = datacrow.name;
        
        document.getElementById('bio').innerHTML = datacrow.bio;
        
        document.getElementById('role').innerHTML ='Role: ' + '<div style="border-bottom:2px solid; display: inline;color:#ffd90c91">'+ datacrow.role+'</div>';

        document.getElementById('images').src = datacrow.imag1;

        return datacrow;
        
    } catch(error){
        alert('your error is :'+error);
        console.log('your error is :'+error);
    }
}

const postInfoTechno0 = async ()=>{

    try{

            document.querySelector('#name0').innerHTML = dataTechno.name;
        
            document.querySelector('#description0').innerHTML = dataTechno.description;

            document.getElementById("img0").src= dataTechno.imag

            document.querySelector('#name1').innerHTML ="";
        
            document.querySelector('#description1').innerHTML = "";

            document.querySelector('#name2').innerHTML ="";
        
            document.querySelector('#description2').innerHTML = "";
           

        return dataTechno;
        
    } catch(error){
        alert('your error is :'+error);
        console.log('your error is :'+error);
    }
}

const postInfoTechno1 = async ()=>{

    try{
            document.querySelector('#name0').innerHTML = "";
            
            document.querySelector('#description0').innerHTML = "";

            document.getElementById("img1").src= dataTechno.imag

            document.querySelector('#name1').innerHTML = dataTechno.name;
        
            document.querySelector('#description1').innerHTML = dataTechno.description;

            document.querySelector('#name2').innerHTML ="";
        
            document.querySelector('#description2').innerHTML = "";
        
    } catch(error){
        alert('your error is :'+error);
        console.log('your error is :'+error);
    }
}
const postInfoTechno2 = async ()=>{

    try{
            document.querySelector('#name0').innerHTML = "";
            
            document.querySelector('#description0').innerHTML = ""; 

            document.querySelector('#name1').innerHTML ="";
        
            document.querySelector('#description1').innerHTML = "";

            document.querySelector('#name2').innerHTML = dataTechno.name;
        
            document.querySelector('#description2').innerHTML = dataTechno.description;

            document.getElementById("img2").src= dataTechno.imag
        
    } catch(error){
        alert('your error is :'+error);
        console.log('your error is :'+error);
    }
}

// ----------- close -------------

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('header').style.cssText = " visibility: hidden; transition: 0s;"
    document.querySelector('.close').style.cssText = " visibility: hidden; transition: 0s; "
    document.querySelector('.open').style.cssText = " visibility: visible; transition: 0s;"
});
document.querySelector('.open').addEventListener('click',()=>{
    document.querySelector('.close').style.cssText = " visibility: visible; transition: 0s;"
    document.querySelector('header').style.cssText = " visibility: visible; transition: 0s;"
    document.querySelector('.open').style.cssText = " visibility: hidden; transition: 0s;"
})

