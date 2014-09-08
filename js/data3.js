 var actcards =  [
 {name: "Boot", akt: "3", Aktion: "Bring das Boot zum Fluss, um das Abenteuer zu beenden.", hor: true, imgclass:"bigsymbol"},
 {name: "Dynamit", akt: "3", Aktion: "Mit dem Dynamit kannst du einen Felsen sprengen. Lege das Dynamit dazu auf den Felsen.", imgclass:"symbol"},
 {name: "Fels", akt: "3", Aktion: "Du kannst dieses Feld nicht betreten und nicht mit der Liane überfliegen."},
 {name: "Fluss", color : "H", akt: "3", Aktion: " Du kannst das Abenteuer mit dem Boot am Fluss verlassen. Hier darfst du beliebige Gegenstände ablegen.", warn:"Boot", bgc:"blue"},
 {name: "Höhle", akt: "3", Aktion: "Nur mit der Fackel kann man durch die Höhle direkt zu anderen Höhlen gehen.",hor: "true", warn:"Fackel" , bgc:"blue"},
 {name: "Kannibale", akt: "3", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein", pagebreak: "pagebreak"},
 {name: "Kannibale", akt: "3", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Kannibale", akt: "3", Aktion: "Die Kannibalen verfolgen dich. Du hast das Idol oder gibst einen Gegenstand ab, sonst töten sie dich.", warn:"Edelstein"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",hor: "true",ver: "true", imgclass:"symbol"},
 {name: "Liane", akt: "3", Aktion: "Mit der Liane kann man einmal waagrecht oder senkrecht beliebig weit auf ein offenes Feld springen.",ver: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu auf die Wand.",hor: "true", imgclass:"symbol"},
 {name: "Machete", akt: "3", Aktion: "Die Machete kann eine Dschungelwand öffnen. Lege die Machete dazu uf die Wand.",hor: "true",imgclass:"symbol"},
 {name: "Schw. Kugel", akt: "3", Aktion: "Du findest eine schwarze Kugel.", imgclass:"symbol",ver: "true"},
 {name: "Weiße Kugel", akt: "3", Aktion: "Du findest eine weiße Kugel. ", imgclass:"symbol",hor: "true"},
 ];

 var initActions = [
 {name: "Jäger", akt: "3", Aktion: "Der Jäger hat versucht den Schatz der Kannibalen zu stehlen und diesen Frevel mit seinem Leben bezahlt. Die Kannibalen sind sehr wütend und töten jeden den Sie begegnen.", bgc:"orange", win:"Fluss", bgcwin:"blue",task: true},
 {name: "Kannibalen", akt: "3", color : "H", Aktion: "Die Kannibalen sind eigentlich friedliebend und bewachen das Tal. Du kannst ungehindert an Ihnen vorbeilaufen. Falls sie Jane gefangen halten, kommt Sie mit dir mit.", win:"Jane2", bgcwin:"green", task: true},
 {name: "Jane", akt: "3", Aktion: "Jane hat sich in dich verliebt. Sie will bei dir bleiben. ",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", task: true},
 {name: "Höhle", akt: "3", Aktion: "Die Höhle enthält den Schatz, der von den Kannibalen verehrt wird. Durch diese Höhle könnt ihr mit der Fackel direkt zu anderen Höhlen ziehen. ",win:"Fluss", bgcwin:"blue", warn:"Jane2", bgc:"orange", task: true},
 {name: "Prof Hampton", akt: "3", order: "4", Aktion: "Janes Vater lebt glücklich und zufrieden bei den Kannibalen. Wenn du ihm beide Kugeln bringst, verlässt er mit euch das Tal.",hor: "true", imgclass:"symbol", task: true}
 ];


 var start = {name: "Akt III", color : "H", 
 Aktion: "Ihr betretet das verschollene Tal. Hier muss sich Prof. Hampton befinden. Vielleicht ist er noch am Leben?"};