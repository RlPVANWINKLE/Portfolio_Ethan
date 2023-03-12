export const languages = [
    {
      name: 'C++',
      color: 'Green',
      knowledge: 35
    },
    {
      name: 'C#',
      color: 'Green',
      knowledge: 45
    },
    {
      name: 'Java',
      color: 'Green',
      knowledge: 30
    },
    {
      name: 'Python',
      color: 'Green',
      knowledge: 50
    },
    {
      name: 'SQL',
      color: 'Green',
      knowledge: 70
    },
    {
      name: 'HTML',
      color: 'Green',
      knowledge: 95
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
      knowledge: 40
    }
  ]
  export const tree = [
    {
      job: 'Technical Support',
      company: 'IworQ Systems',
      icon: 'mdi-briefcase-outline',
      // description: 'My main duty was building a small professional relationship with students. Keeping them on track with their school work. In addition to thi si taught small points in a few C# courses. The level of the programming was command line to small GUI applications.',
      description: [
        'Answer 30-40 phone calls, 20-30 emails, and 10-15 support tickets a day to assist current customers with client side issues',
        'Implement new applications purchased and kept KPIs of process',
        'Used some HTML and CSS to build letters that were sent out so customer(s) recipient(s). ',
        'Host and conduct trainings for our software. (SAAS)',
      ],
      color: 'amber',
      color2: '#FFC107',
      date: '08/2022 - CURRENT',
      animation: 'animate__rotateInDownLeft'
    },
    {
      job: 'Instructor Assistant',
      company: 'Ogden Weber Technical College',
      icon: 'mdi-briefcase-outline',
      // description: 'My main duty was building a small professional relationship with students. Keeping them on track with their school work. In addition to thi si taught small points in a few C# courses. The level of the programming was command line to small GUI applications.',
      description: [
        'Assisted other professors/instructors in helping students with Software Development concepts',
        'Held weekly calls and meeting with each student to discuss their progress and answer any questions they had regarding their current course.',
        'Assited with code debugging in C#, Python, MERN Stack, HTML, CSS, and JS'      
      ],
      color: 'amber',
      color2: '#FFC107',
      date: '01/2022 - 08/2022',
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
          title: "Ogden Weber Tech College (Front End)",
          href: "https://keen-pothos-8bdfa1.netlify.app/#/",
          animation: "animate__backInLeft",
          description: 'Students prior to the website were unable to have immediate access to information pointing them in the direction of their next course or external resources. With that they are also able to now see all the different job options as well as what previous graduates have gone on to accomplish after graduating the program. The Website is also styled and designed to be accessed from a cell phone instead of only a desktop. This allowed for an easy use for students using a cellphone for the information.',
          client: 'Otech Students',
          Technologies: 'HTML5, CSS3, Vue.js, Git'
      },
      {
        pic: require("../images/painting.png"),
        cover: require("../images/thumbnails/buuba.jpg"),
        title: "Bubba's Painting  (Front End)",
        href: "https://bubbaspainting.netlify.app/#/",
        animation: "animate__backInUp",
        description:'My Brother has started a painting business that he would like to have a website for. He would like a Contact Us, Gallery, and a home page with a summary of the information. He wants a way for clients to get home quotes for painting that will serve as a challenge for me.',
        client: 'Bubba’s Painting',
        Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'

    },
    {
      pic: require("../images/Capture.jpg"),
      cover: require("../images/thumbnails/cardeal.jpg"),
      title: "CarDeal  (Front End)",
      href: "https://zingy-sfogliatella-04c4c7.netlify.app/",
      animation: "animate__backInRight",
      description: 'Using Vue.js and Vuetify.js I created a website to give an estimated price for a used car. Whether the car is running or not running it will be purchased. There are examples of previously purchased vehicles and a section for reviews.',
      client: 'CarDeal',
      Technologies: 'HTML5, CSS3, Vue.js, Git, Vuetify'
    },
    {
        pic: 'TODO APP',
        cover: 'TODO APP',
        title: "To Do (Full-Stack)",
        href: "https://todo23.herokuapp.com/",
        animation: "animate__backInLeft",
        description: 'My current job requires me to keep track of my customers while I implement their newly purchased software. I built this web application and have been building on it, to keep track of tasks to complete.',
        client: 'Myself',
        Technologies: 'HTML5, CSS3, express.js, Git, MongoDB, Node.js'
    },
    {
        pic: require("../images/frozen.jpg"),
        cover: require("../images/frozen.jpg"),
        title: "Counter (FullStack)",
        href: "https://itsfreezing.herokuapp.com/",
        animation: "animate__backInDown",
        description:'Me and my friends play different games. One of which requires a counter that will keep track for days and cannot be refreshed. I built this to keep track of that count and to allow anyone with link to view the current count.',
        client: 'Friend Group',
        Technologies: 'HTML5, CSS3, express.js, Git, MongoDB, Node.js'
    },
  //   {
  //     pic: require("../images/heart.jpg"),
  //     cover: require("../images/thumbnails/heart.jpg"),
  //     title: "Body Ninja",
  //     href: "",
  //     animation: "animate__backInRight",
  //     description:'Body Ninja is ran by a Woman Named Chloe. She runs a “Bootcamp. ” She is having a hard time getting poeple to join. She would like a website that  can have more information and contact. Would also like a Venmo link to pay for her class.',
  //     client: 'BodyNinja',
  //     Technologies: 'HTML5, CSS3, Vue.js, BootStrap, SCSS, Git'
  // },
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
