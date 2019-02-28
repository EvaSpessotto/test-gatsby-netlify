---
path: /blog/new-post
date: 2019-02-28T14:48:11.952Z
title: 'La gestion de projet, toute une organisation'
tags:
  - new
  - react
  - test
---
![kanban](/assets/kanban.png "kanban")



Si vous avez lu mon article précédent, vous savez que j’ai du faire le choix d’une stack pour la refonte du site de commit42 afin de répondre à certains besoins. Pour les autres, et bien, vous êtes à présent au courant 😁 (mais vous pouvez quand même aller lire [l’article](https://www.commit42.fr/blog/un-nouveau-site-pour-une-nouvelle-annee/)).

Bonne nouvelle: mes choix ont été validés par l’équipe, je peux maintenant passer à la planification du projet.

## Quelle méthode adopter  ?

Pour choisir la façon dont je voulais gérer mon projet j’ai commencé par me renseigner sur les différentes techniques de gestion de projet, bien que j’ai été habituée à l’agilité avec la méthode Scrum et la méthode Kanban.

J’ai donc relevé les possibilités*  suivantes:

* le cycle en V
* la liste de tâches (gestion de tickets)
* la méthode kanban

\*(cette liste est non exhaustive évidemment)



**Cycle en V**

Le cycle en V est une méthode de gestion de projet qui vise à limiter les retours en arrières lors de la conception d’un produit en enchaînant les étapes les unes après les autres. Elle est moins favorisée de nos jours car elle ne correspond plus aux attentes actuelles de time to market accéléré car aucune avancée n’est exploitable avant la toute fin du projet.

Cette méthode qui vient du BTP pourrait être vulgarisée de la façon suivante : on planifie la maison puis on la construit petit à petit dans un ordre logique (on ne pose pas le toit avant d’avoir les murs). Pour chaque tâche terminée on la fait valider avant de passer à la suivante jusqu’à ce que la maison soit terminée.

Ci-dessous un schéma de l’ensemble de la méthode: 

![cycle en v](/assets/schema-cycle-en-v.png "schéma cycle en v")



## Méthodes agiles

**_“Eva qu’est-ce que ça veut dire “méthode agiles” ?”_**

Ce sont de approches de gestion de projet qui se veulent plus souples que les méthodes dites “classiques” (comme le cycle en V par exemple). Le principe est de fixer des objectifs à atteignables à court terme et de faire un point régulièrement pour éventuellement réorienter le projet selon les besoins. Chaque objectif doit être atteignable dans un laps de temps défini appelé itération ou sprint. Une fois une itération terminée une autre commence. Souvent une itération dure une semaine mais elle peut aller jusqu’à quatre semaines.

Lorsqu’un projet débute on commence par mettre à disposition le plus rapidement possible une version minimale (MVP pour Minimum Viable Product). On viendra l’améliorer itération par itération en y ajoutant les fonctionnalités prévues.

Pour mon MVP je vais conserver la page d’accueil déjà en place sur le site de commit42 et la partie blog (qui est une liste d’article) en y implémentant le headless CMS afin de pouvoir poster des articles plus facilement.

C’est en cela que le TTM est réduit en agile: on se limite au strict minimum pour une première mise en ligne rapide.

Chaque itération va servir à améliorer ce MVP étape par étape et de manière “livrable” ; c’est à dire qu’à chaque fin de sprint la fonctionnalité qui a été développée est mise à disposition des utilisateurs finaux.

Une fois le MVP terminé, on peut commencer à mettre en place une nouvelle page d’accueil par exemple.

**__**

**_“Du coup Eva, c’est quoi les avantages de l’agilité ?”_** 

L’agilité prend en compte que l’humain n’est pas une machine et accepte que l’on puisse se tromper: définir les besoins de manière incomplète, mal interpréter la demande des utilisateurs finaux ou découvrir d’autres solutions plus pertinentes en cours de projet.

Cela permet aussi de pouvoir s’arrêter à tout moment (de manière temporaire ou définitive) tout en s’assurant d’avoir un “produit” exploitable, même si incomplet.

Les livraisons régulières et rapides permettent aussi d’avoir des retours utilisateurs directs afin d’améliorer régulièrement  le projet selon les  attentes exprimées par les clients. Vous pouvez retrouver le manifeste agile juste ici pour en savoir plus.

La liste de tâches et le système Kanban sont tous les deux issus des méthodes agiles et donc rythmés par des itérations jusqu’à la fin du projet. 

Au début du projet on identifie les besoins qui sont ensuite découpés en petites tâches. On les priorise et réparti sur les différentes itérations à venir.

Dans ces deux méthodes on commence par les tickets les plus importants et si il nous reste du temps, on traite les tickets moins prioritaires. A la fin du sprint, s’ils n’ont pas été traités ils peuvent être déplacés à l’itération suivante ou abandonnés.

Ce mode de fonctionnement permet de concentrer l’énergie sur les points réellement importants et de ne pas perdre de temps sur des fonctionnalités secondaires.
