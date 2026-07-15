// ============================================================
//  BANCO DE MEDITAÇÕES CRISTÃS
//  ===========================
//  Categorias:
//  - geral: sempre disponível (Pai-Nosso, Salmos, Santos, Evangelho)
//  - advento: durante o Advento
//  - natal: durante o Natal
//  - quaresma: durante a Quaresma
//  - semana-santa: durante a Semana Santa (opcional)
//  - pascoa: durante o Tempo Pascal
//  - comum: durante o Tempo Comum
// ============================================================

const meditacoes = [
    // =========================================================
    //  GERAL — PAI-NOSSO (7 petições)
    //  Sempre disponíveis em qualquer tempo litúrgico
    // =========================================================
    {
        titulo: "Pai-Nosso — Santificado seja o vosso nome",
        texto: "Pai nosso, que estais nos céus, santificado seja o vosso nome. Que o vosso nome seja honrado em nossa vida. Que cada palavra nossa, cada atitude, cada pensamento, seja um eco da vossa santidade.",
        referencia: "Mt 6,9",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — Venha a nós o vosso Reino",
        texto: "Venha a nós o vosso Reino. Que o vosso amor reine em nossos corações. Que a justiça e a paz floresçam onde há discórdia. Que o vosso Reino se faça presente em cada gesto de amor fraterno.",
        referencia: "Mt 6,10",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — Seja feita a vossa vontade",
        texto: "Seja feita a vossa vontade, assim na terra como no céu. Ensina-nos a confiar em vós, mesmo quando não compreendemos. Que a vossa vontade seja o nosso alimento e a nossa paz.",
        referencia: "Mt 6,10",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — O pão nosso de cada dia",
        texto: "O pão nosso de cada dia nos dai hoje. O pão que pedimos é Cristo, Palavra viva que sustenta nossa caminhada. Como Ele se fez pão para nós, que também nos tornemos pão para os irmãos.",
        referencia: "Mt 6,11",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — Perdoai as nossas ofensas",
        texto: "Perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido. O perdão que recebemos é a medida do perdão que devemos dar. Dai-nos um coração misericordioso.",
        referencia: "Mt 6,12",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — Não nos deixeis cair em tentação",
        texto: "Não nos deixeis cair em tentação. Reconhecemos nossa fragilidade. Só em vós encontramos força para vencer o mal. Guardai-nos no vosso amor e livrai-nos de todo perigo.",
        referencia: "Mt 6,13",
        categoria: "geral"
    },
    {
        titulo: "Pai-Nosso — Livrai-nos do mal",
        texto: "Livrai-nos do mal. O mal que nos rodeia, o mal que habita em nós. Libertai-nos, Senhor, e dai-nos a vossa paz. Amém.",
        referencia: "Mt 6,13",
        categoria: "geral"
    },

    // =========================================================
    //  GERAL — EVANGELHO (6 meditações)
    // =========================================================
    {
        titulo: "A Videira e os Ramos",
        texto: "Eu sou a videira verdadeira, e meu Pai é o agricultor. Permanecei em mim, e eu permanecerei em vós. Como o ramo não pode dar fruto por si mesmo, se não permanecer na videira, assim também vós, se não permanecerdes em mim.",
        referencia: "Jo 15,4-5",
        categoria: "geral"
    },
    {
        titulo: "Vinde a mim, todos vós que estais cansados",
        texto: "Vinde a mim, todos vós que estais cansados e oprimidos, e eu vos aliviarei. Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração, e encontrareis descanso para as vossas almas.",
        referencia: "Mt 11,28-29",
        categoria: "geral"
    },
    {
        titulo: "O Espírito Santo nos ensina a orar",
        texto: "O Espírito vem em auxílio da nossa fraqueza. Porque nós não sabemos orar como convém, mas o próprio Espírito intercede por nós com gemidos inexprimíveis. E aquele que sonda os corações sabe qual é a intenção do Espírito.",
        referencia: "Rm 8,26-27",
        categoria: "geral"
    },
    {
        titulo: "Bem-aventurados os pobres de espírito",
        texto: "Bem-aventurados os pobres de espírito, porque deles é o Reino dos Céus. Bem-aventurados os que choram, porque serão consolados. Bem-aventurados os mansos, porque herdarão a terra.",
        referencia: "Mt 5,3-5",
        categoria: "geral"
    },
    {
        titulo: "O grão de mostarda",
        texto: "O Reino de Deus é como um grão de mostarda que, semeado na terra, é a menor de todas as sementes. Mas, uma vez semeado, cresce e torna-se maior do que todas as hortaliças, e estende grandes ramos, de modo que as aves do céu podem abrigar-se à sua sombra.",
        referencia: "Mc 4,31-32",
        categoria: "geral"
    },
    {
        titulo: "O Bom Pastor",
        texto: "Eu sou o Bom Pastor. O Bom Pastor dá a vida por suas ovelhas. Eu conheço as minhas ovelhas, e elas me conhecem, assim como o Pai me conhece e eu conheço o Pai. E dou a minha vida pelas ovelhas.",
        referencia: "Jo 10,11.14-15",
        categoria: "geral"
    },

    // =========================================================
    //  GERAL — SALMOS (5 meditações)
    // =========================================================
    {
        titulo: "O Senhor é o meu pastor (Sl 23)",
        texto: "O Senhor é o meu pastor, nada me falta. Em verdes pastagens me faz repousar. Conduz-me junto às águas tranquilas e restaura minhas forças. Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo.",
        referencia: "Sl 23,1-4",
        categoria: "geral"
    },
    {
        titulo: "Criai em mim um coração puro (Sl 51)",
        texto: "Criai em mim um coração puro, ó Deus, e renovai em mim um espírito reto. Não me rejeiteis da vossa presença, nem retireis de mim o vosso Espírito Santo. Restaurai-me a alegria da vossa salvação e sustentai-me com um espírito generoso.",
        referencia: "Sl 51,12-14",
        categoria: "geral"
    },
    {
        titulo: "Senhor, vós me sondais e me conheceis (Sl 139)",
        texto: "Senhor, vós me sondais e me conheceis. Conheceis o meu sentar e o meu levantar; de longe penetrais os meus pensamentos. Para onde irei, longe do vosso espírito? Para onde fugirei, longe da vossa face?",
        referencia: "Sl 139,1-2.7",
        categoria: "geral"
    },
    {
        titulo: "Sede para mim uma rocha de refúgio (Sl 31)",
        texto: "Em vós, Senhor, me refugio; não seja eu jamais envergonhado. Sede para mim uma rocha de refúgio, uma fortaleza que me salve. Vós sois a minha rocha e a minha fortaleza; por amor do vosso nome, guiai-me e conduzi-me.",
        referencia: "Sl 31,2-4",
        categoria: "geral"
    },
    {
        titulo: "Alegrai-vos no Senhor (Sl 100)",
        texto: "Aclamai o Senhor, todas as gentes, servi ao Senhor com alegria, apresentai-vos a ele com cânticos. Sabei que o Senhor é Deus; foi ele que nos fez, e nós somos seus. Entrai por suas portas com ações de graças, e em seus átrios com cânticos de louvor.",
        referencia: "Sl 100,1-4",
        categoria: "geral"
    },

    // =========================================================
    //  GERAL — SANTOS (5 meditações)
    // =========================================================
    {
        titulo: "Santo Agostinho — Tarde Vos amei",
        texto: "Tarde Vos amei, ó Beleza tão antiga e tão nova! Tarde Vos amei! Vós estáveis dentro de mim, e eu andava fora de mim, procurando-Vos nas criaturas belas. Vós me chamastes, e eu ouvi a vossa voz; acendestes a minha fé, e eu queimei de amor por Vós.",
        referencia: "Santo Agostinho, Confissões",
        categoria: "geral"
    },
    {
        titulo: "Santa Teresa de Ávila — Nada te perturbe",
        texto: "Nada te perturbe, nada te espante; tudo passa, Deus não muda; a paciência tudo alcança. Quem a Deus tem, nada lhe falta: só Deus basta. Firmai-vos na fé e na esperança, porque Deus é fiel.",
        referencia: "Santa Teresa de Ávila, Poesia",
        categoria: "geral"
    },
    {
        titulo: "São Francisco de Assis — O amor não é amado",
        texto: "O amor não é amado, ó Senhor! Queremos ser instrumentos da vossa paz. Onde houver ódio, que levemos o amor; onde houver ofensa, que levemos o perdão; onde houver dúvida, que levemos a fé.",
        referencia: "São Francisco de Assis, Oração da Paz",
        categoria: "geral"
    },
    {
        titulo: "São João da Cruz — Na noite escura da alma",
        texto: "Se queres chegar à união com Deus, deves entrar na noite escura da fé, onde a alma se sente abandonada. Mas não temas: é Deus quem te purifica e te prepara para a união mais íntima com Ele.",
        referencia: "São João da Cruz, Noite Escura",
        categoria: "geral"
    },
    {
        titulo: "Santa Teresinha — A pequena via",
        texto: "Não quero ser santa pela metade. Quero dar-me toda a Jesus. Ele não precisa de grandes obras, mas de abandono e gratidão. A pequena via é o caminho da infância espiritual: confiar como uma criança nos braços do Pai.",
        referencia: "Santa Teresinha, História de uma Alma",
        categoria: "geral"
    },

    // =========================================================
    //  ADVENTO (3 meditações)
    //  Disponíveis apenas no Advento
    // =========================================================
    {
        titulo: "Advento — Vigiai e orai",
        texto: "Eis que faço novas todas as coisas. O Advento nos chama a preparar o coração para a vinda do Senhor. Vigiai e orai, pois não sabeis o dia nem a hora. Abri as portas do vosso coração: o Rei está para chegar.",
        referencia: "Ap 21,5; Mt 25,13",
        categoria: "advento"
    },
    {
        titulo: "Advento — A voz que clama no deserto",
        texto: "Voz do que clama no deserto: Preparai o caminho do Senhor, endireitai as suas veredas. Todo vale será aterrado, e todo monte e outeiro serão nivelados. O Senhor vem! Preparai o vosso coração para recebê-Lo.",
        referencia: "Lc 3,4-5",
        categoria: "advento"
    },
    {
        titulo: "Advento — Maria, a espera silenciosa",
        texto: "Maria guardava todas estas coisas, meditando-as em seu coração. A espera de Maria é o modelo da nossa espera: silenciosa, confiante, cheia de fé. Que o Senhor nos encontre vigilantes como Ela.",
        referencia: "Lc 2,19",
        categoria: "advento"
    },

    // =========================================================
    //  NATAL (3 meditações)
    //  Disponíveis no Natal e na Epifania
    // =========================================================
    {
        titulo: "Natal — Deus se fez carne",
        texto: "Alegrai-vos sempre no Senhor. O Natal é a festa da esperança. Deus se fez carne e habitou entre nós. A alegria do Senhor é a nossa força. Contemplai o Menino Jesus: Ele é o Emanuel, Deus conosco.",
        referencia: "Fl 4,4; Jo 1,14",
        categoria: "natal"
    },
    {
        titulo: "Natal — A paz na manjedoura",
        texto: "Glória a Deus nas alturas, e paz na terra aos homens de boa vontade. A paz que o mundo não pode dar nasce numa manjedoura. O Rei dos reis se faz pequeno para que possamos acolhê-Lo sem medo.",
        referencia: "Lc 2,14",
        categoria: "natal"
    },
    {
        titulo: "Epifania — A estrela e os Reis Magos",
        texto: "Vimos a sua estrela no Oriente e viemos adorá-Lo. Os magos seguiram a estrela até encontrar o Menino. Também nós somos chamados a seguir a luz de Cristo, que brilha nas trevas e nos conduz à salvação.",
        referencia: "Mt 2,2",
        categoria: "natal"
    },

    // =========================================================
    //  QUARESMA (4 meditações)
    //  Disponíveis na Quaresma
    // =========================================================
    {
        titulo: "Quaresma — Convertei-vos",
        texto: "Convertei-vos e crede no Evangelho. A Quaresma é tempo de conversão. Deixai que Deus vos transforme pelo deserto do silêncio e da oração. A esmola, a oração e o jejum são armas contra o mal.",
        referencia: "Mc 1,15",
        categoria: "quaresma"
    },
    {
        titulo: "Quaresma — As tentações no deserto",
        texto: "Jesus foi levado pelo Espírito ao deserto para ser tentado pelo diabo. O deserto é lugar de prova, mas também de encontro com Deus. Não deis ouvidos às tentações; alimentai-vos da Palavra que vem da boca de Deus.",
        referencia: "Mt 4,1-4",
        categoria: "quaresma"
    },
    {
        titulo: "Quaresma — A samaritana e a sede de Deus",
        texto: "Quem beber da água que eu lhe der nunca mais terá sede. A samaritana encontrou Jesus no poço. Também nós temos sede de Deus. Só Ele pode saciar a nossa fome de amor e de verdade.",
        referencia: "Jo 4,14",
        categoria: "quaresma"
    },
    {
        titulo: "Quaresma — O filho pródigo",
        texto: "Levantar-me-ei e irei a meu pai, e dir-lhe-ei: Pai, pequei contra o céu e contra ti. O Pai nos espera sempre de braços abertos. A Quaresma é tempo de voltar para casa, para o coração do Pai.",
        referencia: "Lc 15,18",
        categoria: "quaresma"
    },

    // =========================================================
    //  SEMANA SANTA (2 meditações)
    //  Disponíveis na Semana Santa (opcional)
    // =========================================================
    {
        titulo: "Semana Santa — O silêncio do Sepulcro",
        texto: "O silêncio do Sábado Santo é o silêncio da espera. O Senhor está no sepulcro, mas o túmulo não terá a última palavra. A paz que vem do silêncio prepara o coração para a alegria da ressurreição.",
        referencia: "Tradição da Igreja",
        categoria: "semana-santa"
    },
    {
        titulo: "Semana Santa — O lava-pés",
        texto: "Se eu, Senhor e Mestre, vos lavei os pés, vós também deveis lavar os pés uns dos outros. O serviço humilde é o caminho do Reino. A grandeza de Deus se revela no gesto de servir.",
        referencia: "Jo 13,14",
        categoria: "semana-santa"
    },

    // =========================================================
    //  PÁSCOA (3 meditações)
    //  Disponíveis no Tempo Pascal
    // =========================================================
    {
        titulo: "Páscoa — Cristo ressuscitou!",
        texto: "Cristo ressuscitou! Aleluia! A Páscoa é a vitória da vida sobre a morte. O túmulo está vazio. Tudo se renova na luz da ressurreição. Vivei como ressuscitados: a vida nova já começou.",
        referencia: "Tradição da Igreja",
        categoria: "pascoa"
    },
    {
        titulo: "Páscoa — O caminho de Emaús",
        texto: "Não ardia o nosso coração quando Ele nos falava pelo caminho? O Ressuscitado caminha conosco, mesmo quando não O reconhecemos. Abri os olhos da fé: Ele está presente em cada passo da nossa vida.",
        referencia: "Lc 24,32",
        categoria: "pascoa"
    },
    {
        titulo: "Pentecostes — O Espírito Santo desce",
        texto: "Vinde, Espírito Santo! Enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. O Espírito renova a face da terra e nos dá a ousadia de anunciar o Evangelho a todas as nações.",
        referencia: "At 2,1-4",
        categoria: "pascoa"
    },

    // =========================================================
    //  TEMPO COMUM (3 meditações)
    //  Disponíveis apenas no Tempo Comum
    // =========================================================
    {
        titulo: "O Amor é paciente, o Amor é bondoso",
        texto: "O amor é paciente, o amor é bondoso. Não inveja, não se gloria, não se ensoberbece. Tudo desculpa, tudo crê, tudo espera, tudo suporta. O amor jamais passa. Permanecei no amor, que é o dom mais perfeito.",
        referencia: "1Cor 13,4-8",
        categoria: "comum"
    },
    {
        titulo: "A fé é o fundamento da esperança",
        texto: "A fé é o fundamento da esperança e a prova das realidades que não se veem. Sem fé é impossível agradar a Deus, pois quem se aproxima dele deve crer que ele existe e que recompensa os que o buscam.",
        referencia: "Hb 11,1.6",
        categoria: "comum"
    },
    {
        titulo: "Agradecei em todas as circunstâncias",
        texto: "Agradecei em todas as circunstâncias, porque esta é a vontade de Deus em Cristo Jesus para convosco. Tudo é dom, tudo é graça. A gratidão abre o coração para a alegria verdadeira.",
        referencia: "1Ts 5,18",
        categoria: "comum"
    }
];

// ============================================================
//  FUNÇÃO PARA BUSCAR UMA MEDITAÇÃO ALEATÓRIA
// ============================================================
let ultimaMeditacao = -1;

function getRandomMeditacao() {
    let index;
    do {
        index = Math.floor(Math.random() * meditacoes.length);
    } while (index === ultimaMeditacao && meditacoes.length > 1);
    ultimaMeditacao = index;
    return meditacoes[index];
}
