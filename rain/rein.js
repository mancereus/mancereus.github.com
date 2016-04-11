
var screenWidth = 800;
var screenHeight = 400;
var hitCounter = 5;
var player1;
var floor;
var target;
var points;
var levelWidth = 500;
var level = 0;
var lvl;
var rainCount = 15;
var levelMap = {
    l1: { rain: 15, obj: 0, width: 1000 },
    l2: { rain: 14, obj: 1, width: 1200 },
    l3: { rain: 13, obj: 2, width: 1400 },
    l4: { rain:12, obj: 3, width: 1600 },
    l5: { rain:11, obj: 4, width: 1800 },
    l6: { rain:10, obj: 5, width: 2000 },
    l7: { rain: 9, obj: 6, width: 2200 },
    l8: { rain: 8, obj: 7, width: 2400 },
    l9: { rain: 7, obj: 8, width: 2600 },
    l10: { rain: 6, obj: 9, width: 2800 },
    l11: { rain: 5, obj: 10, width: 3000 },


}


Crafty.init(screenWidth, screenHeight, document.getElementById('game'));

Crafty.defineScene("HomeScreen", function() {
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text, Mouse")
        .attr({ w: 300, h: 20, x: 100, y: 200 })
        .text("Click to start")
        .css({ "text-align": "center" })
        .textFont({ size: '20px', weight: 'bold' })
        .textColor("#FFFFFF")
        .bind('Click', function(MouseEvent) {
            Crafty.enterScene("Level1");
        });

    Crafty.e("2D, DOM, Text")
        .attr({ w: 400, h: 40, x: 50, y: 50 })
        .text("Rein")
        .textFont({ size: '130px', weight: 'bold' })
        .css({ "text-align": "center" })
        .textColor("#FFFFFF");
});

Crafty.defineScene("Finish", function() {
    Crafty.background("black url('img/dungeon.jpg') 100% 100%");
    Crafty.e("2D, DOM, Text, Mouse")
        .attr({ w: 300, h: 20, x: 100, y: 200 })
        .text("Du hast bewiesen dass du der tapferste Ritter im ganzen Land bist.")
        .css({ "text-align": "center" })
        .textFont({ size: '14px', weight: 'bold' })
        .textColor("#FFFFFF")
        .bind('Click', function(MouseEvent) {
            level =1;
            Crafty.enterScene("Level1");
        });

    Crafty.e("2D, DOM, Text")
        .attr({ w: 400, h: 40, x: 50, y: 50 })
        .text("SIEG")
        .textFont({ size: '130px', weight: 'bold' })
        .css({ "text-align": "center" })
        .textColor("#FFFFFF");
});



Crafty.defineScene("Level1", function() {
    Crafty.background("black url('img/dungeon.jpg') 100% 100%");
    Crafty.sprite(32, "img/dungeon.png", {
        target: [19, 0],
        potion: [0,2]
    });
    Crafty.sprite(32, "img/characters.png", {
        hero1: [5, 3],
        blob1: [4, 7],
        rain: [15,0]
    });
    floor = Crafty.e('Floor, 2D, Canvas, Solid, Color, Collision')
        .attr({ x: 0, y: 380, w: levelWidth, h: 10 })
        .color('white');

    target = Crafty.e('Ziel, target, 2D, Canvas, Solid, Color, Collision')
        .attr({ x: levelWidth-140, y: 330, w: 100, h: 50 })
        .checkHits('Player')
        .bind("HitOn", function() {
            Crafty.enterScene("Level1");
            Crafty.viewport.x = 0;
            nextLevel();

        });

    player1 = Crafty.e('Player, hero1, 2D, Canvas, Color, Solid, Twoway, Gravity, Collision')
        .attr({ x: 20, y: 0, w: 50, h: 50 })
        .twoway(4)
        .gravity('Floor')
        .gravityConst(.2)
        .checkHits('Obstacle')
        .bind("HitOn", function() {
            player1.x = 0;
            Crafty.viewport.x = 0;
        })
        .bind("Moved", function() {
            if (this.x < 0)
                this.x = 0;
            if (this.x >= (screenWidth / 2)) {
                Crafty.viewport.x = (this.x - (screenWidth / 2)) * -1;
            }

        });
    lvl = Crafty.e("2D, DOM, Text")
        .attr({ x: 100, y: 10 })
        .text("level " + level)
        .textFont({ size: '63px', weight: 'bold' })
        .css({ "text-align": "center" })
        .textColor("#FFFFFF");
    points = Crafty.e("2D, DOM, Text")
        .attr({ x: screenWidth - 100, y: 10 })
        .text("" + hitCounter)
        .textFont({ size: '130px', weight: 'bold' })
        .css({ "text-align": "center" })
        .textColor("#FFFFFF");
});

Crafty.load(["img/dungeon.png", "img/characters.png"]);
Crafty.enterScene("Level1");
nextLevel();


function nextLevel() {
    if (hitCounter < 5)
        setHitCounter(5);
    level = level + 1;
    var lm = levelMap['l' + level];
    levelWidth = lm.width;
    floor.w = lm.width;
    target.x = lm.width;
    lvl.text("Level " + level)
    for (var i = 0; i < lm.obj; i++) {
        var randomx = Math.floor((Math.random() * levelWidth - 150) + 50);
        Crafty.e('Obstacle, blob1, 2D, Canvas, Color, Solid, Twoway, Gravity, Collision')
            .attr({ x: randomx, y: 0, w: 50, h: 40 })
            .gravity('Floor')
            .gravityConst(.2)
            .checkHits('Floor')
            ;
    }
}
function setHitCounter(count) {
    hitCounter = count;
    points.text(hitCounter);
    points.x = screenWidth - 100 - Crafty.viewport.x
    if (hitCounter <= 0) {
        setHitCounter(5);
        player1.x = 0;
        Crafty.viewport.x = 0;

    }
}
function drop() {

    var randomx = Math.floor((Math.random() * screenWidth) + 50 - Crafty.viewport.x);
    if (randomx > levelWidth - 100)
        return;
    if (Math.random() > 0.05) {    
    Crafty.e('Drop, rain, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({ x: randomx, y: 0, w: 10, h: 15 })
        .gravity()
        .gravityConst(.5)
        .checkHits('Player')
        .bind("HitOn", function() {
            this.destroy();
            setHitCounter(hitCounter - 1);


        })
        .bind("EnterFrame", function() {
            if (this.y > screenHeight)
                this.destroy();
        });
    } else {
    Crafty.e('Drop, potion, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({ x: randomx, y: 0, w: 20, h: 20 })
        .gravity()
        .gravityConst(.05)
        .checkHits('Player')
        .bind("HitOn", function() {
            this.destroy();
            setHitCounter(hitCounter + 2);


        })
        .bind("EnterFrame", function() {
            if (this.y > screenHeight)
                this.destroy();
        });
        
    }
}

Crafty.bind("EnterFrame", function() {
    var lm = levelMap['l' + level];
    if (Crafty.frame() % lm.rain == 0)
        drop();
});