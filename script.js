const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2401-ftb-et-web-ft'; // the name i put 
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    let players = []
    try {

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
    async function getPuppyBowl (){
       try {
        const response = await fetch (`${APIURL}/players`)
        const json = await response.json ()
        return json.data
       } 
    }
    //this is my code 
    
};

const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
    try {
        const response = await fetch (`${APIURL}/players`)
        const json = await response.json ()
        return json.data // code
       } 
};

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
    return err // my code 
};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(``
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
        return (err);
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
    function renderPlayers (){
        const players = players.map(ele => {
            let div = document.createElement('div')//mycode
        }
    }
};//mycode


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }

}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    const renderAllPlayers //mycode
    renderNewPlayerForm();
}

init();