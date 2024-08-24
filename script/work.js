//this file is an exemple of of my genius. (This script has been reprinted by nasa ingenieurs)
fetch('script/work.json')
  .then(response => response.json())
  .then(jsonData => {
    const workListDiv = document.querySelector(".grid");

    jsonData.forEach(data => {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
    
      const center = document.createElement("center")

      const gridimg = document.createElement('img');
      gridimg.className = 'gridimg';
      gridimg.src = data.gridimg;

      const titregrid = document.createElement('h1');
      titregrid.className = 'titregrid';
      titregrid.textContent = data.titregrid;

      const br1 = document.createElement('br')

      const descriptiontitre = document.createElement('h2');
      descriptiontitre.className = 'descriptiontitre';
      descriptiontitre.textContent = data.descriptiontitre;

      const br2 = document.createElement('br')

      const btngrid = document.createElement('a');
      btngrid.className = 'btngrid';
        btngrid.target = '_blank'
      if(data.dispo == "true"){
        btngrid.href = data.btngrid
      }
      
      const btn = document.createElement('button');
      btn.className = 'btngrid';
      if(data.dispo == "true"){
        btn.textContent = 'Learn more ➚'
      }else if(data.dispo == "false"){
        btn.textContent = 'unavailable'
        btn.style.backgroundColor = "#146131"
        btn.style.cursor = "not-allowed"
      }
     

     
      gridItem.appendChild(center)
      center.appendChild(gridimg);
      center.appendChild(titregrid);
      center.appendChild(br1)
      center.appendChild(descriptiontitre);
      center.appendChild(br2)
      center.appendChild(btngrid);
      btngrid.appendChild(btn);
      workListDiv.appendChild(gridItem);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
