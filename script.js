data=[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

var filters=[]
setfilter()

function setfilter()
{
    $(".filters").html("")
    filters.forEach(function(eachfilter)
    {
        genstr="<div class='eachfilter'><p>"+eachfilter+"</p><img onclick='removefilter(this)' class='"+eachfilter+"' src='images/icon-remove.svg' alt='close'></div>";;
        $(".filters").append(genstr)
    })
    setcards()
}

function setcards()
{
    $(".cardbox").html("")
    data.forEach(function(eachdata){
        filterpassed=true
        filters.forEach(function(eachfilter){
            if(!(eachdata.languages.includes(eachfilter)||eachdata.tools.includes(eachfilter)||eachdata.role==eachfilter||eachdata.level==eachfilter))
            {
                filterpassed=false
            }
        })
        if(filterpassed)
        {
            if(eachdata.featured)
                genstr="<div class='eachcard featuredcard'>"
            else
                genstr="<div class='eachcard'>"
            genstr+="<div class='userdetail'>"
            genstr+="<img src='"+eachdata.logo.substring(2)+"' alt='avatar'>";
            genstr+="<div class='textox'><div class='topline'>";
            genstr+="<p class='company'>"+eachdata.company+"</p>";
            if(eachdata.new)
                genstr+="<p class='new'>NEW!</p>";
            if(eachdata.featured)
            genstr+="<p class='featured'>FEATURED</p>";
            genstr+="</div>";
            genstr+="<p class='position'>"+eachdata.position+"</p>";
            genstr+="<div class='bottomline'>";
            genstr+="<p class='postedAt'>"+eachdata.postedAt+"</p> .";
            genstr+="<p class='contract'>"+eachdata.contract+"</p> .";
            genstr+="<p class='location'>"+eachdata.location+"</p>";
            genstr+="</div></div></div><hr><div class='tagbox'>"
            genstr+="<p onclick=addfilter('"+eachdata.role+"')>"+eachdata.role+"</p><p onclick=addfilter('"+eachdata.level+"')>"+eachdata.level+"</p>"
            eachdata.languages.forEach(function(eachlang){
                genstr+="<p onclick=addfilter('"+eachlang+"')>"+eachlang+"</p>"
            })
            eachdata.tools.forEach(function(eachtool){
                genstr+="<p onclick=addfilter('"+eachtool+"')>"+eachtool+"</p>"
            })
            genstr+="</div></div>";
            $(".cardbox").append(genstr)
        }
    })
}
function addfilter(tagname)
{
    if(!(filters.includes(tagname)))
    {
        filters.push(tagname)
        setfilter()
    }
}
$("#clear").click(function(){
    filters=[]
    setfilter()
})
function removefilter(data)
{
    classname=$(data).attr("class")
    filters=filters.filter(function(e) { return e !== classname })
    setfilter()
}
