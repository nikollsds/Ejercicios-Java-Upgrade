const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filteredStreamers = streamers.filter((streamer) => {
    return streamer.gameMorePlayed.includes("Legends")
})

const newStreamers = filteredStreamers.map((streamer) => {
    const streamerObj = {
        name : streamer.name,
        age : streamer.age,
        gameMorePlayed: streamer.gameMorePlayed
    }
    return streamerObj;
})

console.log(newStreamers);