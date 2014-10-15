 var actcards =  [
 {name: "Boot", akt: "3", Aktion: "Bring das Boot zum Fluss, um das Abenteuer zu beenden.", hor: true, imgclass:"bigsymbol"},
 {name: "Dynamit", akt: "3", Aktion: "Mit dem Dynamit kannst du einen Felsen sprengen. Lege das Dynamit dazu auf den Felsen.", imgclass:"symbol"},
 {name: "Fels", akt: "3", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen. Mit Dynamit und Gura Gora auf einem Felsen, kannst du diesen sprengen und Gura Gora begraben."},
 {name: "Fluss", color : "H", akt: "3", Aktion: "Jack, Jane und Prof. Hampton können mit dem Boot am Fluss das Abenteuer hier erfolgreich beenden.", warn:"Boot", bgc:"blue"},
 {name: "Kannibale", akt: "3", Aktion: "Die Ureinwohner werden von Gura Gora zu Menschenopfern gezwungen. Du hast das Idol, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Kannibale", akt: "3", Aktion: "Die Ureinwohner werden von Gura Gora zu Menschenopfern gezwungen. Du hast das Idol, sonst töten sie dich.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Kannibale", akt: "3", Aktion: "Die Ureinwohner werden von Gura Gora zu Menschenopfern gezwungen. Du hast das Idol, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Kannibale", akt: "3", Aktion: "Die Ureinwohner werden von Gura Gora zu Menschenopfern gezwungen. Du hast das Idol, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",ver: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true",imgclass:"symbol"},
 {name: "Schw. Kugel", akt: "3", Aktion: "Die schwarze Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",ver: "true"},
 {name: "Weiße Kugel", akt: "3", Aktion: "Die weisse Kugel ist faustgross und aus einem unbekannten Material. Sie scheint von innen heraus zu leuchten.", imgclass:"symbol",hor: "true"}
 ];

 var initActions = [
 {name: "Jäger", akt: "3", Aktion: "Der Großwildjäger hat versucht den Schatz der Ureinwohner zu stehlen und diesen Frevel mit seinem Leben bezahlt. Die Ureinwohner sind jetzt sehr wütend und töten jeden, dem Sie begegnen.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 {name: "Ureinwohner", akt: "3", color : "H", Aktion: "Die Ureinwohner sind eigentlich friedliebend und wollen euch helfen. Du kannst ungehindert an Ihnen vorbeilaufen. Falls sie Jane gefangen halten, kommt Sie mit dir mit.", win:"Jane2", bgcwin:"green", task: true},
 {name: "Gura Gora", akt: "3", Aktion: "Der Affendämon Gura Gora hat euch entdeckt. Nach jedem Zug zieht Gura Gora 1 Feld waagrecht oder senkrecht in eure Richtung. Wenn er euch erreicht, tötet er euch.",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", imgclass:"symbol", task: true},
 {name: "Prof Hampton", akt: "3", order: "4", Aktion: "Janes Vater hat sich bei den Ureinwohner vor Gura Gora versteckt. Wenn du ihm beide Kugeln bringst, verlässt er mit euch das Tal.",hor: "true", imgclass:"symbol", task: true}
 ];


 var start = {name: "Akt III", akt: "3",color : "H",  Aktion: "Ihr betretet das verschollene Tal. Hier muss sich Prof. Hampton befinden. Vielleicht ist er noch am Leben."};