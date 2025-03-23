/*Vytvořte funkci pro výběr předplatného.
Vytvořte si repozitář ze šablony cviceni-cenik se stránkou, která nabízí předplatné za nějaké služby. Může jít například o internetovou televizi, 
pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte do stránky soubor s JavaScriptem.

Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element 
a přidá k němu CSS třídu plan--selected.

Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak,
 že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), ale na stránce by měl zůstat poslední vybraný plán.
*/


/*
Pokud jde o kód, který posíláš, tak tam chybu vidím - do metody classList.add už posíláš jen název třídy v uvozovkách, tedy 'plan--selected', tečka už se nepřidává.

Naopak do querySelector musíš tečku nebo # dát, podle toho, jestli se v html jedná o třídu, nebo id.
*/

const selectPlan =  (planNumber) => {
    // vybírá jednotlivé plány
    const elNumber1 =  document.querySelector ('#plan1');
    const elNumber2 =  document.querySelector ('#plan2');
    const elNumber3 =  document.querySelector ('#plan3');
    
    // odebírá plan--selected u nevybraných plánů 2 a 3, asi by u elNumber1 mohlo být i toggle (fungovalo mi to i s add i s toggle)
    if (planNumber ===1) {
        elNumber1.classList.add ('plan--selected');
        elNumber2.classList.remove ('plan--selected');
        elNumber3.classList.remove ('plan--selected');
    } else if (planNumber ===2){
    // přidává plan--selected u plánu2 a odebírá u plánů 1 a 3
        elNumber1.classList.remove ('plan--selected');
        elNumber2.classList.add ('plan--selected');
        elNumber3.classList.remove ('plan--selected');
    }
    // přidává plan--selected u plán3 a odebírá u plánů 1 a 2
    else if (planNumber===3){
        elNumber1.classList.remove ('plan--selected');
        elNumber2.classList.remove ('plan--selected');
        elNumber3.classList.add ('plan--selected');
    };
};

// a možná to i funguje
selectPlan (3);
selectPlan (2);
selectPlan (1);


