const quotes = [
    {
        quote: "폼은 일시적이지만 클래스는 영원하다.",
        author: "빌 샹클리"
    },
    {
        quote: "공은 둥글고, 경기는 90분이나 진행된다.",
        author: "제프 헤어베어거"
    },
    {
        quote: "공은 내 앞에서 멈춘다.",
        author: "파비오 칸나바로"
    },
    {
        quote: "강한 자가 이기는 것이 아니라, 이기는 자가 강한 것이다.",
        author: "프란츠 베켄바워"
    },
    {
        quote: "나는 공을 막는 것이 아니라 팀의 패배를 막는 것이다.",
        author: "이케르 카시야스"
    },
    {
        quote: "뛰어난 킥은 하루만에 만들어지지 않는다. 수천 수만 번의 노력으로 탄생하는 것이다.",
        author: "데이비드 베컴"
    },
    {
        quote: "인간의 도덕과 의무에 대해 내가 알고 있는 것은 모두 축구에서 배웠다.",
        author: "알베르 카뮈"
    },
    {
        quote: "힘든가? 오늘 쉬면 내일은 뛰어야 한다.",
        author: "카를레스 푸욜"
    },
    {
        quote: "쓰러질지언정 무릎은 꿇지 않는다.",
        author: "박지성"
    },
    {
        quote: "골은 토마토 케첩과 같다",
        author: "호날두"
    }

]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQoute.quote;
author.innerText = "- " + todaysQoute.author;

