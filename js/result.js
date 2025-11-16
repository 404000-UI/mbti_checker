const resultText = {
    "ISTJ": "부끄럼을 많이 탄다.\n성실하고 책임감이 강하고 정리정돈을 잘한다.\n예정에 없던 일을 몹시 힘들어한다\n자발성이 부족한 편이다.\n표현이 적으며 표정변화가 없다.\n절약과 준비정신이 철저하다.\n양처럼 순하고 순종적이다.\n외유내강의 느낌을 준다.\n자세가 바르며 계획을 세워 공부한다.\n자세한 설명을 선호한다.\n창의적인 면와 융통성이 부족한 편이다.",
    "ISFJ": "온순하다. 성실하고 책임감이 강하다.\n말을 참고 삭이는 경우가 많다.\n봉사적이며 착하다.\n소수와 깊게 사귄다. 친한 친구와 논다.\n인내심이 있으며 꾸준하다.\n준비물을 잘 챙긴다.\n깔끔하고 단정하다.\n규칙을 준수하며 계획적이다.\n행동력이 부족하다.\n신뢰감이 간다.\n변화를 싫어한다.\n다른사람에게 도움이 되고자 한다.",
    "ISTP": "말수가 적고 표정변화가 거의 없다.\n의욕적이며 고집이 세다.\n앞에 나서지는 않지만 소집단에서는 리더 역할을 하려고 한다.\n여러 가지에 관심이 많다.\n왠지 강한 구석이 있다.\n뒷마무리가 부족하다.\n끈기가 부족하다.\n타인에 대한 배려가 적다.\n손재주가 있다.\n친구와 잘 다투고 잘 따진다.\n조용하다가도 일은 성급하게 한다.\n",
    "ISFP": "마음이 너그럽고 순하다.\n낙천적, 천하태평 행동이 느리다.\n놀 줄 알며 무대 체질, 예술적 매체를 통해 자신을 드러내는 것을 좋아함.\n성급한 결론을 잘 내린다.\n부끄럼을 많이 탄다.\n동식물 사육이나 재배를 좋아하다.\n권위적인 분위기에서는 눈치를 살핌\n잔잔하게 산만한 편이다.\n주변의 요구를 뿌리치지 못한다.",
    "ESTP": "개방적, 활동적, 적극적이고 진취적이다.\n재치있다.\n모든 일에 관심을 갖는다.\n끝마무리가 부족할 때가 있다.\n말과 행동이 다를때가 있다.\n복잡한 것을 싫어한다.\n욕심이 많다.\n은근히 승부근성이 강하다.\n대중성에 강하다.\n목소리가 크다.\n말이 많고 잘 따지며 꾸중을 들어도 자신의 입장을 끝까지 말한다.\n임기응변이 뛰어나고 호탕하다.\n어떤 권위나 강압에도 굴하지 않는다.",
    "ESFP": "활발하고 천방지축이다.\n감정적 표현이 많다.\n목소리가 크고 말이 많다.\n언제나 놀고 싶어한다.\n단순하고 솔직하다.\n장난이 심하다.\n불임성이 있다.\n지적을 많이 받아 자신을 착하다고 생각하지 않는다.\n일이나 숙제를 빨리 끝내고 싶어한다.\n적응력이 뛰어나다.\n진지함이 부족하다.\n친구들과 같이 공부하면 공부가 잘 된다.\n인정을 받고 싶은 욕구가 강하다.",
    "ESTJ": "모범적이고 솔선수범한다.\n정리정돈을 잘하고 책임감이 강하다.\n웃어른을 공경하고 예의가 바르다.\n합리적으로 생각하고 공정한 것을 선호한다.\n경쟁에서는 이겨야 한다.\n친구나 주변사람을 배려하는 리더타입이다.\n질서와 사회적인 관심을 중시한다.\n여러 친구들과 두루 잘 지낸다.\n친절하다.\n분배를 잘함.\n불평이 없다.\n활발하다.",
    "ESFJ": "명랑쾌활, 감정이 풍부하다.\n타인의 무관심에 쉽게 좌절한다.\n남 앞에 나서기를 좋아한다.\n교실을 꾸미는 일을 잘한다.\n미리 걱정하는 경향이 있다.\n왕성한 발표력을 갖고있다.\n언어계열을 선호한다.\n표현력과 리더쉽이 뛰어나다.\n운동을 좋아함\n이야기 중심의 소설류를 많이 읽는다.\n분명한 과제와 자세한 설명을 좋아한다.\n말이 많다.",
    "INFJ": "조용하고 침착하고 책임감이 강하다.\n내면적인 욕심이 많고 잔걱정이 많다.\n또래에 비해 성숙한 사고력을 지녔다.\n민감하고 복잡한 정서를 가져서 비유를 잘한다.\n교사의 의도를 잘 알아챈다.\n개인적인 칭찬을 해주면 크게 향상된다.\n시끄럽고 복잡한 것, 나서기를 싫어함.\n학급일에 적극적으로 임하지 않는다.\n완벽성 추구하며 소외받는 사람에 관심이 많음\n좋아하는 것과 좋아하지 않는 것 차이가 심하다.",
    "INTJ": "소수와 깊게 사귄다.\n외모에 무관심하고 독립적, 독창적, 효율성을 강조한다.\n고집이 아주 세다.\n충분한 시간을 주는 것이 필요한 타입이다.\n이유가 타당하지 않으면 끝까지 승복하지 않는다.\n논리적이다.\n감정표현은 없으나 상처를 쉽게 받는다.\n칭찬이나 벌에 무관심하지만 막상 칭찬을 받으면 기분이 좋다.\n승부욕이 강하고 이길 때까지 한다.",
    "INFP": "조용하고 말이 없으나 마음이 깊고 따뜻하다.\n친구나 주변상황에 민감하고 영향 많이 받는다.\n정서세계가 민감하다.\n동정심이 많고 사려깊다.\n약간 느리며 꾸준하지 못하다.\n실천력이 부족하다.\n낮잠을 좋아한다.\n좋아하는 것과 그렇지 않은 것 사이에 차이가 많이난다.\n온화하고 부드럽다.\n자신의 가치를 중시한다.\n상징에 대한 해석이 뛰어나다.",
    "INTP": "만물박사, 논리적이고 호기심이 많다.\n주관이 강하고 고집이 세다.\n자기중심적, 간섭이나 잔소리를 싫어한다.\n주변상황에 영향을 크게 받지 않는다.\n정리정돈을 잘 하지 못한다.\n감정이 단순하다.\n잘못된 일은 꼭 지적한다.\n과학영역에 관심이 많다.\n잘난척하는 경향이 있다.\n관심이 없는 영역은 하지 않는다.",
    "ENFP": "순진하고 순수하다.\n변덕쟁이이다.\n기발하다.\n분위기만 맞으면 신난다.\n좋아하는 것과 그렇지 않은 것 사이에 집중력의 차이가 난다.\n딴 생각을 잘한다.\n칭찬에 민감하다.\n용동이 헤프다.\n사람을 좋아한다.\n무언가를 반복하는 것을 싫어한다.\n정리정돈이 안 된다.",
    "ENFJ": "온순하고 착하다.\n책임감이 강하고 신뢰감을 준다.\n주변상황에 영향을 많이 받는다.\n정리정돈을 잘한다.\n딴 세계에 빠져있을 때가 종종 있다.\n예능적인 분야를 좋아한다.\n특정 분야는 지나칠 정도로 진지하다.\n참을성이 많다.\n친구들과 잘 어울린다.\n뜻밖의 행동으로 주변을 놀라게 한다.\n터질 것 같은 화산을 마음에 품고 사는 아이다.",
    "ENTP": "활발하며 독창적이다.\n상상력과 쵸현력이 뛰어나다.\n친구들과 잘 어울린다.\n게으르고 정리정돈이 안 된다는 소리를 종종 듣는다.\n개인주의적 경향이 있고, 고집에 세다.\n다방면에 관심을 가진 분야가 많다.\n반복 설명은 자기논리에 빠지기 쉽다.\n쉽게 포기하는 편이다.\n마무리가 아쉽다.\n인정받으면 기분이 좋다.",
    "ENTJ": "원라원착주의자이다.\n활발하다.\n논리적인 언어표현을 가지고 있다.\n고집이 강하다.\n간섭을 싫어한다.\n잘못된 것, 부당한 것은 꼭 바로 잡고 넘어간다.\n준비가 철저하다.\n계획하고 마음 먹은 것은 꼭 한다.",
};

const mbti = JSON.parse(localStorage.getItem("MBTI"));
const points = JSON.parse(localStorage.getItem("points"));
const name = localStorage.getItem("name");

const titleH3 = document.querySelector("h3#title");
const titleH1 = document.querySelector("h1#title");


const randInt1 = parseInt(localStorage.getItem("randInt1"));
const randInt2 = parseInt(localStorage.getItem("randInt2"));
const randInt3 = parseInt(localStorage.getItem("randInt3"));
const randInt4 = parseInt(localStorage.getItem("randInt4"));

function getRandomInt() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1
}

for (let i = 0; i < points.length; i++) {
    points[i] = Number(points[i]);
}

let eiPoint;
let nsPoint;
let tfPoint;
let jpPoint;

if (points[0] === 0) {
    eiPoint = 50 + randInt1;
} else {
    if (points[0] * 2 + randInt1 < 50) {
        eiPoint = 100 - points[0] * 2 + randInt1;
    } else {
        eiPoint = points[0] * 2 + randInt1;
    }
}
if (eiPoint > 100) {
    eiPoint /= 2;
}

if (points[1] === 0) {
    nsPoint = 50 + randInt2;
} else {
    if (points[1] * 2 + randInt2 < 50) {
        nsPoint = 100 - points[1] * 2 + randInt2;
    } else {
        nsPoint = points[1] * 2 + randInt2;
    }
}
if (nsPoint > 100) {
    nsPoint /= 2;
}

if (points[2] === 0) {
    tfPoint = 50 + randInt3;
} else {
    if (points[2] * 2 + randInt3 < 50) {
        tfPoint = 100 - points[2] * 2 + randInt3;
    } else {
        tfPoint = points[2] * 2 + randInt3;
    }
}
if (tfPoint > 100) {
    tfPoint /= 2;
}

if (points[3] === 0) {
    jpPoint = 50 + randInt4;
} else {
    if (points[3] * 2 + randInt4 < 50) {
        jpPoint = 100 - points[3] * 2 + randInt4;
    } else {
        jpPoint = points[3] * 2 + randInt4;
    }
}
if (jpPoint > 100) {
    jpPoint /= 2;
}

titleH3.textContent = `${name}님의 성격 유형은 :`;
titleH1.textContent = `${mbti}`;

const eiDiv = document.querySelector("div#eI");
const eiBar = eiDiv.querySelector('div#bar');
const eiLeftLabel = eiDiv.querySelector('span#left-label');
const eiRightLabel = eiDiv.querySelector('span#right-label');
eiBar.style.width = (eiPoint) + '%';
switch (mbti[0]) {
    case 'I':
        eiLeftLabel.textContent = `내향형 ${eiPoint}%`;
        eiRightLabel.textContent = `외향형 ${100 - eiPoint}%`;
        break;
    case 'E':
        eiLeftLabel.textContent = `외향형 ${eiPoint}%`;
        eiRightLabel.textContent = `내향형 ${100 - eiPoint}%`;
        break;
}

const nsDiv = document.querySelector("div#nS");
const nsBar = nsDiv.querySelector('div#bar');
const nsLeftLabel = nsDiv.querySelector('span#left-label');
const nsRightLabel = nsDiv.querySelector('span#right-label');
nsBar.style.width = (nsPoint) + '%';
switch (mbti[1]) {
    case 'S':
        nsLeftLabel.textContent = `현실주의형 ${nsPoint}%`;
        nsRightLabel.textContent = `직관형 ${100 - nsPoint}%`;
        break;
    case 'N':
        nsLeftLabel.textContent = `직관형 ${nsPoint}%`;
        nsRightLabel.textContent = `현실주의형 ${100 - nsPoint}%`;
        break;
}

const tfDiv = document.querySelector("div#tF");
const tfBar = tfDiv.querySelector('div#bar');
const tfLeftLabel = tfDiv.querySelector('span#left-label');
const tfRightLabel = tfDiv.querySelector('span#right-label');
tfBar.style.width = (tfPoint) + '%';
switch (mbti[2]) {
    case 'F':
        tfLeftLabel.textContent = `원칙주의형 ${tfPoint}%`;
        tfRightLabel.textContent = `이성적사고형 ${100 - tfPoint}`;
        break;
    case 'T':
        tfLeftLabel.textContent = `이성적사고형 ${tfPoint}%`;
        tfRightLabel.textContent = `원칙주의형 ${100 - tfPoint}%`;
        break;
}

const jpDiv = document.querySelector("div#fP");
const jpBar = jpDiv.querySelector('div#bar');
const jpLeftLabel = jpDiv.querySelector('span#left-label');
const jpRightLabel = jpDiv.querySelector('span#right-label');
jpBar.style.width = (jpPoint) + '%';
switch (mbti[3]) {
    case 'J':
        jpLeftLabel.textContent = `계획형 ${jpPoint}%`;
        jpRightLabel.textContent = `탐색형 ${100 - jpPoint}%`;
        break;
    case 'P':
        jpLeftLabel.textContent = `탐색형 ${jpPoint}%`;
        jpRightLabel.textContent = `계획형 ${100 - jpPoint}%`;
        break;
}

const explanationDiv = document.querySelector("div#explanation");
const explanationImg = explanationDiv.querySelector("img");
const explanationH2 = explanationDiv.querySelector("h2");
const explanationP = explanationDiv.querySelector("p");
explanationImg.src = `../assets/${mbti}/${getRandomInt()}.jpg`
explanationH2.textContent = `${mbti}의 성격 특성`;
explanationP.innerHTML = resultText[mbti].replace(/\n/g, '<p>');