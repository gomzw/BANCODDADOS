const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

//url='20.201.28.151/main/dados/grafico-principal.json';
//modelo de endereço servidor de dados para o javaScript.

async function visualizarInformacoesGlobais(){

    const res = await fetch(url);
    const dados = await res.json;
}

const layout = {
  
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title:{
        text: 'Redes socias com mais usuarios',
        x: 0,
        font: {
            color:getCSS(--primary-color),
            size: 30,
            font: getCSS('--font')
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
          text: 'Bilhões de usuários ativos',
          font: {
              color: getCSS('--secondary-color')
          }
        }
      }
}