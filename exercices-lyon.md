# Exercice

## GRPC

 1. Ajoutez un nouveau message correspondant à un hero dans votre fichier protobuf
    - Ce hero devra avoir un nom(*string*), un id(*int*), un power(*int*) et des hp(*int*)
 2. Ajoutez des fonctions CRUD pour votre hero dans un nouveau service Hero
 3. Implémentez dans votre controlleur NestJS les fonctions CRUD du hero. Pour l'instant, enregistrez les hero dans un array local.
 4. Ajoutez des fonctions de "fight" entre les heros.

## Création d'une nouvelle API

En binome, vous allez devoir créer une nouvelle API à connecter aux microservices existant.

Choisissez un service à ajouter (génération de description par IA, service d'enregistrement de medias, ...) et définissez un fichier protobuf. Ce fichier sera a faire valider par l'intervenant.

Votre service devra contenir au moins 3 fonctions.

Implémentez ensuite le service dans les technologies de votre choix. Pour ne pas surcharger l'infrastructure, choisissez une BDD mongo ou mysql (mariadb).

Votre API devra suivre les bonnes pratiques suivantes :
 - Vérification au lancement de la présence dans les variables d'environnement des éléments de configuration nécessaires
 - PORT configurable via les variables d'environnement
 - HealthCheck
 - OpenTelemetry
 - Insecure flag pour lancer l'api en mode sécurisée ou non (TLS)

Votre API devra contenir au moins une route protégée par JWT.