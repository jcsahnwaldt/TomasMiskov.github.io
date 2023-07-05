let data = [
    {
        "name" : "Life of Pi",
        "author": "Yann Martel",
        "url": "./images/Life of Pi.png",
        "date": "08/07/22",
        "rating": "8",
        "review": "https://tomasmiskov.com/life-of-pi.html",
    },
    {
        "name" : "A Man Called Ove",
        "author": "Frederik Backman",
        "url": "./images/A Man Called Ove.png",
        "date": "27/12/21",
        "rating": "7",
        "review": "https://tomasmiskov.com/a-man-called-ove.html",
    },
    {
        "name" : "The Unlikely Pilgrimage of Harold Fry",
        "author": "Rachel Joyce",
        "url": "./images/The Unlikely Pilgrimage of Harold Fry.png", 
        "date": "21/07/22",
        "rating": "6",
        "review": "https://tomasmiskov.com/the-unlikely-pilgrimage-of-harold-fry.html",
    },
    {
        "name" : "Neophilia",
        "author": "Lyall Watson",
        "url": "./images/Neophilia.png", 
        "date": "20/08/22",
        "rating": "8",
        "review": "https://tomasmiskov.com/neophilia.html",
    },
    {
        "name" : "A Thousand Splendid Suns",
        "author": "Khaled Hossein",
        "url": "./images/A Thousand Splendid Suns.png", 
        "date": "30/07/22",
        "rating": "10",
        "review": "https://tomasmiskov.com/a-thousand-splendid-suns.html",
    },
    {
        "name" : "Animal Farm",
        "author": "George Orwell",
        "url": "./images/Animal Farm.png", 
        "date": "15/08/21",
        "rating": "8",
        "review": "https://tomasmiskov.com/animal-farm.html",
    },
    {
        "name" : "The Da Vinci Code",
        "author": "Dan Brown",
        "url": "./images/The Da Vinci Code.png", 
        "date": "13/08/22",
        "rating": "9",
        "review": "https://tomasmiskov.com/the-da-vinci-code.html",
    },
    {
        "name" : "The Pleasure of Finding Things Out",
        "author": "Richard P. Feynman",
        "url": "./images/The Pleasure of Finding Things Out.png", 
        "date": "25/05/22",
        "rating": "9",
        "review": "https://tomasmiskov.com/the-pleasure-of-finding-things-out.html",
    },
    {
        "name" : "Oscar and the Lady in Pink",
        "author": "Éric-Emmanuel Schmitt",
        "url": "./images/Oscar and the Lady in Pink.png", 
        "date": "24/08/21",
        "rating": "8",
        "review": "https://tomasmiskov.com/oscar-and-the-lady-in-pink.html",
    },
    {
        "name" : "Skin in the Game",
        "author": "Nassim Nicholas Taleb",
        "url": "./images/Skin in the Game.png", 
        "date": "12/06/20",
        "rating": "6",
        "review": "https://tomasmiskov.com/skin-in-the-game.html",
    },
    // {
    //     "name" : "Siddhartha",
    //     "author": "Hermann Hesse",
    //     "url": "./images/E-reader.png", 
    //     "date": "12/07/21",
    //     "rating": "6",
    //     "review": "https://tomasmiskov.com/siddhartha.html",
    // },
    {
        "name" : "Flowers for Algernon",
        "author": "Daniel Keyes",
        "url": "./images/Flowers for Algernon.png",  
        "date": "28/07/21",
        "rating": "10",
        "review": "https://tomasmiskov.com/flowers-for-algernon.html",
    },
    // {
    //     "name" : "Ten Little Soldiers",
    //     "author": "Agatha Christie",
    //     "url": "./images/E-reader.png",  
    //     "date": "31/07/21",
    //     "rating": "9",
    //     "review": "https://tomasmiskov.com/ten-little-soldiers.html",
    // },
    {
        "name" : "The Schopenhauer Cure",
        "author": "Irvin D. Yalom",
        "url":  "./images/The Schopenhauer Cure.png",  
        "date": "10/01/22",
        "rating": "7",
        "review": "https://tomasmiskov.com/the-schopenhauer-cure.html",
    },
    {
        "name" : "The Minds of Billy Milligan",
        "author": "Daniel Keyes",
        "url":  "./images/The Minds of Billy Milligan.png",  
        "date": "11/09/22",
        "rating": "7",
        "review": "https://tomasmiskov.com/the-minds-of-billy-milligan.html",
    },
    {
        "name" : "The End of Everything",
        "author": "Dr. Katherine (Katie) Mack",
        "url":  "./images/The End of Everything.png",  
        "date": "28/09/22",
        "rating": "8.5",
        "review": "https://tomasmiskov.com/the-end-of-everything.html",
    },
    {
        "name" : "Perfectly Reasonable Deviations from the Beaten Track",
        "author": "Richard P. and Michelle Feynman",
        "url":  "./images/Perfectly Reasonable Deviations.png",  
        "date": "13/11/22",
        "rating": "8.5",
        "review": "https://tomasmiskov.com/perfectly-reasonable-deviations.html",
    },
    {
        "name" : "The Amazing Story of the Man Who Cycled from India to Europe for Love",
        "author": "Per J. Andersson, Anna Holmwood (Translation)",
        "url":  "./images/The Amazing Story.png",  
        "date": "28/02/23",
        "rating": "7",
        "review": "https://tomasmiskov.com/the-amazing-story.html",
    },
    {
        "name" : "The Stranger",
        "author": "Albert Camus",
        "url":  "./images/The Stranger.png",  
        "date": "08/03/23",
        "rating": "6",
        "review": "https://tomasmiskov.com/the-stranger.html",
    },
    {
        "name" : "Anxious People",
        "author": "Frederik Backman",
        "url":  "./images/Anxious People.png",  
        "date": "21/04/23",
        "rating": "8",
        "review": "https://tomasmiskov.com/anxious-people.html",
    },
    {
        "name" : "Helgoland",
        "author": "Carlo Rovelli",
        "url":  "./images/Helgoland.png",  
        "date": "29/05/23",
        "rating": "8",
        "review": "https://tomasmiskov.com/helgoland.html",
    },
    {
        "name" : "Zero - The Biography of a Dangerous Idea",
        "author": "Charles Seife",
        "url":  "./images/Zero.png",  
        "date": "10/06/23",
        "rating": "8",
        "review": "https://tomasmiskov.com/zero.html",
    },
    {
        "name" : "Papillon",
        "author": "Henri Charrière",
        "url":  "./images/Papillon.png",  
        "date": "05/07/23",
        "rating": "10",
        "review": "https://tomasmiskov.com/papillon.html",
    }
]

data.sort((a, b) => a.author.localeCompare(b.author));