 var initcards =  [
 {name: "Weg", Aktion: "",flavour: "Jane: 'Was war das für ein Geräusch?'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Diese Stille ist unheimlich.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Wir sollten umkehren.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier geht es nicht weiter.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Puuh, diese Luft bringt mich um.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Dein Vater ist vermutlich schon tot.' Jane: 'Nein, er lebt noch.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier können wir rasten.'",hor: "true",type: "Basiskarte"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Hier waren wir doch schon mal.'",hor: "true", type: "Basiskarte"},
 {name: "Rucksack", Aktion: "Du findest einen alten Rucksack. Nimm die Inventarkarte Rucksack hinzu und lege den Rucksack darauf.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Höhle", Aktion: "Wenn man die Fackel besitzt, kann man von dieser Höhle direkt zu einer anderen Höhlenkarte ziehen.",ver: "true", warn:"Fackel" , bgc:"blue",type: "Basiskarte"},
 {name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen. Die Fackel darf man dabei behalten.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak",type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück." ,type: "Basiskarte"},
 {name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",hor: "true",type: "Basiskarte"},
 {name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ",hor: "true", imgclass:"symbol",type: "Basiskarte"},
 {name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},

 ];
var normal = [
 {name: "Weg", level: "normal", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",type: "Basiskarte"},
 {name: "Weg", level: "normal", Aktion: "",flavour: "Jane: 'Ist das der richtige Weg?'",hor: "true",type: "Basiskarte"},
 {name: "Hängebrücke", level: "normal", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb",type: "Basiskarte" },
 ];
var hart = [
 {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Fels", level: "schwer", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},
 ];
var extrem = [
 {name: "Weg", level: "schwer", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true",hor: "true",type: "Basiskarte"},
 {name: "Fels", level: "extrem", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},
 {name: "Fels", level: "extrem", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen.",type: "Basiskarte"},
 ];

 var initActions = [ ];


 var start = {name: "Akt I", color : "H", Aktion: "Janes Vater Prof Hampton ist bei der Suche nach der alten Zivilisation Mu verschollen. Jane sucht nach Hinweisen, um ihren Vater wiederzufinden.",type: "Startkarte"};