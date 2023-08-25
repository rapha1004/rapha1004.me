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
      btngrid.href = data.btngrid
      btngrid.target = '_blank'
      
      const btn = document.createElement('button');
      btn.className = 'btngrid';
      btn.textContent = 'Learn more ➚'

     
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
