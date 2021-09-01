
const getClick = search => {
    const ser = document.getElementById('ser');
    const serText = ser.value;
    ser.value = '';
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displayShow(data.drinks));
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