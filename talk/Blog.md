Comme vous l'avez surement constaté, JavaScript n'arrête pas de gagner du terrain par rapport aux langages traditionnelles côté serveur. Alors qu’il était utilisé uniquement pour valider superficiellement les formulaires avant l’envoi des données aux serveur (où les technologies Back avaient le monopole total des traitements métiers), à présent, et pour des raisons d'ergonomie, de réactivité et la nécessité de supporter plusieurs périphériques, l'architecture des applications a été repensée et limite de plus en plus le Back à de simples APIs REST retournant des données brutes et passe désormais la main plutôt aux applications clientes pour implémenter les différentes règles et workflows métiers.

Les développeurs JavaScript se sont donc retrouvés du jour au lendemain obligés d'adopter un style de programmation modulaire, de faire l'inversion du contrôle via l'injection de dépendance, d'avoir une couche Modèle, de séparer les préoccupations entre le contrôleur et la vue etc...

Et avec ces nouvelles exigences viennent de nouveaux pouvoirs, et avec plus de pouvoirs viennent plus de responsabilités; Il ne fallait surtout pas compromettre la qualité des livrables et on demande aux développeurs JavaScript d'assurer le même niveau de qualité qu'on exigeait à des techno mûres comme Java par exemple. Cuisiner du spaghetti avec jQuery n'était plus tolérable, et c'est pour ça que les tests dans JavaScript ont commencé à avoir tout leur sens.

La présentation "Les Réveil des Tests des Composants JavaScript" a essayé de rebondir sur cette nouvelle nécessité, la première partie théorique a été consacrée aux concepts généraux tels qu’ils étaient définis dans le livre référence "xUnit Design Patterns", l'objectif de cette partie est de se mettre d’abord d'accord sur le même vocabulaire en rappelant en parallèle l'importance d'adopter une conception testable. C'était donc l'occasion de rappeler :

- L'importance de définir un périmètre unitaire par chaque SUT (Respect du principe de la responsabilité unique, tester une seul chose à la fois, faire la différence entre un test unitaire et un test d'intégration)
- Expliciter l'API publique des composants et la concevoir pour être manipulable de l'extérieur (Injection de dépendance, conception ouverte à l'extension...)
- Faire la différence entre les paramètres d'entrée directs et indirects (Introduits via l'API public ou par les dépendance)
- Bien cerner les paramètres de sorties qui peuvent aussi être directs ou indirects (Pareil, retournés par l'API ou observés via les dépendances)
- Le rôle des doublures de tests dans le contrôle des paramètres d'entrée et l'observation des paramètres de sortie
- Tester l'état Vs Tester le comportement
- L'organisation d'un test unitaire et le rôle de chaque étape (Fixture Setup, Exercice, Assertion Tear Down)
- Un bon test doit suivre les principes FIRST (Fast, Isolated/Independant, Repeatable, Self-checking & Timely)

La deuxième partie essaye de présenter le développement JavaScript avec une approche orientée Composants plutôt que MVC pour réussir une conception testable. Les avantages de cette approche:

- Niveau de granularité plus fin (contre Fat Controllers qui font souvent plusieurs choses à la fois)
- Les composants peuvent être autonomes, bootstrappés comme application, chargé comme une route ou utilisé comme fils d'un composant père…
- Les composants sont réutilisables
- Les composants ont une API public explicite
- Les composants ne sont pas liés à un contexte particulier
- Les composants du bas niveau communique via le composant parent
- Éviter un couplage fort entre les différents composants et introduire un système de communication basé sur des évènements

Pour organiser les composants, on peut suivre le modèle de l'Atomique Design qui sépare les composants en :

- Atomes
- Molécules
- Organismes
- Ecosystèmes
- Environnements

Avec des recommandations comme par exemple les composants de type Atomes/Molécules/Organismes n'ont que des inputs directs et ne font que afficher des données ou interagir avec l'utilisateur. Par contre, c'est au niveau de l'Ecosystème/Environnement que les dépendances sont injecté pour introduire des inputs indirects ou provoquer des outputs indirect

Et avant de présenter comment tester les Composants, il faut d’abord rappeler leur rôle à savoir:

- Afficher une visualisation HTML des données passés en argument (Inputs)
- Fournir à l'utilisateur un moyen d'interagir avec le SUT
- Communiquer avec les autres composants (Ecouter/émettre des évènements)

Un autre rappelle que même doté des tous outils les plus puissants qu’on peut avoir, si le Design pour la Testabilité n’a pas été pris au sérieux, alors ces outils ne vont pratiquement servir à rien.

Vous pouvez accéder au code source de démosntartion via ce repo GitHub, cette application type utilise les technologies suivantes :

- EcmaScript 6: Le code source est écrit avec la nouvelle version de JavaScript 2015
- Webpack: Le nouveau bundler qui écrase la concurrence (Gulp, Grunt, Browserfy...) grâce à qui le code ES6 est transpilé en ES5 (sans parler du serveur local qu’il embarque, le hot reload,...)
- Ractive: Une librairie aussi performante que React pour faire des vue (doté de data-binding, gestion de cycle de vie, système d'évènement...) avec une courbe d'apprentissage bien plus courte qu'un framework full-stack comme Angular
- Mocha: Test runner qui supporte l'approche TDD/BDD
- Chai: Librairie d'assertion
- Sinon: Librairie pour construire les doublures de tests
- jsdom: Pour faker un DOM en JavaScript et pouvoir tester nos composants JS en console (sans browser)

La procédure d'installation :
- Readme/md

Un exemple de tests simples d'état:
- tests/slides/PureComponents.js

Un exemple de tests de composant avec un fake DOM via jsdom :
- tests/slides/PureComponents.js

Un exemple de tests d'état (Le HTML attendu) et test du bon comportement après des clicks:
- tests/components/CompteSwitcherSpec.js

Un exemple de test avec doublure de type Espion d'une Dépendance :
- tests/slides/components/MainSectionSpec.js

Si vous l’avez raté, la ligne la plus importante:

`expect(VirementService.postVirement.withArgs(1, 300).calledOnce, "Le service VirementService.postVirement n'a pas été appelé avec les bons arguments").to.be.true;`

N’hésiter pas de parcourir l’ensemble des scénarios de tests en installant et lançant d’abord le serveur local des tests via

`npm install`
`npm run devtest`

Plus sur le Readme.md