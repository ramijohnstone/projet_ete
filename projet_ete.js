window.onload = () => {
    window.addEventListener("scroll", () =>{
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;
        let barre = (position / hauteur) * largeur;

        document.getElementById("barre").style.width = barre + "px";
    });
};

const countries = [
    {
        name : "France",
        language : "français",
        cities : ["Paris" , "Lyon" , "Montpellier"]
    },
    {
        name : "Italie",
        language : "italien",
        cities : ["Rome" , "Venice" , "Milan"]
    },
    {
        name : "Allemagne",
        language : "allemand",
        cities : ["Berlin" , "Munich" , "Frankfurt"]
    },
    {
        name : "Espagne",
        language : "espagnol",
        cities : ["Madrid" , "Barcelona" , "Seville"]
    },
    {
        name : "Roumanie",
        language : "roumain",
        cities : ["bucharest" , "Sibiu" , "Oradea"]
    }
]
document.getElementById("app").innerText = 'hello <h1 class = "app" > countrie (${countries.length})</h1>'



