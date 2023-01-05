console.log('Contentscript injected');

let element = false;

const info = addInfo();
const budgetInfo = addBudgetInfo();

let extensionElem = document.createElement('div');
extensionElem.classList.add('budget-div');

extensionElem.addEventListener('click', () => {
  const childToView = element ? budgetInfo : info;
  document.querySelector('.budget-div').replaceChildren(childToView);
  element = !element;
});

extensionElem.appendChild(budgetInfo);

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5',
);
parentElement.appendChild(extensionElem);

function addBudgetInfo() {
  const budgetInfo = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = './images/favicon-16x16.png';
  logo.alt = 'eco.mio logo';
  budgetInfo.appendChild(logo);

  const p = document.createElement('p');
  const budget = document.body.textContent.match(/\d+\s?€/);
  p.innerHTML = `Budget-to-Beat: ${budget}`;

  budgetInfo.appendChild(p);
  return budgetInfo;
}

function addInfo() {
  const info = document.createElement('div');
  info.innerHTML = `<p>The effects of climate change are widespread and include more frequent and severe heatwaves, storms, and other extreme weather events, as well as rising sea levels and changes to the availability and quality of food, water, and other resources.</p>`;

  return info;
}
