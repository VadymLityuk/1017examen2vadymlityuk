export const mixinTranslations = {
    data () {
        return {
            //French to English
           language: "french"
        }
      },
    en: {
      firstName: "Firstname",
      age: "Age",
      lastName: "Lastname",
      email: "Email",
      contact: "Contact",
      reasonOfContact: "Reason of Contact",
      job: "Job ",
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
    },
    fr: {
      firstName: "Prenom",
      age: "Age",
      lastName: "Nom",
      email: "Courriel",
      contact: "Contact",
      reasonOfContact: "Raison du contact",
      job: "Emploi",
      informations: "Informations",
      project: "Projet",
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
