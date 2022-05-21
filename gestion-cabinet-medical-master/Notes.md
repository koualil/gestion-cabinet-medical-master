# NOTES

What is Cookie-based Authentication?

> Qu’est-ce que l’authentification basée sur les cookies?

Les cookies sont des données utilisées pour identifier l’utilisateur et ses préférences. Le navigateur renvoie le cookie au serveur chaque fois que la page est demandée. Des cookies spécifiques comme les cookies HTTP sont utilisés pour effectuer une authentification basée sur des cookies afin de maintenir la session pour chaque utilisateur.

L’authentification basée sur les cookies (Cookie-based Authentication) fonctionne de la manière suivante :

1 - L’utilisateur donne un nom d’utilisateur et un mot de passe au moment de la connexion. Une fois que l’utilisateur remplit le formulaire de connexion, le navigateur (client) envoie une demande de connexion au serveur.

2 - Le serveur vérifie l’utilisateur en interrogeant les données de l’utilisateur. Si la demande d’authentification est valide, le serveur génère ce qui suit :

-  Une session en utilisant les informations utilisateur
-  Un identifiant unique, appelé ID de session

Le serveur transmet alors l’ID de session au navigateur qui le conserve. Le serveur garde également une trace des sessions actives.

3 - Le navigateur doit soumettre cet ID de session généré lors de l’envoi d’une demande ultérieure. Chaque fois que le serveur valide l’ID de session. L’ID de session aide le processus d’authentification à identifier l’utilisateur et fournit l’accès en conséquence.

4 - Lorsque l’utilisateur se déconnecte de l’application, la session est détruite à partir du client (navigateur) et du serveur. Il interrompt le processus d’authentification de se produire à nouveau par l’ID de session respective.

Avantages de l’authentification par cookies

-  Disponibilité : Dans l’authentification basée sur les cookies, les cookies peuvent être mis à disposition pour une période prolongée, en maintenant une session pendant une longue période.

-  Configuration facile : Les sites Web peuvent fournir des cookies en les configurant selon les exigences. Par exemple, un site Web peut envoyer des cookies qui expireront lorsque les utilisateurs ferment l’onglet du navigateur. Il est également possible de configurer les cookies pour une durée spécifiée côté client.

-  Convivialité : Les authentifications basées sur des cookies sont simples, et les cookies utilisés dans cette méthode sont conviviaux. Les utilisateurs peuvent choisir quoi faire avec les fichiers de cookies qui ont conservé les identifiants de l’utilisateur. Tous les navigateurs modernes viennent avec des paramètres pour effacer les cookies. Les utilisateurs peuvent trouver des cookies dans le disque dur et les supprimer manuellement.

Défis de l’authentification basée sur les cookies

-  Vulnérable aux CSRF ( Cookie-based authentications are prone to Cross-site Request Forgery ) : Les authentifications basées sur des cookies sont sujettes aux attaques de faux (CSRF). Par conséquent, ils ont souvent besoin de postures de sécurité supplémentaires pour se protéger.

-  Moins Mobile-friendly : L’authentification basée sur les cookies ne fonctionne pas bien avec toutes les applications natives.

-  Limitations : Il y a certaines limitations et préoccupations telles que la limite de taille (pas plus de 4 Ko d’informations par cookie), les limitations du navigateur sur les cookies, la confidentialité des utilisateurs, etc., viennent avec les cookies et l’authentification basée sur les cookies.
   Moins évolutif : L’authentification basée sur les cookies est moins évolutive, et les frais généraux augmentent lorsque le nombre d’utilisateurs augmente sur un site particulier.
