//console.log('test');

//- Create a variable for the object array whit the different info inside
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

//console.log(team); //Array with the team elements

const infoStrings = document.querySelector('.site-main');

//- Create a console log with the following info inside a loop to print all the info one by one
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member.name, member.role, member.image);

    //- Print the same informations obtained before on the DOM as strings
    const markup = `<h3>${member.name}</h3><p>${member.role}</p><img src="./assets/img/${member.image}" alt="">`

    infoStrings.insertAdjacentHTML('beforeend', markup);

};