import Verb from "./verb";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const verbs = shuffle([
    new Verb("SER", {
        present: ["soy", "eres", "es", "somos", "sois", "son"]
    }),
    new Verb("HACER", {
        present: ["hago", "haces", "hace", "hacemos", "haceis", "hacen"]
    }),
    new Verb("DECIR", {
        present: ["digo", "dices", "dice", "decimos", "decis", "dicen"]
    }),
    new Verb("ESTAR", {
        present: ["estoy", "estas", "esta", "estamos", "estais", "estan"]
    }),
    new Verb("IR", {
        present: ["voy", "vas", "va", "vamos", "vais", "van"]
    }),
    new Verb("CONOCER", {
        present: ["conozco", "conoces", "conoce", "conocemos", "conoceis", "conocen"]
    }),
    new Verb("TENER", {
        present: ["tengo", "tienes", "tiene", "tenemos", "teneis", "tienen"]
    }),
    new Verb("VENIR", {
        present: ["vengo", "vienes", "viene", "venemos", "venis", "vienen"]
    }),
    new Verb("SALIR", {
        present: ["salgo", "sales", "sale", "salemos", "salis", "salen"]
    }),
    new Verb("PENSAR", {
        present: ["pienso", "piensas", "piensa", "pensamos", "pensais", "piensan"]
    }),
    new Verb("PEDIR", {
        present: ["pido", "pides", "pide", "pedimos", "pedis", "piden"]
    }),
    new Verb("PONER", {
        present: ["pongo", "pones", "pone", "ponemos", "poneis", "ponen"]
    }),
    new Verb("VER", {
        present: ["veo", "ves", "ve", "vemos", "veis", "ven"]
    }),
    new Verb("DAR", {
        present: ["doy", "das", "da", "damos", "dais", "dan"]
    }),
    new Verb("OIR", {
        present: ["oigo", "oyes", "oye", "oimos", "ois", "oyen"]
    }),
    new Verb("SABER", {
        present: ["se", "sabes", "sabe", "sabemos", "sabeis", "saben"]
    }),
]);

let index = 0;

export function hint() {
    verbs[index].displayAnswers();
}

export function init() {
    index = 0;
    verbs[index].display();
}

export function check() {
    if (verbs[index].check()) {
        index++;
        verbs[index].display();
    }
}