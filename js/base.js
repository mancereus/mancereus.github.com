 var initcards =  [
 {name: "Weg", Aktion: "",flavour: "Jane: 'Was war das für ein Geräusch?'",hor: "true"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Was für eine schöne Pflanze.' Jack: 'Vorsicht, die ist giftig.'",ver: "true"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Diese Stille ist unheimlich.'",ver: "true"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Wir sollten umkehren.'",ver: "true"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier geht es nicht weiter.'",ver: "true",hor: "true"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Pause.'",ver: "true"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Puuh, diese Luft bringt mich um.'",ver: "true"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Dein Vater ist vermutlich schon tot.' Jane: 'Nein, er lebt noch.'",hor: "true"},
 {name: "Weg", Aktion: "",flavour: "Jack: 'Hier können wir rasten.'",hor: "true"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Hier waren wir doch schon mal.'",hor: "true", pagebreak: "pagebreak"},
 {name: "Weg", Aktion: "",flavour: "Jane: 'Ist das der richtige Weg?'",hor: "true"},
 {name: "Rucksack", Aktion: "Mit dem Rucksack kannst du 3 Dinge mehr tragen.",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Machete", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",ver: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true", imgclass:"symbol"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Höhle", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Fackel", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak"},
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Hängebrücke", Aktion: "Die Hängebrücke kannst du mit vollem Inventar nicht überqueren. Lege Dinge dazu auf ihr Feld zurück.", warn:"Edelstein", bgc: "gelb" },
 {name: "Schlange", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",hor: "true"},
 {name: "Gegengift", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange. ",hor: "true", imgclass:"symbol"},
 {name: "Fels", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen."},

 ];

 var initActions = [ ];


 var start = {name: "Akt I", color : "H", Aktion: "Janes Vater Prof Hampton ist bei der Suche nach der alten Zivilisation Mu verschollen. Jane sucht nach Hinweisen, um ihren Vater wiederzufinden."};