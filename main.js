var canvas = new fabric.Canvas('myCanvas')
playerx = 10
playery = 10
blockwidth = 30
blockheight = 30
playerobject = ""
blockobject = ""

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(150)
        playerobject.set({
            top: playery,
            left: playerx
        })
        canvas.add(playerobject)
    })
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockobject = Img
        blockobject.scaleToWidth(150)
        blockobject.scaleToHeight(150)
        blockobject.set({
            top: playery,
            left: playerx
        })
        canvas.add(blockobject)
    })
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and shift are pressed together")
        blockwidth = blockwidth + 10
        blockheight = blockheight + 10
        document.getElementById("current_width").innerHTML = blockwidth
        document.getElementById("current_height").innerHTML = blockheight
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("m and shift are pressed together")
        blockwidth = blockwidth - 10
        blockheight = blockheight - 10
        document.getElementById("current_width").innerHTML = blockwidth
        document.getElementById("current_height").innerHTML = blockheight
    }
    if (keypressed == '38') {
        up()
        console.log("up")
    }
    if (keypressed == '40') {
        down()
        console.log("down")
    }
    if (keypressed == '39') {
        right()
        console.log("right")
    }
    if (keypressed == '37') {
        left()
        console.log("left")
    }
    if (keypressed == '87') {
        newImage('wall.jpg')
        console.log("w")
    }
    if (keypressed == '89') {
        newImage('yellow_wall.png')
        console.log("y")
    }
    if (keypressed == '85') {
        newImage('unique.png')
        onsole.log("u")
    }
    if (keypressed == '84') {
        newImage('trunk.jpg')
        console.log("t")
    }
    if (keypressed == '82') {
        newImage('roof.jpg')
        console.log("r")
    }
    if (keypressed == '76') {
        newImage('light_green.png')
        console.log("l")
    }
    if (keypressed == '71') {
        newImage('ground.png')
        console.log("g")
    }
    if (keypressed == '68') {
        newImage('dark_green.png')
        console.log("d")
    }
    if (keypressed == '67') {
        newImage('cloud.jpg')
        console.log("c")
    }
}

function up() {
    if (playery >= 0) {
        playery = playery - blockheight
        console.log(blockheight)
        console.log(playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}

function down() {
    if (playery <= 500) {
        playery = playery + blockheight
        console.log(blockheight)
        console.log(playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}

function right() {
    if (playerx <= 850) {
        playerx = playerx + blockwidth
        console.log(blockwidth)
        console.log(playerx)
        canvas.remove(playerobject)
        playerupdate()
    }
}

function left() {
    if (playerx >= 0) {
        playerx = playerx - blockwidth
        console.log(blockwidth)
        console.log(playerx)
        canvas.remove(playerobject)
        playerupdate()
    }
}