// array containing 9 paragraphs
const text=[
    `One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 100 tankōbon volumes as of September 2021. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates.`, 

    `The manga spawned a media franchise, having been adapted into a festival film produced by Production I.G, and an anime series produced by Toei Animation, which began broadcasting in Japan in 1999. Additionally, Toei has developed fourteen animated feature films, one OVA and thirteen television specials. Several companies have developed various types of merchandising and media, such as a trading card game and numerous video games. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. The anime series was licensed by 4Kids Entertainment for an English-language release in North America in 2004, before the license was dropped and subsequently acquired by Funimation in 2007.`,

    `One Piece has received praise for its storytelling, art, characterization, and humor. It has received many awards and is ranked by critics, reviewers, and readers as one of the best manga of all time. Several volumes of the manga have broken publishing records, including the highest initial print run of any book in Japan. In 2015, One Piece set the Guinness World Record for "the most copies published for the same comic book series by a single author". It was the best-selling manga for eleven consecutive years from 2008 to 2018, and is the only manga that had an initial print of volumes of above 3 million continuously for more than 10 years, as well as the only that had achieved more than 1 million copies sold in all of its 100 published tankōbon volumes.`,

    `The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates, Luffy rescues and befriends a swordsman named Roronoa Zoro, and they head off in search of the One Piece. They are joined in their journey by Nami, a navigator and thief; Usopp, a sniper and a pathological liar; and Vinsmoke Sanji, a perverted chef. They acquire a ship named the Going Merry and engage in confrontations with notorious pirates of the East Blue.`,
    
    `As Luffy and his crew set out on their adventures, others join the crew later in the series, including Tony Tony Chopper, a doctor and anthropomorphized reindeer; Nico Robin, an archaeologist and former assassin; Franky, a cyborg shipwright; Brook, a skeletal musician and swordsman; and Jimbei, a fish-man helmsman and former member of the Seven Warlords of the Sea. Once the Going Merry becomes damaged beyond repair, the Straw Hat Pirates acquire a new ship named the Thousand Sunny.  Together, they encounter other pirates, bounty hunters, criminal organizations, revolutionaries, secret agents and soldiers of the corrupt World Government, and various other friends and foes, as they sail the seas in pursuit of their dreams.`,
    
    `The world of One Piece is populated by humans and many other races, such as fish-men and merfolk (two races of fish/human hybrids), dwarves, minks (a race of humanoids with animal features), and giants. It is covered by two vast oceans, which are divided by a massive mountain range called the Red Line,  which is also the only continent in the world.The Grand Line, a sea that runs perpendicular to the Red Line, further divides them into four seas: North Blue, East Blue, West Blue, and South Blue. Surrounding the Grand Line are two regions called Calm Belts,  similar to horse latitudes, which experience almost no wind or ocean currents and are the breeding ground for huge sea creatures called sea kings.`,

    `The currents and weather of the Grand Line's open sea are extremely unpredictable, whereas in the vicinity of islands the climate is stable. The magnetic fields within the Grand Line cause normal compasses to malfunction, making it even more difficult to navigate, and instead a special compass called a Log Pose must be used. The Log Pose functions by locking on to one island's magnetic field and then locking on to another island's magnetic field. The time for it to set depends on the island. This process can be bypassed by obtaining an Eternal Pose, a Log Pose variation that is permanently set to a specific island and never changes.`,

    `The world of One Piece includes animals that function like devices. Transponder Snails  are snail-like animals that act like a rotary phone, fax machine, or camera. Dials, the shells of certain sky-dwelling animals, can be used to store kinetic energy, wind, sound, images, heat, and the like and have various applications.`,

    `Devil Fruits are said to be incarnations of the sea devil himself and as a result, Devil Fruit users cannot swim in sea water as "they are hated by the sea". When even partially submerged in sea water, they lose all their strength and coordination, although some abilities remain. For example, Luffy is still able to stretch after being totally submerged. Sea-prism stone also has this effect. Moving water, such as rain or waves, does not have this effect. When a Devil Fruit user dies, the powers reincarnate into a new Devil Fruit. For unknown reasons, Devil Fruit users cannot eat a second Devil Fruit because it would cause their bodies to burst, although series antagonist Blackbeard manages to obtain a second Devil Fruit power through an unknown method. Devil Fruit powers can also be "awakened", greatly increasing the power and utility of the user's abilities.`,

    `Oda revealed that he originally planned One Piece to last five years, and that he had already planned the ending. However, he found it would take longer than he had expected as Oda realized that he liked the story too much to end it in that period of time. In 2016, nineteen years after the start of serialization, the author said that the manga has reached 65% of the story he intends to tell. In July 2018, on the occasion of the twenty-first anniversary of One Piece, Oda said that the manga has reached 80% of the plot, while in January 2019, he said that One Piece is on its way to the conclusion, but that it could exceed the 100th volume. In August 2019, Oda said that, according to his predictions, the manga will end between 2024 and 2025. However, Oda stated that the ending would be what he had decided in the beginning; he is committed to seeing it through`
]

// main variables
const form = document.querySelector(".lorem-form")
const input = document.getElementById("lorem-input")
const result = document.querySelector(".lorem-generated")

// Event listener

form.addEventListener('submit',function (e) {                                            //triggrwd when form gets submitted
    e.preventDefault();         //prevent from reloading
    const value=parseInt(input.value);         //convert variable value to int using parseint()

    const randomNum= Math.ceil(Math.random()*9) ;      //getting random no. from 0 to 9

    if (isNaN(value) || value<=0 || value >9) {        //isNaN => is Not a Number
        result.innerHTML=`<p class="result">${text[randomNum]}</p>`     
    }else{
        let tempText=text.slice(0,value);              //slice cuts the array from 0 to the value given             
        
        tempText = tempText.map(function (item) {     //making the array return a html code
            return `<p class="result">${item}</p>`
        }).join("");                               //now removing html code and getting content using join
        result.innerHTML=tempText;                 //putting content in innerHTML of result(para)
    }
})