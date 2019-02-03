Html = '<ul>';
lista = '';
url = 'http://127.0.0.7/wp-json/wp/v2/pages';

function loadData(url){
    console.log('Entra la fun', url);
    Html = '';
    lista = '';
    $.getJSON(url, (pages) => {
   
        pages.map((e) => {
    
            lista += `<li> 
                          <a href=${e.link}> 
                             ${e.title['rendered']} 
                          </a> 
                      </li>`;
           
        });
        
        document.querySelector('#output').innerHTML += Html + lista + '</ul>';
    });
}

loadData(url);


function onClick(){
    const idUrl = document.querySelector('#url');
    document.querySelector('#output').innerHTML = '';
    if (idUrl !==''){
        loadData(idUrl.value);
    }
    url = '';

    
}







