 var initcards =  [

 {name: "Weg", Aktion: "",flavour: "Jane: 'Was war das für ein Geräusch?'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Ich bin auf der Suche nach meinem Vater.' Jack: 'Vorsicht, die ist giftig.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Prof. Hampton ist mein Vater.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Wir sollten umkehren.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier geht es nicht weiter.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Prof. Hampton ist bei der Suche nach El Dorade verschollen.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Prof. Hampton ist vermutlich schon tot.' Jane: 'Nein, er lebt noch.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier können wir rasten.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Hier waren wir doch schon mal.'",hor: "true", type: "Basiskarte"},
 {name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu. damit kannsz du zwei Dinge mehr tragen.",ver: "true", type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", info:"info" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", info:"info" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", info:"info" , bgc:"blue",type: "Basiskarte"},
 {name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak",type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
{ name: "Kannibalen", akt: "2", Aktion: "Die Kannibalen durchstreifen das Tal. Wenn ihr den Schrunpfkopf bei euch habt, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem", type: "Feldkarte" },
{ name: "Kannibalen", akt: "2", Aktion: "Die Kannibalen durchstreifen das Tal. Wenn ihr den Schrunpfkopf bei euch habt, lassen sie euch vorbeiziehen. Ansonsten könnt ihr das Feld nicht betreten.", info: "problem", type: "Feldkarte" },
 {name: "Schrumpfkopf", Aktion: "Mit dem Schrumpfkopf lassen dich die Kannibal ungehindert vorbeiziehen. ",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte", info: "problem"},
    {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Dynamit", akt: "2", Aktion: "Du findest einen versteckten Vorrat an Dynamit und kannst damit einen Felsen sprengen. Lege dazu das Dynamit von einem Nachbarfeld aus ohne Wand dazwischen auf den Felsen.", imgclass:"symbol", type: "Erweiterung Aktionskarte"},
 {name: "Fels", level: "schwer", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte", info: "problem"},

 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true",type: "Feldkarte"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true",type: "Feldkarte"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",hor: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Höhle", akt: "2", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", info:"info" , bgc:"blue",type: "Feldkarte"},
 {name: "Machete", akt: "2", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true",imgclass:"symbol",type: "Feldkarte"},
 {name: "Pistole", akt: "2", Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.",hor: "true",ver: "true", imgclass:"symbol", bgc: "gelb",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info:"problem",ver: "true",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info:"problem",type: "Feldkarte"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", info:"problem",type: "Feldkarte"},
 {name: "Taleingang", akt: "2", Aktion: "Mit den 4 Artefakten kannst du den Eingang zum verschollenen Tal öffnen. und beendest Akt II. Lege die Artefakte dazu hier ab.",hor: "true", bgc:"green",type: "Feldkarte"}
 ];

 var initActions = [
 {name: "Jäger", akt: "2", Aktion: "Der Großwildjäger Stoephasius klaut dir alle Artefakte und bringt sie zur gegenüberliegenden Eckkarte. Mit der Pistole kannst du sie ihm dort abnehmen.",info:"warn", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Aktionskarte"},
 {name: "Gefangen", akt: "2", Aktion: "Jack wird von den Kannibalen überrascht und gefangen. Jane muss den Kannibalen den Schrumpfkopf geben, dann lassen sie Jack frei. Bis dahin kannst du Jacks Inventarkarte nicht verwenden.",info:"warn", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Aktionskarte"},
 {name: "Diamantenmine", akt: "2", color : "H",Aktion: "Mit der Fackel findest du in der dunklen Mine grosse Diamanten. Wenn du Sie herausholst, verlierst du die Fackel.", info:"warn", win:"Diamantenmine", bgcwin:"green", imgclass:"symbol", task: true,type: "Aktionskarte"},
 {name: "Tiger", akt: "2", color : "H",Aktion: "Ein Tiger überrascht euch und jagt euch 2 Felder diagonal zur Mitte. Ihr könnt die Aktion auf diesem Feld ignorieren.", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Königin", akt: "2", color : "H",Aktion: "Jane wird von den Kannibalen als Dschungelkönigin verehrt. Lege mit der Fackel ein Feuer, dann kann Jane unbemerkt fliehen. Die Fackel geht in den Vorrat.", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Schatzkammer", akt: "2",variant:"d", Aktion: "Ihr habt die Schatzkammer der Kannibalen gefunden. Wenn ihr die 4 Artefakte hier ablegt, findet Jane die genaue Beschreibung von El Dorado. Über einen versteckten Höhlenausgang könnt ihr das Tal verlassen. The FIN.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Erweiterung Aktionskarte"},
 ];

 var secondActions = [
 {name: "Fluss", akt: "3", variant:"d",Aktion: "Ihr könnt mit dem Boot am Fluss das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Erweiterung Aktionskarte"},
];

 var start = {name: "Akt II", akt: "2",color : "H",  task: true,
 Aktion: "Ihr erreicht das 'Reich der Schlangen', in dem Prof Hampton verschwunden ist. Sucht nach dem Zugang zum verschollenen Tal.",type: "Startkarte"};