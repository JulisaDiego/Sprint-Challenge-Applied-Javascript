// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const mainDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerTemp = document.createElement('span');


    mainDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerH1.textContent = 'Lambda Times';
    headerDate.textContent = 'March 28, 2019';
    headerTemp.textContent = '98°';


    mainDiv.appendChild(headerDate);
    mainDiv.appendChild(headerH1);
    mainDiv.appendChild(headerTemp);

    return mainDiv;

}

const headerContainer = document.querySelector('.header-container');
console.log('hey, im the header');
headerContainer.appendChild(Header());
