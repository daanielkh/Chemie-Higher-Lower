data = [
    {
        name: 'Wasser',
        follower_count: 395,
        description: 'Social media platform',
        country: 'United States'
    },
    {
        name: 'Gold',
        follower_count: 284,
        description: 'Footballer',
        country: 'Portugal'
    },
    {
        name: 'Silber',
        follower_count: 240,
        description: 'Actor and professional wrestler',
        country: 'United States'
    },
    {
        name: 'Arsen',
        follower_count: 235,
        description: 'Musician and actress',
        country: 'United States'
    },
      {
        name: 'Sauerstoff',
        follower_count: 230,
        description: 'Reality TV personality and businesswoman and Self-Made Billionaire',
        country: 'United States'
    },
    {
        name: 'Chlor',
        follower_count: 224,
        description: 'Musician and actress',
        country: 'United States'
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
afollow.innerHTML=`<b>Followers: </b>${data[a].follower_count} millions`
adescr.innerHTML=`<b>Description: </b>${data[a].description}`
acount.innerHTML=`<b>Country: </b>${data[a].country}`

bname.innerHTML=`<b>Name: </b>${data[b].name}`
bfollow.innerHTML=`<b>Followers: </b>? millions`
bdescr.innerHTML=`<b>Description: </b>${data[b].description}`
bcount.innerHTML=`<b>Country: </b>${data[b].country}`

let hBtn = document.getElementById("high")
let lBtn = document.getElementById("low")
let h2=document.querySelector("h2")
score=0
hBtn.addEventListener("click", function () {

    if (data[b].follower_count >= data[a].follower_count) {
        // alert("Yes")
        score++

        bfollow.innerHTML = `<b>Followers: </b>${data[b].follower_count} millions`

        bfollow.innerHTML = `<b>Followers: </b>${data[b].follower_count} millions`
        c = random()
        aname.innerHTML=`<b>Name: </b>${data[b].name}`
        afollow.innerHTML=`<b>Followers: </b>${data[b].follower_count} millions`
        adescr.innerHTML=`<b>Description: </b>${data[b].description}`
        acount.innerHTML=`<b>Country: </b>${data[b].country}`
        
        bname.innerHTML=`<b>Name: </b>${data[c].name}`
        bfollow.innerHTML=`<b>Followers: </b>? millions`
        bdescr.innerHTML=`<b>Description: </b>${data[c].description}`
        bcount.innerHTML = `<b>Country: </b>${data[c].country}`
        
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
        afollow.innerHTML=`<b>Followers: </b>${data[b].follower_count} millions`
        adescr.innerHTML=`<b>Description: </b>${data[b].description}`
        acount.innerHTML=`<b>Country: </b>${data[b].country}`
        
        bname.innerHTML=`<b>Name: </b>${data[c].name}`
        bfollow.innerHTML=`<b>Followers: </b>? millions`
        bdescr.innerHTML=`<b>Description: </b>${data[c].description}`
        bcount.innerHTML = `<b>Country: </b>${data[c].country}`
        
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
