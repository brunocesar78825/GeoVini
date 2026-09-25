============================================================
VINIGEOCLIMA BA
============================================================

NOVA VERSÃO DO SITE

Pasta:

C:\ViniGeoClima_Novo


------------------------------------------------------------
FONTES
------------------------------------------------------------

Meteorologia:

Open-Meteo

Qualidade do ar:

Open-Meteo / CAMS

Queimadas:

Programa Queimadas / INPE

Mapas:

Leaflet
OpenStreetMap
Esri
OpenTopoMap


------------------------------------------------------------
FUNCIONAMENTO
------------------------------------------------------------

O site:

- consulta meteorologia;
- consulta qualidade do ar;
- consulta focos de queimadas;
- mostra previsão de 9 dias;
- possui mapa;
- possui pesquisa de cidades;
- possui localização;
- possui cinco páginas adicionais;
- possui análise ViniGeo;
- funciona em computador e celular;
- possui PWA;
- possui atualização automática.


------------------------------------------------------------
DADOS AUSENTES
------------------------------------------------------------

Quando uma fonte não fornece determinado dado,
o site não inventa.

Exemplo:

CO2 emitido:

N/D

Isso ocorre porque o produto de focos consultado
não fornece diretamente uma emissão local de CO2.


------------------------------------------------------------
VÍDEOS
------------------------------------------------------------

Os vídeos devem ser colocados localmente.

Isso é proposital.

O site não deve depender de um link temporário
de uma plataforma de vídeos.

Os vídeos são apenas contexto visual.

Um vídeo de chuva não prova que aquela chuva
aconteceu na cidade atual.

Um vídeo de incêndio não prova que existe
incêndio na cidade atual.

Para afirmar incêndio ou enchente é necessário
dado compatível e fonte confiável.


------------------------------------------------------------
TESTAR NO COMPUTADOR
------------------------------------------------------------

Abra PowerShell:

cd C:\ViniGeoClima_Novo

Depois:

py -m http.server 8080

Abra no navegador:

http://127.0.0.1:8080


------------------------------------------------------------
PUBLICAÇÃO
------------------------------------------------------------

Depois de testar:

GitHub Pages pode publicar esta pasta.

Não substitua o projeto antigo até confirmar
que esta versão está funcionando.


------------------------------------------------------------
IMPORTANTE
------------------------------------------------------------

Este projeto é separado de:

C:\jarvis

e de:

C:\GeoVini

Não altere essas pastas para testar esta versão.

============================================================
