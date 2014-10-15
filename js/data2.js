 var actcards =  [
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",hor: "true"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true"},
 {name: "Artefakt", akt: "2", Aktion: "Du findest ein Artefakt der verschollenen Zivilisation. Bringe alle 4 Teile zum Taleingang", imgclass:"symbol",ver: "true"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",hor: "true", imgclass:"symbol"},
 {name: "Gegengift", akt: "2", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",ver: "true", imgclass:"symbol"},
 {name: "Höhle", akt: "2", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Lager", akt: "2", Aktion: "Im Lager des Jäger findest du die Artifakte, die dir der Jäger genommen hat.",hor: "true", bgc:"green"},
 {name: "Machete", akt: "2", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",ver: "true",imgclass:"symbol"},
 {name: "Pistole", akt: "2", Aktion: "Die Pistole ist alt und hat nur noch eine Kugel.",hor: "true",ver: "true", imgclass:"symbol", bgc: "gelb"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Schlange", akt: "2", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Taleingang", akt: "2", Aktion: "Mit den 4 Artefakten kannst du den Eingang zum verschollenen Tal öffnen. und beendest Akt II. Lege die Artefakte dazu hier ab.",hor: "true", bgc:"green"}
 ];

 var initActions = [
 {name: "Jäger", akt: "2", Aktion: "Der Großwildjäger Stoephasius klaut dir alle Artefakte und bringt sie zu seinem Lager. Mit der Pistole kannst du sie ihm dort abnehmen.",warn:"Pistole", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
  {name: "Idol", akt: "1", Aktion: "Mit dem Idol kannst du die Ureinwohner verjagen und an Ihnen vorbeilaufen.", imgclass:"symbol", task: true},
 {name: "Dynamit", akt: "2", Aktion: "Du findest einen versteckten Vorrat an Dynamit und kannst damit einen Felsen sprengen. Lege dazu das Dynamit von einem Nachbarfeld aus auf den Felsen.", imgclass:"symbol",task: true},
 {name: "Angriff", order: "4", akt: "2", color : "H",Aktion: "Jane wird von den Ureinwohnern gefangengenommen. Du kannst Sie erst in Akt III befreien.", warn:"Voodoopuppe", win:"Jane2", bgcwin:"green", task: true},
 {name: "Diamantenmine", akt: "2", color : "H",Aktion: "Mit der Fackel findest du in der dunklen Mine grosse Diamenten. Wenn du Sie herausholst, verlierst du die Fackel.", warn:"Fackel", win:"Diamantenmine", bgcwin:"green", imgclass:"symbol", task: true},
 {name: "Tiger", akt: "2", color : "H",Aktion: "Ein Tiger überrascht euch und jagt euch 2 Felder diagonal zur Mitte. Ihr könnt die Aktion auf diesem Feld ignorieren.", task: true}
];

 var start = {name: "Akt II", akt: "2",color : "H", 
 Aktion: "Ihr erreicht das 'Reich der Schlangen', in dem Prof Hampton verschwunden ist. Sucht nach dem Zugang zum verschollenen Tal."};