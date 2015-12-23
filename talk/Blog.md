Comme vous l'avez surement constaté, JavaScript n'arrête pas de gagner du terrain par rapport aux langages traditionnelles côté serveur. Alors qu'on se contentait de l'utiliser pour faire que de la validation superficielle des données de formulaires avant l'envoi aux serveurs où les technologies Back avaient le monopole total des traitements métiers, à présent, et pour des raisons d'ergonomie, de réactivité et l'importance de supporter plusieurs périphériques, l'architecture des applications a été repensée et limite de plus en plus ce Back à de simple API REST retournant des données brutes et passe la main plutôt aux applications clients pour implémenter les différentes règles et workflows fonctionnels.

Les développeurs JS se sont donc retrouvés du jour au lendemain obligés d'adopter un style de programmation modulaire, de faire l'inversion du contrôle via l'injection de dépendance, d'avoir une couche Model, de séparer les préoccupations entre le contrôleur et la vue etc...

Et avec ces nouvelles exigences viennent de nouveaux pouvoirs, et avec plus de pouvoirs viennent plus de responsabilités. Il ne fallait surtout pas compromettre la qualité des livrables et on demande à présent aux développeurs JS d'assurer le même niveau de qualité qu'on exigeait à des techno mûres comme Java par exemple. Cuisiner du spaghetti avec jQuery n'était plus tolérable, et c'est pour ça que les tests dans JavaScript ont commencé à avoir tout leur sens.

La présentation "Les Réveil des Tests des Composants JavaScript" a essayé de présenter cette nouvelle nécessité, la première partie théorique et a été consacrée aux concepts généraux tels qu’ils étaient définis dans le livre référence "xUnit Design Patterns", l'objectif de cette partie est de se mettre d’abord d'accord sur le même vocabulaire en rappelant en parallèle l'importance d'adopter une conception testable. C'était donc l'occasion de rappeler :

- L'importance de définir un périmètre unitaire par chaque SUT (Respect du principe de la responsabilité unique, tester une seul chose à la fois, faire la différence entre test unitaire et test d'intégration)
- Expliciter l'API publique et la concevoir pour être manipulable de l'extérieur (Injection de dépendance et conception ouverte à l'extension...)
- Faire la différence entre les paramètres d'entrée directs ou indirects (Introduits via l'API public ou par les dépendance)
- Bien cerner les paramètres de sorties qui peuvent aussi être directs ou indirects (Retournés par l'API ou observés via les dépendances)
- Le rôles des doublures de tests dans le contrôle des paramètres d'entrée et l'observation des paramètres de sortie
- Tester l'état Vs Tester le comportement
- L'organisation d'un test unitaire et le rôle de chaque étape (Fixture Setup, Exercice, Assertion Tear Down)
- Un bon test doit suivre les principes FIRST (Fast, Isolated/Independant, Repeatable, Self-checking & Timely)

La deuxième partie essaye de présenter le développement JS avec une approche orientée Composants plutôt que MVC pour réussir une conception testable. Les avantages :

- Niveau de granularité plus fin (contre Fat Controller qui font souvent plusieurs choses à la fois)
- Les composants peuvent être autonomes, bootstrappés comme application, chargé comme une route ou utilisé comme fils d'un composant père
- Les composants sont réutilisable
- Les composants ont une API public explicite
- Les composants ne sont pas liés à un contexte particulier
- Les composants du bas niveau communique toujours via le composants parent
- Éviter un couplage fort entre les différents composants et introduire un système de communication basé sur des évènements

Pour organiser les composants, on peut suivre le modèle de l'Atomique Design qui sépare les composants en :
- Atomes
- Molécules
- Organismes
- Ecosystèmes
- Environnements

Avec des recommandations comme par exemple les composants de type Atomes/Molécules/Organismes n'ont que des input direct et ne font que afficher des donner ou interagir avec l'utilisateur
Par contre, c'est au niveau de l'Ecosystème/Environnement que les dépendances sont injecté pour introduire des inputs indirects ou provoquer des outputs indirect

Le rôle d'un composant :
- Afficher une visualisation HTML des données inputs
- Fournir à l'utilisateur un moyen d'interagir avec le système
- Communiquer avec les autres composants (Ecouter/émettre des évènements)

La démonstration utilise les technologies suivantes :

- Le code source est écrit avec la nouvelle version de JavaScript 2015 (EcmaScript 6)
- Webpack : Le nouveau bundler qui écrase la concurrence (Gulp, Grunt, Browserfy...) grâce à qui le code ES6 est transpilé en ES5 (sans parler du hot reload...)
- Ractive: Une librairie aussi performante que React pour faire des vue (doté de data-binding, gestion de cycle de vie, système d'évènement...) avec une courbe d'apprentissage bien plus courte qu'un framework full-stack comme Angular
- Mocha : Test runner qui supporte l'approche TDD/BDD
- Chai : Librairie d'assertion
- Sinon : Librairie pour construire les doublures de tests
- jsdom : Pour faker un DOM en JavaScript et pouvoir tester nos composants JS en console (sans browser)

La procédure d'installation


Un exemple de tests simples d'état:
- tests/slides/PureComponents.js

Un exemple de tests de composant avec un fake DOM via jsdom :
- tests/slides/PureComponents.js

Un exemple de tests d'etat (Le HTML attendu) et test du bon comportement apres des click:
- tests/components/CompteSwitcherSpec.js

Un exemple de test avec doublure de type Esion d'une Dépendance :
- tests/slides/components/MainSectionSpec.js

La ligne la plus importante:

`expect(VirementService.postVirement.withArgs(1, 300).calledOnce, "Le service VirementService.postVirement n'a pas été appelé avec les bons arguments").to.be.true;`