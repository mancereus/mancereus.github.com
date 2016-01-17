var initcards = [
    { name: "Weg", Aktion: "", flavour: "Jane: 'Ob ich ihm von meiner Suche erzählen kann?'", hor: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'", ver: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jane: 'Jack hat ein düsteres Geheimnis, das spüre ich.'", ver: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jack: 'Was suchen wir hier eigentlich?'", ver: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jack: 'Ich brauche einen Whisky.'", ver: "true", hor: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jane: 'Puuh, diese Luft bringt mich um.'", ver: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jack: 'Wer hat wohl meinen Bezintank manipuliert?'", hor: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jack: 'Hier können wir rasten.'", hor: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jane: 'Hier waren wir doch schon mal.'", hor: "true", type: "Basiskarte" },
    { name: "Weg", Aktion: "", flavour: "Jane: Prof. Hampton ist ein berühmter Archeoöloge.", hor: "true", type: "Basiskarte" },
    { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: "true", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.", hor: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: "true", ver: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.", hor: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
    { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
    { name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.", ver: "true", info: "info", bgc: "blue", type: "Basiskarte" },
    { name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: "true", imgclass: "symbol", pagebreak: "pagebreak", type: "Basiskarte" },
    { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
    { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
    { name: "Hängebrücke", info: "warn", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", type: "Basiskarte" },
    { name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", hor: "true", type: "Basiskarte" },
    { name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ", hor: "true", imgclass: "symbol", type: "Basiskarte" },
    { name: "Weg", level: "normal", Aktion: "", flavour: "Jack: 'Hier machen wir Pause.'", ver: "true", type: "Basiskarte" },
    { name: "Weg", level: "normal", Aktion: "", flavour: "Jane: 'Ist das der richtige Weg?'", hor: "true", type: "Basiskarte" },
    { name: "Hängebrücke", level: "normal", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", info: "warn", bgc: "gelb", type: "Basiskarte" },

    { name: "Boot", akt: "1", Aktion: "Mit dem Boot kannst du dem See überqueren oder auf dem Fluss fahren.", hor: true, imgclass: "symbol", type: "Feldkarte" },
    { name: "Fackel", akt: "1", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.", ver: "true", imgclass: "symbol", pagebreak: "pagebreak", type: "Feldkarte" },
    { name: "Fluss", akt: "1", color: "H", Aktion: "Wenn ihr den Weg zum 'Reich der Schlangen' kennt, könnt ihr mit dem Boot über den Fluss dorthin fahren und den Akt 1 beenden.", info: "info", bgc: "blue", type: "Feldkarte" },
    { name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", hor: "true", imgclass: "symbol", type: "Feldkarte" },
    { name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.", ver: "true", imgclass: "symbol", type: "Feldkarte" },
    { name: "Höhle", akt: "1", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.", ver: "true", info: "info", bgc: "blue", type: "Feldkarte" },
    { name: "Inschrift", akt: "1", Aktion: "Wenn du mit dem Tagebuch beim Tempel und bei dieser Inschrift warst, kann Jane den Weg zum 'Reich der Schlangen' erkennen.", hor: "true", info: "Jane2", bgc: "blue", win: "Schriftrolle", bgcwin: "green", type: "Feldkarte" },
    { name: "Affenhorde", akt: "1", Aktion: "Die Affenhorde lässt dich nicht passieren. Lege einen Gegenstand in den Vorrat, dann darfst du vorbeigehen.", info: "problem", pagebreak: "pagebreak", type: "Feldkarte" },
    { name: "Affenhorde", akt: "1", Aktion: "Die Affenhorde lässt dich nicht passieren. Lege einen Gegenstand in den Vorrat, dann darfst du vorbeigehen.", info: "problem", pagebreak: "pagebreak", type: "Feldkarte" },
    { name: "See", akt: "1", Aktion: "Nur mit dem Boot kannst du den See betreten oder überqueren.", info: "problem", type: "Feldkarte" },
    { name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", ver: "true", type: "Feldkarte" },
    { name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", type: "Feldkarte" },
    { name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info: "problem", type: "Feldkarte" },
    { name: "Tagebuch", akt: "1", Aktion: "Ihr findet das Tagebuch von Professor Hampton. Er sucht das verschollene Reich Mu. Suche zuerst den Tempel und dann die Inschrift.", imgclass: "symbol", type: "Feldkarte" },
    { name: "Tempel", akt: "1", Aktion: "Jane hat die Tempelruine gefunden. Bring das Tagebuch zuerst hierher und dann zur Inschrift.", hor: "true", bgc: "green", type: "Feldkarte" },
];


var initActions = [
    { name: "Lager", akt: "1", color: "H", Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 Dinge aus dem Vorrat auf passende leere Karten legen. (z.B.: Liane auf Lianenkarte)", bgc: "green", win: "Edelstein", task: true, type: "Aktionskarte" },
    { name: "Überfall", akt: "1", color: "H", Aktion: "Jack kommt ins Lager zurück und Jane ist verschwunden. Er findet Spuren eines Kampfes und Pfeile der Kannibalen. Lege Janes Inventarkarte zur Seite.", info: "Voodoopuppe", win: "Jane2", bgcwin: "green", task: true, type: "Aktionskarte" },

    { name: "Tierfalle", akt: "1", color: "H", Aktion: "Dein Bein verletzt sich in einer Tierfalle des Großwildjägers. Du kannst bis zu einem anderen Eckfeld pro Zug nur 3 Felder weit ziehen.", task: true, fuss: "-1", type: "Aktionskarte" },
    { name: "Karte", akt: "1", color: "H", Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true, type: "Aktionskarte" },
    { name: "Whiskykiste", akt: "1", color: "H", Aktion: "Jack findet eine Kiste voll Whisky. Falls du in den letzten 24 Stunden keinen Alkohol getrunken hat, kann sich auch Jack beherrschen. Ansonsten säuft er sich voll und verliert einen Gegenstand aus dem Inventar.", task: true, type: "Aktionskarte" },
    { name: "Treibsand", akt: "1", color: "H", Aktion: "Jack bleibt im Treibsand stecken. Jane muss eine Liane hierherbringen, um ihn zu retten. Gib die Liane dazu ab. Bisdahin kannst du Jacks Inventarkarte nicht verwenden.", task: true, type: "Erweiterung Aktionskarte" },
    { name: "Sturm", akt: "1", color: "H", Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true, type: "Erweiterung Aktionskarte" },
    { name: "Abendrot", akt: "1", color: "H", Aktion: "Im Sonnenuntergang verliebt sich Jack in Jane. Er weiss nicht, ob Sie seine Liebe erwidert. Schau dir die nächsten drei Karten vom Stapel an und lege Sie gemeinsam zurück oder unter den Stapel.", bgc: "green", win: "Edelstein", bgcwin: "green", task: true, type: "Aktionskarte" },
];

var secondActions = [

    { name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu und lege den Rucksack darauf.", ver: "true", imgclass: "symbol", type: "Basiskarte" },
];


var start = { name: "Akt I", akt: "1", color: "H", Aktion: "Jane hat den Piloten Jack für eine geheime Expedition in den Dschungel engagiert. Jack hat Alkoholprobleme und versucht für den Auftrag nüchtern zu bleiben. Das Flugzeug stürzt kurz vor dem Ziel ab. Jemand hat die Tanks durchlöchert...", task: true, type: "Startkarte" };