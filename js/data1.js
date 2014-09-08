 var actcards =  [
 {name: "Boot", akt: "1", Aktion: "Bring das Boot zum Fluss, um das Abenteuer zu verlassen.", hor: true, imgclass:"symbol"},
 {name: "Fackel", akt: "1", Aktion: "Mit der Fackel kann man durch die Höhlen gehen.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak"},
 {name: "Fluss", akt: "1", color : "H", Aktion: " Du kannst das Abenteuer mit dem Boot am Fluss verlassen. Hier darfst du beliebige Gegenstände ablegen.", warn:"Boot", bgc:"blue"},
 {name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. ",hor: "true", imgclass:"symbol"},
 {name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. ",ver: "true", imgclass:"symbol"},
 {name: "Höhle", akt: "1", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Inschrift", akt: "1", Aktion: "Mit dem Tagebuch kann Jane die Inschrift entziffern und den Ort finden, an dem ihr Vater verschwunden ist. Lege das Tagbuch hier ab. Über den Fluss kannst du dann in Akt 2 wechseln.",hor: "true", warn:"Jane2", bgc:"blue", win:"Schriftrolle", bgcwin:"green"},
 {name: "Kannibale", akt: "1", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Kannibale", akt: "1", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Kannibale", akt: "1", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Tagebuch", akt: "1", Aktion: "Das Tagebuch enthält die Aufzeichnungen des Professors. Suche die Inschrift.", imgclass:"symbol"},
 {name: "Tempel", akt: "1", Aktion: "Die verschollene Tempelruine.",hor: "true", bgc:"green"},
 ];


 var initActions = [
 {name: "Idol", akt: "1", Aktion: "Mit dem Idol kannst du die Kannibalen verjagen und an Ihnen vorbeilaufen.", imgclass:"symbol", task: true},
 {name: "Lager", akt: "1",color : "H",Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 leere Dingfelder aus dem Vorrat wieder auffüllen.", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Abendrot", akt: "1",color : "H",Aktion: "Im Sonnenuntergang verliebst du dich in Jane. Du weisst nicht, ob Sie deine Liebe erwidert.", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Tierfalle", akt: "1",color : "H",Aktion: "Dein Bein verletzt sich in einer Tierfalle des Jägers. Du kannst bis zu einem anderes Eckfeld pro Zug nur 3 Felder weit ziehen.", task: true, fuss: "-1"},
 {name: "Affenhorde", akt: "1",color : "H",Aktion: "Eine Affenhorde überfällt euch und klaut euch einen Gegenstand (deiner Wahl).", task: true},
 {name: "Karte", akt: "1",color : "H",Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true},
 {name: "Sturm", akt: "1",color : "H",Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true},
 ];


 var start = {name: "Akt I", color : "H", Aktion: "Janes Vater Prof Hampton ist bei der Suche nach der alten Zivilisation Mu verschollen. Jane sucht nach Hinweisen, um ihren Vater wiederzufinden.", task: true};