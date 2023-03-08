DELETE FROM "Products";

INSERT INTO "Products" (name, stock, price, description, color, "createAt", "modelRA", image)
VALUES ('Machine expresso ARIETE 1313',
10,
389,
'Cette machine expresso manuelle est une Machine Debutant.
Cela signifie qu’elle est très facile à prendre en main et polyvalente sur ses extractions. ' ||
'En revanche elle arrive vite à ses limites en qualité de boisson.',
'Red',
'11-09-2023',
'',
'https://www.rueducommerce.fr/medias/1362a1cc1541342aa6b51fa160dd290e/p_1000x1000/1313-21.jpg');

INSERT INTO "Products" (name, stock, price, description, color, "createAt", "modelRA", image)
VALUES ('THERA RETRO GLOSS',
100,
123,
'Machine à expresso pour préparer des cafés professionnels à la maison. ' ||
'Son bras vapeur permet de faire mousser le lait pour faire des cafés crémeux comme ceux d''un barista professionnel.' ||
' Elle se caractérise pour son design rétro disponible en différentes couleurs.',
'Red',
'11-09-2023',
'',
'https://cdn.create-store.com/fr/wk/1514594/thera-retro-cafetiere-express.jpg?cf-resize=gallery');

SELECT *
FROM "Products"