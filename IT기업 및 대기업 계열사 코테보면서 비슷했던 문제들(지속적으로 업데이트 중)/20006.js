const fs = require('fs');
// const input = fs.readFileSync('./index.txt').toString().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [_, roomCapacityCnt] = input.shift().split(' ');
const players = input.map((row) => {
    const [level, name] = row.split(' ');
    return {
        level: +level,
        name
    }
})

const rooms = [];
for (let i = 0; i < players.length; i++) {
    let joined = false;
    const player = players[i];

    for (const room of rooms) {
        const { firstJoinedPlayerLevel, joinedPlayer } = room;

        if (Array.isArray(joinedPlayer)
            && joinedPlayer.length < +roomCapacityCnt
            && firstJoinedPlayerLevel - 10 <= player.level
            && firstJoinedPlayerLevel + 10 >= player.level
        ) {
            joined = true;
            joinedPlayer.push(player)
            break;
        }
    }

    // 최초로 방에 진입한 경우. 
    if (!joined) {
        rooms.push({
            firstJoinedPlayerLevel: player.level,
            joinedPlayer: [{ ...player }]
        })
    }
}

rooms.forEach(({ joinedPlayer }) => {
    if (joinedPlayer.length === +roomCapacityCnt) {
        console.log('Started!')
    } else {
        console.log('Waiting!')
    }

    const sorted = joinedPlayer.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    sorted.forEach(({ level, name }) => {
        console.log(`${level} ${name}`)
    })
})