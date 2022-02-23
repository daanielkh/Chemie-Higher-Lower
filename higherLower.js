data = [
    {
        name: 'Quecksilber',
        follower_count: 1500,
        description: 13.54,
        country: -38.4
    },
    {
        name: 'Wasserstoff',
        follower_count: -253,
        description: 0.09,
        country: -259
    },
    {
        name: 'Natrium',
        follower_count: 883,
        description: 0.97,
        country: 97.8
    },
    {
        name: 'Rubidium',
        follower_count: 688,
        description: 1.53,
        country: 39.3
    },
      {
        name: 'Caesium',
        follower_count: 678,
        description: 1.9,
        country: 28.4
    },
    {
        name: 'Beryllium',
        follower_count: 2970,
        description: 1.85,
        country: 1287
    },
  
    {
        name: 'Magnesium',
        follower_count: 1090,
        description: 1.75,
        country: 650
    },
    {
        name: 'Calcium',
        follower_count: 1484,
        description: 1.55,
        country: 842
    },
    {
        name: 'Strontium',
        follower_count: 1384,
        description: 2.63,
        country: 777
    },
    {
        name: 'Barium',
        follower_count: 1140,
        description: 3.62,
        country: 727
    }, {
        name: 'Bor',
        follower_count: 2550,
        description: 2.46,
        country: 2076
    },
 {
        name: 'Gallium',
        follower_count: 2403,
        description: 5.9,
        country: 29.8
    },
        {
        name: 'Indium',
        follower_count: 2000,
        description: 7.31,
        country: 256.6
    },
   
    {
        name: 'Thalium',
        follower_count: 1457,
        description: 11.85,
        country: 304
    },
    {
        name: 'Silicium',
        follower_count: 2355,
        description: 2.35,
        country: 1410
    },
    {
        name: 'Sauerstoff',
        follower_count: -183,
        description: 1.43,
        country: -218
    },
    {
        name: 'Schwefel',
        follower_count: 445,
        description: 2.07,
        country: 119
    },
    {
        name: 'Selen',
        follower_count: 685,
        description: 3.61,
        country: 220
    },
    {
        name: 'Antimon',
        follower_count: 1750,
        description: 6.7,
        country: 630.6
    },
    {
        name: 'Stickstoff',
        follower_count: -196,
        description: 1.25,
        country: -210
    },
    {
        name: 'Fluor',
        follower_count: -188,
        description: 1.72,
        country: -220
    },
    {
        name: 'Chlor',
        follower_count: -35,
        description: 3.22,
        country: 101.5
    },
    {
        name: 'Brom',
        follower_count: 59,
        description: 3.12,
        country: -7
    },
    {
        name: 'Wasser',
        follower_count: 100,
        description: 1,
        country: 0
    },
    {
        name: 'Ethanol',
        follower_count: 78.4,
        description: 0.79,
        country: -114.1
    },
    {
        name: 'Helium',
        follower_count: -268.9,
        description: 0.18,
        country: -272.2
    },
    {
        name: 'Neon',
        follower_count: -246.1,
        description: -248,
        country: 0.9
    },
    {
        name: 'Argon',
        follower_count: -185.5,
        description: 1.78,
        country: -189.4
    },
    {
        name: 'Krypton',
        follower_count: -153.4,
        description: 3.78,
        country: -157.4
    },
    {
        name: 'Xenon',
        follower_count: -108.1,
        description: 5.89,
        country: -111.8
    },
    {
        name: 'Phosphor',
        follower_count: 280.5,
        description: 1.88,
        country: 44.1
    },
    {
        name: 'Arsen',
        follower_count: 816.8,
        description: 3.74,
        country: 613.1
    },
    {
        name: 'Germanium',
        follower_count: 2833,
        description: 5.3,
        country: 938.2
    },
    {
        name: 'Iod',
        follower_count: 184.3,
        description: 4.94,
        country: 113.7
    },
    {
        name: 'Zinn',
        follower_count: 2602,
        description: 7.3,
        country: 231
    },
    {
        name: 'Lithium',
        follower_count: 1347,
        description: 0.53,
        country: 180
    },
    {
        name: 'Kalium',
        follower_count: 774,
        description: 0.86,
        country: 63.5
    },
    {
        name: 'Propan',
        follower_count: 97,
        description: 0.78,
        country: -126
    },
    {
        name: 'Methan',
        follower_count: 65,
        description: 0.72,
        country: -182
    },
    {
        name: 'Blei',
        follower_count: 1740,
        description: 11.34,
        country: 327.4
    },
    {
        name: 'Gold',
        follower_count: 2700,
        description: 19.3,
        country: 1064
    },
    {
        name: 'Silber',
        follower_count: 2162,
        description: 10.5,
        country: 660.3
    },
    {
        name: 'Kupfer',
        follower_count: 2562,
        description: 5,
        country: 5
    }
]
let aname=document.getElementById("aname")
let afollow=document.getElementById("afollow")
let adescr=document.getElementById("adescr")
let acount = document.getElementById("acount")

let bname=document.getElementById("bname")
let bfollow=document.getElementById("bfollow")
let bdescr=document.getElementById("bdescr")
let bcount = document.getElementById("bcount")

a = random()
b = random()
if (a == b && b !== 50) a = b + 1
else a=b-1
aname.innerHTML=`<b>Name: </b>${data[a].name}`
afollow.innerHTML=`<b>Siedetemperatur: </b>${data[a].follower_count} °C`
adescr.innerHTML=`<b>Dichte: </b>${data[a].description} kg/m3`
acount.innerHTML=`<b>Schmelztemperatur: </b>${data[a].country} °C`

bname.innerHTML=`<b>Name: </b>${data[b].name}`
bfollow.innerHTML=`<b>Siedetemperatur: </b>? °C`
bdescr.innerHTML=`<b>Dichte: </b>${data[b].description} kg/m3`
bcount.innerHTML=`<b>Schmelztemperatur: </b>${data[b].country} °C`

let hBtn = document.getElementById("high")
let lBtn = document.getElementById("low")
let h2=document.querySelector("h2")
score=0
hBtn.addEventListener("click", function () {

    if (data[b].follower_count >= data[a].follower_count) {
        // alert("Yes")
        score++

        bfollow.innerHTML = `<b>Followers: </b>${data[b].follower_count} °C`

        bfollow.innerHTML = `<b>Followers: </b>${data[b].follower_count} °C`
        c = random()
        aname.innerHTML=`<b>Name: </b>${data[b].name}`
        afollow.innerHTML=`<b>Siedetemperatur: </b>${data[b].follower_count} °C`
        adescr.innerHTML=`<b>Dichte: </b>${data[b].description} kg/m3`
        acount.innerHTML=`<b>Schmelztemperatur: </b>${data[b].country} °C`
        
        bname.innerHTML=`<b>Name: </b>${data[c].name}`
        bfollow.innerHTML=`<b>Siedetemperatur: </b>? °C`
        bdescr.innerHTML=`<b>Dichte: </b>${data[c].description} kg/m3`
        bcount.innerHTML = `<b>Schmelztemperatur: </b>${data[c].country} °C`
        
        console.log(data[b].follower_count)
        console.log(data[a].follower_count)
        data[a].follower_count=data[b].follower_count

        data[b].name=data[c].name
        data[b].follower_count=data[c].follower_count
        data[b].description=data[c].description
        data[b].country = data[c].country
        
        
h2.innerHTML=`Your Total Score is <span>${score}</span>.`
    }
     else {
        alert("You Loss Game!!!!!!!!!!!")
        score = 0
                
h2.innerHTML=`Your Total Score is <span>${score}</span>.`
    }
})

lBtn.addEventListener("click", function () {
    if (data[b].follower_count <= data[a].follower_count) {
        // alert("Yes")
        score++
        c = random()
       
        aname.innerHTML=`<b>Name: </b>${data[b].name}`
        afollow.innerHTML=`<b>Siedetemperatur: </b>${data[b].follower_count} °C`
        adescr.innerHTML=`<b>Dichte: </b>${data[b].description} kg/m3`
        acount.innerHTML=`<b>Schmelztemperatur: </b>${data[b].country} °C`
        
        bname.innerHTML=`<b>Name: </b>${data[c].name}`
        bfollow.innerHTML=`<b>Siedetemperatur: </b>? °C`
        bdescr.innerHTML=`<b>Dichte: </b>${data[c].description} kg/m3`
        bcount.innerHTML = `<b>Schmelztemperatur: </b>${data[c].country} °C`
        
        console.log(data[b].follower_count)
        console.log(data[a].follower_count)
        data[a].follower_count=data[b].follower_count

        data[b].name=data[c].name
        data[b].follower_count=data[c].follower_count
        data[b].description=data[c].description
        data[b].country = data[c].country
        
        h2.innerHTML=`Your Total Score is <span>${score}</span>.`
    }
    else {
        alert("You Loss Game!!!!!!!!!!!")
        score = 0
                
h2.innerHTML=`Your Total Score is <span>${score}</span>.`
    }
})

function random() {
    r = Math.floor(Math.random()*50)
    return r
}
random(1)
