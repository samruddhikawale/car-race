class Player{

constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
}

updateCount(count){
database.ref('/').update({
    playerCount:count

})

}

update(){
    var playerindex = "players/player"+this.index
    database.ref(playerindex).set({
    name:this.name,
    distance:this.distance
    })

}

static getPlayerInfo(){
    var playerInforef= database.ref('players');
    playerInforef.on("value",(data)=>{
        allPlayers=data.val();
    })
}

getCount(){
    var playerCountref = database.ref('playerCount');
    playerCountref.on("value",(data)=>{
        playerCount = data.val();
    })
}





}