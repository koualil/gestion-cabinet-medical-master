export const ELEMENT_SANTE_DATA = [
   {
      idElement: 121,
      nom: "Fièvre",
      description: "'aze' is assigned a value but never used  no-unused-vars",
      dateCreation: new Date(),
      idPatient: 100,
      consultations: [
         {
            idConsultation: 83,
            date: new Date(),
            type: "visite",
            duree: 60,
            hauteur: 175.5,
            poid: 71,
            motif: "Douleur abdominale depuis la veille au soir",
            remarques:
               "Le motif de consultation est ce que le patient apporte lors de la consultation comme demande, plainte, symptôme. C'est la clé d'entrée en relation entre le médecin et le patient. Les premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours du patient.",
         },
      ],
   },
   {
      idElement: 191,
      nom: "diabète",
      description: "e is assigned a value but never used  no-unused-vars",
      dateCreation: new Date(),
      idPatient: 200,
      consultations: [
         {
            idConsultation: 23,
            date: new Date(),
            type: "visite",
            duree: 60,
            hauteur: 175.5,
            poid: 71,
            motif: "Douleur abdominale depuis la veille au soir",
            remarques:
               "Le motif de consultation est ce que le patient apporte lors de la consultation comme demande, plainte, symptôme. C'est la clé d'entrée en relation entre le médecin et le patient. Les premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours du patient.",
         },
         {
            idConsultation: 43,
            date: new Date(),
            type: "visite",
            duree: 60,
            hauteur: 175.5,
            poid: 71,
            motif: "Douleur abdominale depuis la veille au soir",
            remarques:
               "Le motif de consultation est ce que le patient apporte lors de la consultation comme demande, plainte, symptôme. C'est la clé d'entrée en relation entre le médecin et le patient. Les premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours du patient.",
         },
      ],
   },
];

export const CONSULTATION_DATA = [
   {
      idConsultation: 83,
      dateCreation: "05/11/2022",
      type: "visite",
      duree: 60,
      hauteur: 175.5,
      poid: 71,
      motif: "Douleur abdominale depuis la veille au soir",
      remarques:
         "Le motif de consultation est ce que le patient apporte lors de la consultation comme demande, plainte, symptôme. C'est la clé d'entrée en relation entre le médecin et le patient. Les premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours du patient.",
      idMedecin: 155,
      idElement: 6,
   },
];

export const EXAMEN_DATA = [
   {
      idExamen: 715,
      nom: "radio générale",
      description:
         "relation entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours",
      idConsultation: 83,
      documents: [
         {
            idDocument: 13,
            nom: "document 1212",
            description:
               "entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de",
            date: "12/32/2022 13:00",
            fichier: "",
         },
         {
            idDocument: 653,
            nom: "document 662",
            description:
               "entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de",
            date: "12/32/2022 13:00",
            fichier: "",
         },
      ],
   },
];

export const PRESCRIPTION_DATA = [
   {
      idPrescription: 123,
      conseilsMedicaux:
         "relation entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours",
      medicaments: [
         {
            idMedicament: 34,
            nom: "dolipran",
            descriptionTraitement: "3 fois par jour ....",
            duree: "10 jour",
            idPrescription: 123,
         },
         {
            idMedicament: 64,
            nom: "remix",
            descriptionTraitement: "4 fois par jour ....",
            duree: "15 jour",
            idPrescription: 123,
         },
      ],
      idConsultation: 83,
   },
];

export const COMPTE_RENDU_DATA = [
   {
      idCompteRendu: 765,
      nom: "compte rendu de consultaion",
      description:
         "relation entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours",
      fichier: "",
      audio: {
         idAudio: 33,
         nom: "audio 1212",
         description:
            "entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de",
         date: "12/32/2022 13:00",
         fichier: "",
      },
      idConsultation: 83,
   },
   {
      idCompteRendu: 75,
      nom: "compte rendu operatoire",
      description:
         "relation entre le médecin et le patient. \nLes premières minutes de l'entrevue sont généralement consacrées à l'identification du motif de recours",
      fichier: "fichier",
      audio: null,
      idConsultation: 83,
   },
];

export const MEDECIN_DATA = [
   {
      idUtilisateur: 155,
      cin: "BE44564",
      nom: "prof ",
      prenom: "koubi",
      email: "koubi@mail.com",
      situationFamilliale: "celibataire",
      genre: "male",
      tel: "09876543245",
      adresse: "dsqsdqdsqd",
      imageProfile: "/uploads/images/625b52a7c88b4.jpg",
      type: "medecin",
   },
   {
      idUtilisateur: 166,
      cin: "anas",
      nom: "reda",
      prenom: "bouhali",
      email: "reda@mail.com",
      situationFamilliale: "marie",
      genre: "femelle",
      tel: "b",
      adresse: "bb",
      imageProfile: "/uploads/images/625b5332e261c.jpg",
      type: "medecin",
   },
];
