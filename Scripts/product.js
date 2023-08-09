
    // Add the different elements in js.
    const imageBox = document.querySelector('.image-box');
    const image1 = document.querySelector('.image1');
    const image2 = document.querySelector('.image2');
    const image3 = document.querySelector('.image3');
    const image4 = document.querySelector('.image4');
    const image5 = document.querySelector('.image5');
    const image6 = document.querySelector('.image6');
    const image7 = document.querySelector('.image7');
    const image8 = document.querySelector('.image8');
    const productName = document.querySelector('.product-name');
    const productDescription = document.querySelector('.product-description');

    // Create a table for images informations.
    const imagesInformations = [
        {
            name: 'image1',
            description: 'Sin autem ad adulescentiam perduxissent, dirimi tamen interdum contentione vel uxoriae condicionis vel commodi alicuius, quod idem adipisci uterque non posset. Quod si qui longius in amicitia provecti essent, tamen saepe labefactari, si in honoris contentionem incidissent; pestem enim nullam maiorem esse amicitiis quam in plerisque pecuniae cupiditatem, in optimis quibusque honoris certamen et gloriae; ex quo inimicitias maximas saepe inter amicissimos exstitisse.'
        },
        {
            name: 'image2',
            description: 'Raptim igitur properantes ut motus sui rumores celeritate nimia praevenirent, vigore corporum ac levitate confisi per flexuosas semitas ad summitates collium tardius evadebant. et cum superatis difficultatibus arduis ad supercilia venissent fluvii Melanis alti et verticosi, qui pro muro tuetur accolas circumfusus, augente nocte adulta terrorem quievere paulisper lucem opperientes. arbitrabantur enim nullo inpediente transgressi inopino adcursu adposita quaeque vastare, sed in cassum labores pertulere gravissimos.'
        },
        {
            name: 'image3',
            description: 'Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.'
        },
        {
            name: 'image4',
            description: 'Denique Antiochensis ordinis vertices sub uno elogio iussit occidi ideo efferatus, quod ei celebrari vilitatem intempestivam urgenti, cum inpenderet inopia, gravius rationabili responderunt; et perissent ad unum ni comes orientis tunc Honoratus fixa constantia restitisset.'
        },
        {
            name: 'image5',
            description: 'Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.'
        },
        {
            name: 'image6',
            description: 'Huic Arabia est conserta, ex alio latere Nabataeis contigua; opima varietate conmerciorum castrisque oppleta validis et castellis, quae ad repellendos gentium vicinarum excursus sollicitudo pervigil veterum per oportunos saltus erexit et cautos. haec quoque civitates habet inter oppida quaedam ingentes Bostram et Gerasam atque Philadelphiam murorum firmitate cautissimas. hanc provinciae inposito nomine rectoreque adtributo obtemperare legibus nostris Traianus conpulit imperator incolarum tumore saepe contunso cum glorioso marte Mediam urgeret et Parthos.'
        },
        {
            name: 'image7',
            description: 'Et eodem impetu Domitianum praecipitem per scalas itidem funibus constrinxerunt, eosque coniunctos per ampla spatia civitatis acri raptavere discursu. iamque artuum et membrorum divulsa conpage superscandentes corpora mortuorum ad ultimam truncata deformitatem velut exsaturati mox abiecerunt in flumen.'
        },
        {
            name: 'image8',
            description: 'Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit, quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum; nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.'
        }
    ]

    // Create the event to select the picture and change the product informations.
    // Replace the selected image with the new one.
    // Replace the old datas in the menu with the selected image's datas.
    function change() {

        // event.target is the element clicked.
        const image = event.target;

        // Dataset add in js the data stored in the data-* attribute.
        // Don't forget to change the type as dataset give a string.
        const targetIndex = Number(image.dataset.index);
        const targetSrc = image.src;
        const newTargetIndex = Number(image1.dataset.index);
        const newTargeSrc = image1.src;
        image1.src = targetSrc;
        image1.dataset.index = targetIndex; 
        image.src = newTargeSrc;
        image.dataset.index = newTargetIndex; 

        productName.textContent = imagesInformations[targetIndex].name;
        productDescription.textContent = imagesInformations[targetIndex].description;
    }

    // Recuperate datas stored in home.js
    let storedDatas = JSON.parse(localStorage.getItem('storedDatas'));

    // If there is datas to recuperate, change the product's datas.
    if (storedDatas) {
        image1.src = storedDatas.targetSrc;
        image1.dataset.index = storedDatas.targetIndex;
        productName.textContent = imagesInformations[storedDatas.targetIndex].name;
        productDescription.textContent = imagesInformations[storedDatas.targetIndex].description;
    }

    


