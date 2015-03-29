 var actcards =  [
 {name: "Boot", akt: "3", Aktion: "Wenn du das Boot zum Fluss brinsgt, kannst du mit Jack, Jane und Prof. Hampton das Abenteuer erfolgreich beenden.", hor: true, imgclass:"symbol",type: "Feldkarte"},
 {name: "Dynamit", akt: "3", Aktion: "Mit dem Dynamit kannst du einen Felsen sprengen. Lege das Dynamit dazu von einem Nachbarfeld ohne Wand dazwischen auf den Felsen.", imgclass:"symbol",type: "Feldkarte"},
 {name: "Fels", akt: "3", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen. Mit Dynamit und Gura Gora auf einem Felsen, kannst du diesen sprengen und Gura Gora begraben.",type: "Feldkarte"},
 {name: "Heissluftballon", color : "H", akt: "3", imgclass:"symbol", Aktion: "Ihr findet einen alten Heissluftballon. Er scheint noch zu funktionieren, hat aber keine Luft.", warn:"Boot", bgc:"blue",type: "Feldkarte"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte 1 Feld frei ist. Sonst fangen und töten Sie euch.",type: "Feldkarte"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte 1 Feld frei ist. Sonst fangen und töten Sie euch.",type: "Feldkarte"},
 {name: "Ureinwohner", akt: "3", Aktion: "Die Ureinwohner durchstreifen das Tal. Ihr könnt euch vorbeischleichen, wenn auf jeder Inventarkarte 1 Feld frei ist. Sonst fangen und töten Sie euch.",type: "Feldkarte"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",hor: "true",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit über Wände auf ein offenes Feld springen. Lege die Liane dann in den Vorrat.",ver: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol",type: "Feldkarte"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",imgclass:"symbol",type: "Feldkarte"},
 {name: "Schw. Kugel", akt: "3", Aktion: "Die schwarze Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",ver: "true",type: "Feldkarte"},
 {name: "Weiße Kugel", akt: "3", Aktion: "Die weisse Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",hor: "true",type: "Feldkarte"}
 ];

 var initActions = [
 {name: "Ureinwohner", akt: "3",variant:"a", color : "H", Aktion: "Jane hat die Ureinwohner überzeugt, dass Ihr friedliche Absichten habt. Falls sie Jane gefangen hielten, kommt Sie nun mit dir mit. Die Ureinwohner lassen euch nun ungehindert vorbeiziehen.", win:"Jane2", bgcwin:"green", task: true,type: "Aktionskarte"},
 {name: "Gura Gora", akt: "3",variant:"b", Aktion: "Der Affendämon Gura Gora hat euch entdeckt. Nach jedem Zug zieht er 1 Feld waagrecht oder 1 Feld senkrecht auf offenen Karten in eure Richtung. Er ignoriert Dschungelwände. Wenn er euch erreicht, tötet er euch.",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", imgclass:"symbol", task: true,type: "Aktionskarte"},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Wenn du ihm beide Kugeln bringst, verlässt er mit euch das Tal.", imgclass:"symbol", task: true,type: "Aktionskarte"},
 {name: "Heisse Quelle", akt: "3",variant:"d", Aktion: "Ihr könnt den Heissluftballon hier mit heisser Luft füllen. Jack, Jane und Prof. Hampton können das Abenteuer hier erfolgreich beenden.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Aktionskarte"},
 ];

 var secondActions = [
 {name: "Ureinwohner", akt: "3",variant:"a", Aktion: "Der Großwildjäger wurde von den Ureinwohner grausam getötet. Falls Jane gefangen wurde, soll Sie nun sterben. Nur wenn du das Idol abgibst oder Gura Gora besiegst, lassen Sie Jane frei.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true,type: "Erweiterung Aktionskarte"},
 {name: "Ureinwohner", akt: "3",variant:"a", color : "H", Aktion: "Die Ureinwohner sehen in Jane die Inkarnation einer Göttin. Falls Jane in Akt 2 gefangen wurde, ist sie nun mit dem Goldschmuck bekleidet. Mit Dynamit oder Pistole kannst du Sie befreien.", win:"Jane2", bgcwin:"green", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Gura Gora", akt: "3",variant:"b", Aktion: "Der Affendämon Gura Gora hat euch entdeckt. Nach jedem Zug zieht er 1 Feld waagrecht und dann 1 Feld senkrecht auf offenen Karten in eure Richtung. Er ignoriert Dschungelwände. Wenn er euch erreicht, tötet er euch.",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", imgclass:"symbol", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Er ist seinen Verletzungen erlegen, und vor 2 Tagen gestorben. Er hat Jane einen Abschiedsbrief hinterlassen.", imgclass:"symbol", task: true,type: "Erweiterung Aktionskarte"},
 {name: "Prof Hampton", akt: "3",variant:"c",  Aktion: "Janes Vater hat sich in einer Höhle vor Gura Gora versteckt. Er ist zu schwach, um Gegenstände tragen zu können.", imgclass:"symbol", task: true,type: "Erweiterung Aktionskarte"},
 ];


 var start = {name: "Akt III", akt: "3",color : "H",  Aktion: "Ihr erreicht das verschollene Tal. Hier muss sich Prof. Hampton befinden. Vielleicht ist er noch am Leben.",type: "Startkarte"};