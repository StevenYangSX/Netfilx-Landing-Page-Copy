
var btns = document.getElementsByClassName("question-button");
console.log(btns);
console.log(btns.length);

let ifShowing = [false,false,false,false,false,false]
let answer =['Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!','Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $9.99 a month. No extra costs or contracts.','Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.','Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.','Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Netflix has to offer.','Try us free for 30 days! If you enjoy your Netflix trial, do nothing and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.']

for(let i=0; i<btns.length;i++) {
    btns[i].addEventListener("click", function showAnswer() {
    
        if(ifShowing[i] === false) {
            document.getElementById("answer"+(i+1)).innerHTML = answer[i];
            ifShowing[i] = true;
        } else {
            document.getElementById("answer"+(i+1)).innerHTML = ""
            ifShowing[i] = false;
        }
    });   
}
    










