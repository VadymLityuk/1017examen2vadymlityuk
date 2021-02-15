export const mixinTranslations = {
    data () {
        return {
           language: "french"
        }
      },
    en: {
      firstName: "Firstname",
      age: "28 years",
      lastName: "Lastname",
      email: "Email",
      contact: "Contact",
      reasonOfContact: "Reason of Contact",
      job: "Job ",
      hobby:"My hobbys",
      informations: "Informations",
      project: "Project",
      appointment: "Take appointment",
      projects: "Projects",
      myProjects: "My Projects",
      MOVIMANIA:"MOVIMANIA",
      OVERWTACH:"OVERWTACH",
      Portfolio:"Portfolio",
      Spotify:"Spotify",
      meeting:"meeting",
      home: "Home",
      info:"I am a junior Front-End Developer located in Quebec. I am currently working as a UI / UX Front End Developer"
    },
    fr: {
      firstName: "Prenom",
      age: "28 ans",
      lastName: "Nom",
      email: "Courriel",
      contact: "Contact",
      reasonOfContact: "Raison du contact",
      job: "Emploi",
      hobby:"Mes loisirs",
      informations: "Informations",
      project: "Projets",
      appointment: "Prise de rendez-vous",
      other: "Autre",
      about: "À propos",
      home: "Accueil",
      projects: "Projets",
      myProjects: "Mes Projets",
      MOVIMANIA:"MOVIMANIA",
      OVERWTACH:"OVERWTACH",
      Portfolio:"Portfolio",
      Spotify:"Spotify",
      meeting:"rendes-vous",
      info:"Je suis un junior Front-End Développeur situé à Québec. Je travaille actuellement en tant que UI/UX Front End Developper."
     }, 

    filters :{
        translateTo: function (value, language) {
            if (language==='english'){
                let keys= Object.keys(mixinTranslations.en);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTranslations.en[value]
                    }
                }  
            } else if (language === 'french'){
                let keys= Object.keys(mixinTranslations.fr);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTranslations.fr[value]
                    }
                }    
            }
        },

    }
  };
