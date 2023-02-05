document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charName = document.querySelector('input').value
    try {
        const response = await fetch(`https://wheel-of-time-api-production.up.railway.app/api/${charName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('charName').innerText = data.characterName
        document.getElementById('charBirthplace').innerText = data.birthPlace
        document.getElementById('charNation').innerText = data.nationality
        document.getElementById('charFeatures').innerText = data.description
        document.getElementById('charAbilities').innerText = data.abilities
        document.getElementById('charTitles').innerText = data.titles 

        document.getElementById('charImage').src = data.image
        document.getElementById('charCaption').innerText = data.characterName

        
    } catch (error) {
        console.log(error)
    }
    
}
