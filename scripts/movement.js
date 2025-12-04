const screen = document.getElementById('gameScreen');
const ctx = screen.getContext('2d');
import {Enemy} from './characterScript.js';

// Tree generation
let treeId = 0;
let treeSpots = [[0, 0], [30, 0], [60, 0 ], [90, 0], [120, 0], [150, 0], [240, 0], [270, 0],
                [0, 130], [30, 130], [60, 130], [90, 130], [120, 130], [150, 130], [240, 130], [270, 130]]
const treeMaker = (position) => {
    treeId++;
    let x = position[0];
    let y = position[1];
    const tree = new Image();
    tree.src = '../images/large-oak-tree-with-knotted-trunk-clip-art-58849.jpg';
    let treeObj = {tree: tree, id: treeId, x: x, y: y};
    return treeObj; 
}

const drawTrees = () => {
    for (let i = 0; i < trees.length; i++) {
        ctx.drawImage(trees[i].tree, trees[i].x, trees[i].y, 20, 20);
    }
}

let trees = [];
for (let i = 0; i < treeSpots.length; i++) {
    trees.push(treeMaker(treeSpots[i]));
}

// Enemy Generation
let enemyId = 1;

const despawnEnemy = () => {
    enemyId = 0;
    op1.img = enemyMaker();
    op2.img = enemyMaker();
    op3.img = enemyMaker();
    ctx.drawImage(player, playerX, playerY, 20, 20);
    drawTrees();
};

const enemyMaker = () => {
    const enemy = new Image;
    let enemyX = (Math.floor(Math.random() * 12) + 2) * 20;
    let enemyY = (Math.floor(Math.random() * 4) + 2) * 20;
    let enemyObj = {enemy: enemy, x: enemyX, y: enemyY};
    enemy.src = '../images/skull.png';
    return enemyObj;
}
let op1 = new Enemy('striker', 20);
op1.img = enemyMaker();
let op2 = new Enemy('blocker', 30);
op2.img = enemyMaker();
let op3 = new Enemy('archer', 10);
op3.img = enemyMaker();

const enemyArray = [op1, op2, op3];

// Player generation
const player = new Image();
player.src = '../images/Untitled21_20250218212022.png';
let playerX = 0;
let playerY = 60;
player.onload = function() {
    drawMap();
}

// Player movement
document.addEventListener('keydown', (event) => {
    const speed = 10;

    // Normal movement
    if (event.key == 'w' || event.key == 'ArrowUp') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerY > 0 ? playerY -= speed : 0;
    }
    if (event.key == 'a' || event.key == 'ArrowLeft') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerX > 0 ? playerX -= speed : 0;
    }
    if (event.key == 's' || event.key == 'ArrowDown') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerY < screen.height - 20 ? playerY += speed : playerY = screen.height - 20;
    }
    if (event.key == 'd' || event.key == 'ArrowRight') {
        ctx.clearRect(0, 0, screen.width, screen.height);
        playerX < screen.width - 20 ? playerX += speed : playerX = screen.width - 20;
    }

    // 'New' area
    // Going up
    if (playerX < 240 && playerX > 150 && playerY <= 0) {
        playerY = screen.height - 20;
        despawnEnemy();
        enemyId++;
    }
    // Going down
    else if (playerX < 240 && playerX > 150 && playerY == screen.height - 20) {
        playerY = 0;
        despawnEnemy();
        enemyId++;
    }
    // Going left
    if (playerX == 0) {
        playerX = screen.width - 20;
        despawnEnemy();
        enemyId++;
    }
    // Going right
    else if (playerX == screen.width - 20) {
        playerX = 0;
        despawnEnemy();
        enemyId++;
    }
    drawMap();
});

const drawMap = () => {
    if (enemyId != 0) {
        ctx.drawImage(op1.img.enemy, op1.img.x, op1.img.y, 20, 20);
        ctx.drawImage(op2.img.enemy, op2.img.x, op2.img.y, 20, 20);
        ctx.drawImage(op3.img.enemy, op3.img.x, op3.img.y, 20, 20);
    }
    ctx.drawImage(player, playerX, playerY, 20, 20);
    drawTrees();
};