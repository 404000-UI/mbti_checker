const options = document.querySelectorAll(".option");
const showResultBtn = document.querySelector("button#showResult");

let eI = 0; // default: I
let sN = 0; // default: S
let tF = 0; // default: F
let jP = 0; // default: P

let result;
let points = [];

// console.log(document.querySelectorAll("div.i").length, document.querySelectorAll("div.e").length);
// console.log(document.querySelectorAll("div.s").length, document.querySelectorAll("div.n").length);
// console.log(document.querySelectorAll("div.t").length, document.querySelectorAll("div.f").length);
// console.log(document.querySelectorAll("div.j").length, document.querySelectorAll("div.p").length);

options.forEach(option => {
    option.addEventListener("click", () => {
        const group = option.parentElement;
        group.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
        option.classList.add("selected");
    });
});

showResultBtn.addEventListener("click", () => {
    const selectedOptions = document.querySelectorAll(".selected");
    selectedOptions.forEach((ele) => {
        const agree = ele.classList[1];
        const point = ele.classList[2];
        const eisntfjp = ele.parentElement.parentElement.classList[1];
        switch (eisntfjp) {
            case "e":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            eI--;
                        case "two":
                            eI -= 2;
                        case "three":
                            eI -= 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            eI++;
                        case "two":
                            eI += 2;
                        case "three":
                            eI += 3;
                    }
                }
            case "i":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            eI++;
                        case "two":
                            eI += 2;
                        case "three":
                            eI += 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            eI--;
                        case "two":
                            eI -= 2;
                        case "three":
                            eI -= 3;
                    }
                }
            case "s":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            sN++;
                        case "two":
                            sN += 2;
                        case "three":
                            sN += 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            sN--;
                        case "two":
                            sN -= 2;
                        case "three":
                            sN -= 3;
                    }
                }
            case "n":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            sN--;
                        case "two":
                            sN -= 2;
                        case "three":
                            sN -= 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            sN++;
                        case "two":
                            sN += 2;
                        case "three":
                            sN += 3;
                    }
                }
            case "t":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            tF--;
                        case "two":
                            tF -= 2;
                        case "three":
                            tF -= 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            tF++;
                        case "two":
                            tF += 2;
                        case "three":
                            tF += 3;
                    }
                }
            case "f":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            tF++;
                        case "two":
                            tF += 2;
                        case "three":
                            tF += 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            tF--;
                        case "two":
                            tF -= 2;
                        case "three":
                            tF -= 3;
                    }
                }
            case "j":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            jP--;
                        case "two":
                            jP -= 2;
                        case "three":
                            jP -= 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            jP++;
                        case "two":
                            jP += 2;
                        case "three":
                            jP += 3;
                    }
                }
            case "p":
                if (agree === "agree") {
                    switch (point) {
                        case "one":
                            jP++;
                        case "two":
                            jP += 2;
                        case "three":
                            jP += 3;
                    }
                } else if (agree === "disagree") {
                    switch (point) {
                        case "one":
                            jP--;
                        case "two":
                            jP -= 2;
                        case "three":
                            jP -= 3;
                    }
                }
        }
    });
    if (eI >= 0) {
        result = "I";
    } else {
        result = "E";
    }
    if (sN >= 0) {
        result += "S";
    } else {
        result += "N";
    }
    if (tF >= 0) {
        result += "F";
    } else {
        result += "T";
    }
    if (jP >= 0) {
        result += "P";
    } else {
        result += "J";
    }
    points = [eI, sN, tF, jP];
    localStorage.setItem("MBTI", JSON.stringify(result));
    localStorage.setItem("points", JSON.stringify(points));
    window.location.href = "./result.html";
});