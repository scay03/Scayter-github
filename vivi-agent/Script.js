const downloadLinks={

kiss918:"https://918kiss.com/download",
mega888:"https://mega888.com/download",
pussy888:"https://pussy888.com/download",
kaya918:"https://918kaya.com/download",
evo888:"https://evo888.com/download",
ntc:"https://ntc33.com/download",
clubsun:"https://clubsuncity.com/download",
ace333:"https://ace333.com/download",
live22:"https://live22.com/download",
lpe:"https://luckyplace.com/download"

}

function downloadGame(platform){
window.open(downloadLinks[platform])
}



const gameData={

kiss918:["Golden Monkey","Dragon Gold","Queen Bee","Money Tree","Sparta"],
mega888:["Great Blue","Golden Toad","Safari Heat","Ocean King"],
pussy888:["Diamond Strike","Dragon King","Golden Lion"],
kaya918:["Golden Panther","Lucky Spin","Dragon Treasure"],
evo888:["Dragon Phoenix","Golden Dynasty"],
ntc:["Neptune Treasure","Golden Fish"],
clubsun:["Fa Fa Fa","Golden Lotus"],
ace333:["Ace of Gold","Wild Ace"],
live22:["Sexy Vegas","Golden Slot"],
lpe:["Lucky Palace","Golden Palace"]

}

const select=document.getElementById("platformSelect")
const tipsBox=document.getElementById("tipsBox")

select.addEventListener("change",generateTips)

function generateTips(){

const platform=select.value

if(!platform){
tipsBox.innerHTML="Pilih platform terlebih dahulu"
return
}

const games=[...gameData[platform]]

games.sort(()=>Math.random()-0.5)

const jumlah=Math.floor(Math.random()*4)+2

let html="<ul>"

for(let i=0;i<jumlah;i++){
html+="<li>"+games[i]+"</li>"
}

html+="</ul><p>Tips berubah setiap 3 jam</p>"

tipsBox.innerHTML=html

}

setInterval(generateTips,10800000)