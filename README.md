Présentation
Projet de gestion de données administratives pour FreelanceVision société de portage salarial.
Le projet s'articule autour de tableaux de relévé d'informations de présence et de frais pour crée des bases de données.


                                             
                                             Mise en ligne du projet

  **Installation du projet**
  
Le projet est en ReactJs.

Clôner la branche dev.

A la racine du projet...

Lancer l'installation:

>npm run install

Démarrer le projet:

>npm run launch


créer un fichier config.json à la racine du projet (avant le dossier Front et Back):

Copier ce contenu:
>{
  "IP": "localhost",
  "DB":{
    "user": "appUser",
    "Pass": "appUser",
    "Database": "FreelanceVision",
    "PORT": "4080"
  }
}

-Trois types d'utilisateurs sont déjà disponibles dans la base de donnée:
```

    Administrateur
-ID: Admin
 MDP: 1234
 
    Employé
 ID: Marge
 MDP: 1234
 
    Freelance
 ID: Tony
 MDP: 1234

```


