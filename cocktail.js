
let getClick = () => {
    let ser = document.getElementById('ser');
    let serText = ser.value;
    ser.value = '';
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${serText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.drinks));
}
const displayShow = drinks => {
    // searchBox();
    console.log(drinks);
    const show = document.getElementById('show');
    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class='drink'>
            <img width="200px" src ="${drink.strDrinkThumb}">
            <h3>${drink.strDrink}</h3>
        </div>
        `;
        show.appendChild(div);
    });
};