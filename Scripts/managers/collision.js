var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between plane and any other game object
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = Arrow.x;
            p1.y = Arrow.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((Arrow.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "balloon") {
                        // stage.removeChild(gameObject);
                        stage.removeChild(gameObject);
                        gameObject.y = -400;
                        stage.addChild(gameObject);
                        scoreboard.score += 100;
                        //  scoreboard.obj -= 1;
                        stage.update();
                    }
                    if (gameObject.name == "Red") {
                        stage.removeChild(gameObject);
                        gameObject.y = -600;
                        stage.addChild(gameObject);
                        scoreboard.score -= 100;
                        // stage.removeChild(gameObject);
                        //   resetArrow();
                        stage.update();
                    }
                    if (gameObject.name == "bomb") {
                        endScreen();
                        stage.update();
                    }
                }
                gameObject.isColliding = true;
                if (scoreboard.score == 700 && scoreboard.lives != 0) {
                    secondLevel();
                }
                if (scoreboard.score == 1400 && scoreboard.lives != 0) {
                    thirdLevel();
                }
                if (scoreboard.lives == 0)
                    endScreen();
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map