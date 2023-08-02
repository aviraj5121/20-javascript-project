let btn = document.getElementById('searchbtn')
let name = document.getElementById('search').value
const resultContainer = document.getElementById('resultContainer');
senddata = async(event) => {
        event.preventDefault();
        let name = document.getElementById('search').value;
        console.log(name);
        console.log("working");
        resultContainer.innerHTML = '';
        if (!name) {
            window.alert("Please enter a movie title to search.");
            return;
        }
        fetch('/suggest', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        })
    .then((response) => response.json())
    .then((result) => {
        console.log('Server response:', result);
        console.log(result.data)
        const data = result.data
        console.log(Object.keys(data).length)
        console.log(data[0]._id)
        for(let i =0; i<Object.keys(data).length;i++){
            const card = document.createElement('div');
            const heading = document.createElement('div')
            card.classList.add('card')
            const id = document.createElement('h4');
            id.classList.add('card-title');
            const title = document.createElement('h2')
            const alttitle = document.createElement('h6')
            const genre = document.createElement('h5')
            const imgElement = document.createElement('img');
            const detials = document.createElement('p')
            const openlink  = document.createElement('a')
            id.textContent = data[i]._id;
            title.textContent=data[i].title;
            alttitle.textContent=data[i].alternativeTitles.join(',');
            genre.textContent=data[i].genres.join(',');
            imgElement.src =data[i].image;
            if(data[i].synopsis){
                detials.textContent=data[i].synopsis
            }
            
            heading.appendChild(title);
            heading.appendChild(id);
            card.appendChild(imgElement)
            card.appendChild(heading)
            card.appendChild(genre);
            card.appendChild(alttitle);
            card.appendChild(detials)
            resultContainer.appendChild(card);

        }
    })
    .catch((error) => {
        window.alert(error)
    console.log('Error:', error);
    });
    }

btn.addEventListener('click',senddata)