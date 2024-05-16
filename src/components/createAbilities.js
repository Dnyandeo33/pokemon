const createAbilities = (abilities) => {
    const ulEle = document.createElement('ul');
    ulEle.classList.add('abilities');
    abilities.forEach((ability) => {
        const liEle = document.createElement('li');
        liEle.innerText = ability.ability?.name;
        ulEle.append(liEle);
    });
    return ulEle;
};

export default createAbilities;
