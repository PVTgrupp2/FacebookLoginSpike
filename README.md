# FacebookLoginSpike

En dummy-sida för Facebook login. Bara en knapp "Logga in med Facebook" som tar en till facebooks inloggning, och skriver sedan ut "Välkommen [ditt namn]!".

Har strippat ned koden en aning för att bara göra just detta. Finns en massa info på developers.facebook.com om hur man hanterar detta vidare.

För att inloggningen ska fungera behöver sidan vara online och ha en URL och ett Facebook App-ID. Har satt upp den på min test-domän http://www.jagprovardetta.co.nf för nu. Kan sannolikt återanvända samma App-ID till vår sida.

Funktionen använder en jQuery plugin som underlättar livet för oss. Info om denna plugin finnes här:
https://github.com/ryandrewjohnson/jquery-fblogin
