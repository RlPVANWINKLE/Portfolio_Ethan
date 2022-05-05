export const languages = [
    {
      name: 'C++',
      color: 'Green',
      knowledge: 50
    },
    {
      name: 'C#',
      color: 'Green',
      knowledge: 60
    },
    {
      name: 'Java',
      color: 'Green',
      knowledge: 40
    },
    {
      name: 'Python',
      color: 'Green',
      knowledge: 65
    },
    {
      name: 'SQL',
      color: 'Green',
      knowledge: 55
    },
    {
      name: 'HTML',
      color: 'Green',
      knowledge: 80
    },{
      name: 'JS',
      color: 'Green',
      knowledge: 75
    },
    {
      name: 'CSS',
      color: 'Green',
      knowledge: 80
    },
    
    {
      name: 'Vue.js',
      color: 'Green',
      knowledge: 50
    }
  ]
  export const tree = [
    {
      job: 'Instructor Assistant',
      company: 'Ogden Weber Technical College',
      icon: 'mdi-briefcase-outline',
      // description: 'My main duty was building a small professional relationship with students. Keeping them on track with their school work. In addition to thi si taught small points in a few C# courses. The level of the programming was command line to small GUI applications.',
      description: ['Assist other Professors in helping students with Software Engineering Concepts', 'Work in a team environment'],
      color: 'amber',
      color2: '#FFC107',
      date: '01/2022 - CURRENT',
      animation: 'animate__rotateInDownRight'
    },
    {
      job: 'Control Team Member',
      company: 'Internal Revenue Service',
      icon: 'mdi-briefcase-outline',
      // description: 'Lead the morning production of opening up mail from taxpayers. Made sure my team stayed on track and followed the guide of the Team Lead.',
      description: ['Handled tax payer money and tax documents.', 'Scanned and filed tax documents.'],
      color: 'amber',
      color2: '#FFC107',
      date: '04/2020 - 10/2021',
      animation: 'animate__rotateInDownLeft'
    },{
      job: 'Mandrel Winder',
      company: 'Northrop Grumman',
      icon: 'mdi-briefcase-outline',
      // description: 'Mandrel windings. I used carbon fiber and epoxy resin mixturesto create a tough and sturdy cylindrical case for programs.Have worked in assembly/is-assembly area. Here i used, many hand tools and cranes. I assembled the mandrels that were then put into rubber wrap machines and then into winding.',
      description: ['Built and developed rocket motors', 'wrote small functions within software '],
      color: 'amber',
      color2: '#FFC107',
      date: '07/2019 - 04/2020',
      animation: 'animate__rotateInUpRight'
    },
    {
      job: 'Drafter',
      company: 'Westech Engineering INC.',
      icon: 'mdi-briefcase-outline',
      // description: 'Designed and developed 3D models and drawings for Drum filters, and Horizontal belt filters. My main program of use is Auto desk inventor, along with  Auto-CAD. I later began designing and drawing P&IDs. Which is a 2D layout of all the different parts of the overall system.',
      description: ['Developed and designed Water filtration systems', 'Used Solidworks, AutoCAD, Revit'],
      color: 'amber',
      color2: '#FFC107',
      date: '03/2018 - 07/2019',
      animation: 'animate__rotateInUpLeft'
    },
  ]
  export const cards = [
      {
          pic: require("../images/OTech.png"),
          cover: require("../images/thumbnails/otech.jpg"),
          title: "Ogden Weber Tech College",
          href: "https://keen-pothos-8bdfa1.netlify.app/#/",
          animation: "animate__backInLeft",
          description: 'Students prior to the website were unable to have immediate access to information pointing them in the direction of their next course or external resources. With that they are also able to now see all the different job options as well as what previous graduates have gone on to accomplish after graduating the program. The Website is also styled and designed to be accessed from a cell phone instead of only a desktop. This allowed for an easy use for students using a cellphone for the information.',
          client: 'Otech Students',
          Technologies: 'HTML5, CSS3, Vue.js, Git'
      },
      {
        pic: require("../images/painting.png"),
        cover: require("../images/thumbnails/buuba.jpg"),
        title: "Bubba's Painting",
        href: "https://bubbaspainting.netlify.app/#/",
        animation: "animate__backInUp",
        description:'My Brother has started a painting business that he would like to have a website for. He would like a Contact Us, Gallery, and a home page with a summary of the information. He wants a way for clients to get home quotes for painting that will serve as a challenge for me.',
        client: 'Bubba’s Painting',
        Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'

    },
    {
      pic: require("../images/Capture.jpg"),
      cover: require("../images/thumbnails/cardeal.jpg"),
      title: "CarDeal",
      href: "https://zingy-sfogliatella-04c4c7.netlify.app/",
      animation: "animate__backInRight",
      description: 'Using Vue.js and Vuetify.js I created a website to give an estimated price for a used car. Whether the car is running or not running it will be purchased. There are examples of previously purchased vehicles and a section for reviews.',
      client: 'CarDeal',
      Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'
    },
    {
        pic: require("../images/oscars.png"),
        cover: require("../images/thumbnails/oscars.png"),
        title: "Oscars Meats",
        href: "",
        animation: "animate__backInLeft",
        description: 'This client is a butcher shop in downtown Ogden, Utah. Oscars Meats has been around for 70 years. This company still takes all orders over the phone. My assignment with this client is to allow Oscar’s clients to be able to order online. They would like a simple email to be sent when ordering and pay at the store. Many of the employees like this simplicity of paper. With this, an email can be printed in order for them to still see it on paper.',
        client: 'Oscar’s Meats',
        Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'
    },
    {
        pic: require("../images/calc.png"),
        cover: require("../images/thumbnails/math.jpg"),
        title: "Math Practice",
        href: "",
        animation: "animate__backInDown",
        description:'My sister and her friends want the ability to practice their math while at home. There are other websites out there that help practice math, however they are wanting specifics in order to study and practice.',
        client: 'Children',
        Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'
    },
    {
      pic: require("../images/heart.jpg"),
      cover: require("../images/thumbnails/heart.jpg"),
      title: "Body Ninja",
      href: "",
      animation: "animate__backInRight",
      description:'Body Ninja is ran by a Woman Named Chloe. She runs a “Bootcamp. ” She is having a hard time getting poeple to join. She would like a website that  can have more information and contact. Would also like a Venmo link to pay for her class.',
      client: 'BodyNinja',
      Technologies: 'HTML5, CSS3, Vue.js, BootStrap, SCSS, Git'
  },
  ]
  export const about = [
    {
      icon:"mdi-tablet-cellphone",
      title:"Mobile/Responsive"
    },
    {
      icon:"mdi-lightning-bolt-outline",
      title:"Fast Learner"
    },
    {
      icon:"mdi-lightbulb",
      title:"Intuitive"
    },
    {
      icon:"mdi-rocket-launch",
      title:"Dynamic"
    }
  ]
  export const nav = [
    {
      title: 'Home',
      goto: 'home'
    },
    {
      title: 'About Me',
      goto: 'about'
    },
    {
      title: 'My Resume',
      goto: 'resume'
    },
    {
      title: 'My Portfolio',
      goto: 'work'
    },
    {
      title: 'Contact Me',
      goto: 'contact'
    }
  ]
