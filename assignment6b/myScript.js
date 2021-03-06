//store saves the count of items in cart
//if has previously visited page before, the previous count will be restored
let defaultS = {count: 0};
let store = JSON.parse(localStorage.getItem('store') || JSON.stringify(defaultS));
localStorage.setItem("store", JSON.stringify(store));

/*document.getElementById("addToCart").addEventListener("click", addItem);*/


//upon loading of each page, cartcount/count is updated if valid
function rerenderCart() {
    let s = JSON.parse(localStorage.getItem("store"));
    let c = s.count;
    let cs = JSON.stringify(c);

    let c1 = document.getElementById("cartcount");
    let c2 = document.getElementById("count");
    if (c1) {
        c1.innerHTML=cs;
        console.log("c1");
    }
    if (c2) {
        c2.innerHTML=cs;
        console.log("c2");
    }
    console.log(cs);
}

//rerenderCart();

//update cartcount or count whichever is valid on current page
function addItem() {
    let s = JSON.parse(localStorage.getItem("store"));
    let c = s.count+1;
    let cs = JSON.stringify(c);

    let c1 = document.getElementById("cartcount");
    let c2 = document.getElementById("count");
    if (c1) {
        c1.innerHTML=cs;
        console.log("c1");
    }
    if (c2) {
        c2.innerHTML=cs;
        console.log("c2");
    }

    s.count = s.count+1;
    localStorage.setItem("store", JSON.stringify(s));
    console.log(s.count);
}

/*change display of quantity selection*/
function select1() {

    document.getElementById('dPrice').innerHTML='$3.99';

    document.getElementById('1').className="dSelect dChosen";
    document.getElementById('3').className="dSelect";
    document.getElementById('6').className="dSelect";
    document.getElementById('12').className="dSelect"
};

function select3() {

    document.getElementById('dPrice').innerHTML='$9.99';

    document.getElementById('3').className="dSelect dChosen";
    document.getElementById('1').className="dSelect";
    document.getElementById('6').className="dSelect";
    document.getElementById('12').className="dSelect";

};

function select6() {
    document.getElementById('dPrice').innerHTML='$21.99';

    document.getElementById('6').className="dSelect dChosen";
    document.getElementById('3').className="dSelect";
    document.getElementById('1').className="dSelect";
    document.getElementById('12').className="dSelect";
};

function select12() {
    document.getElementById('dPrice').innerHTML='$43.99';

    document.getElementById('12').className="dSelect dChosen";
    document.getElementById('3').className="dSelect";
    document.getElementById('6').className="dSelect";
    document.getElementById('1').className="dSelect";
};

/*change display of topping selection*/
function selectNone() {

    document.getElementById('toppingImg').src='./nt.png';

    document.getElementById('None').className="dSelect dChosen";
    document.getElementById('Choc').className="dSelect";
    document.getElementById('Sugar').className="dSelect";
    document.getElementById('Vani').className="dSelect";

};

function selectChoc() {

    document.getElementById('toppingImg').src='./c.png';

    document.getElementById('Choc').className="dSelect dChosen";
    document.getElementById('None').className="dSelect";
    document.getElementById('Sugar').className="dSelect";
    document.getElementById('Vani').className="dSelect";

};

function selectSugar() {

    document.getElementById('toppingImg').src='./s.png';

    document.getElementById('Sugar').className="dSelect dChosen";
    document.getElementById('Choc').className="dSelect";
    document.getElementById('None').className="dSelect";
    document.getElementById('Vani').className="dSelect";
};

function selectVani() {
    document.getElementById('toppingImg').src='./v.png';

    document.getElementById('Vani').className="dSelect dChosen";
    document.getElementById('Choc').className="dSelect";
    document.getElementById('Sugar').className="dSelect";
    document.getElementById('None').className="dSelect";
};