 var actcards = [
 {name: "Boot", akt: "1", Aktion: "Bring das Boot zum Fluss, um in den nächsten Akt zu fahren.", hor: true, imgclass:"symbol"},
 {name: "Fackel", akt: "1", Aktion: "Mit einer Fackel kann man von einer Höhle zu einer anderen ziehen.",ver: "true", imgclass:"symbol", pagebreak: "pagebreak"},
 {name: "Fluss", akt: "1", color : "H", Aktion: "Wenn ihr den Weg zum 'Reich der Schlangen' kennt, könnt ihr mit dem Boot über den Fluss dorthin fahren.", warn:"Boot", bgc:"blue"},
 {name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",hor: "true", imgclass:"symbol"},
 {name: "Gegengift", akt: "1", Aktion: "Das Gegengift schützt dich vor einer Schlange. Lege das Gegengift dazu auf die Schlange.",ver: "true", imgclass:"symbol"},
 {name: "Höhle", akt: "1", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",ver: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Inschrift", akt: "1", Aktion: "Wenn du mit dem Tagebuch zuerst beim Tempel und dann hier warst, kann Jane die Inschrift entziffern und weis den Weg zum 'Reich der Schlangen'.",hor: "true", warn:"Jane2", bgc:"blue", win:"Schriftrolle", bgcwin:"green"},
 {name: "Affenhorde", akt: "1", Aktion: "Die Affenhorde lässt dich nicht passieren. Gib einen Gegenstand ab, dann darfst du vorbeigehen.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Affenhorde", akt: "1", Aktion: "Die Affenhorde lässt dich nicht passieren. Gib einen Gegenstand ab, dann darfst du vorbeigehen.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Affenhorde", akt: "1", Aktion: "Die Affenhorde lässt dich nicht passieren. Gib einen Gegenstand ab, dann darfst du vorbeigehen.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift",ver: "true"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Schlange", akt: "1", Aktion: "Die Schlange hat ein tödliches Gift und beisst dich. Lege ein Gegengift hier ab, um vor der Schlange geschützt zu sein.", warn:"Gegengift"},
 {name: "Tagebuch", akt: "1", Aktion: "Das Tagebuch enthält die Aufzeichnungen des Professors. Er will zum 'Reich der Schlangen'. Suche zuerst den Tempel und dann die Inschrift.", imgclass:"symbol"},
 {name: "Tempel", akt: "1", Aktion: "Die verschollene Tempelruine. Bring das Tagebuch zuerst hierher und dann zur Inschrift.",hor: "true", bgc:"green"},
 ];


 var initActions = [
 {name: "Lager", akt: "1",color : "H",Aktion: "Du findest ein verlassenes Lager. Du kannst bis zu 2 Dinge aus dem Vorrat auf passende leere Karten legen. (z.B.: Liane auf Lianenkarte)", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Abendrot", akt: "1",color : "H",Aktion: "Im Sonnenuntergang verliebt sich Jack in Jane. Du weisst nicht, ob Sie deine Liebe erwidert. Schau dir die nächsten drei Karten vom Stapel an und lege Sie zurück oder unter den Stapel.", warn:"Edelstein", bgc:"green", win:"Edelstein", bgcwin:"green", task: true},
 {name: "Tierfalle", akt: "1",color : "H",Aktion: "Dein Bein verletzt sich in einer Tierfalle des Großwildjägers. Du kannst bis zu einem anderen Eckfeld pro Zug nur 3 Felder weit ziehen.", task: true, fuss: "-1"},
 {name: "Karte", akt: "1",color : "H",Aktion: "Du findest eine Karte des Dschungels. Ab sofort kannst du Karten auch diagonal anlegen.", task: true},
 {name: "Treibsand", akt: "1",color : "H",Aktion: "Jack bleibt im Treibsand stecken. Jane muss eine Liane hierherbringen, um ihn zu retten. Gib die Liane dazu ab.", task: true},
 {name: "Sturm", akt: "1",color : "H",Aktion: "Ein Sturm zieht durch den Dschungel. Alle verwendeten Macheten kommen auf Machetenfelder zurück.", task: true},
 ];


 var start = {name: "Akt I", akt: "1",color : "H", Aktion: "Jane hat den Dschungelführer Jack engagiert. Sie sucht ihren  Vater Prof. Hampton, der bei einer Expedition im Dschungel verschollen ist. ", task: true};