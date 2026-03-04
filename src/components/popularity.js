export function popularPeople(item, arr) {
    const leftBox = document.createElement('div');
    leftBox.className = 'left';
    leftBox.innerHTML = `
        <p class="parag">${arr.indexOf(item) + 1} Place</p>
        <div class="boxik">
        <h4 class="h4">${item.name}</h4>
        <p class="name-p">${item.original_name}</p>
        </div>
        `;
    leftBox.querySelector(".parag").classList.add(`p-${arr.indexOf(item) + 1}`);
    return leftBox;
}

export function popularPeoples(item, arr) {
    const rightBox = document.createElement('div');
    rightBox.className = 'r-box';
    rightBox.innerHTML = `
        <div class="names">
        <p class="pars">${item.name}</p>
        <p class="parags">${item.original_name}</p>
        </div>
        <p class="places">${arr.indexOf(item) + 3} Place</p>
        `;
    rightBox.querySelector(".places").classList.add(`p-${arr.indexOf(item) + 3}`);
    return rightBox;
}