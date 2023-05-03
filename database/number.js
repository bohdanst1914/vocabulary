
const correctIndex = (startIndex, array ) => {
  const newArray =  array.map((item, index) =>{
      return {...item, index: startIndex + index}
  })

    console.log(newArray)
}
correctIndex(772, [

    { "index": 584, "words_eng": "sour", "translate": "кислий" },
    { "index": 585, "words_eng": "ancient", "translate": "давній" },
    { "index": 586, "words_eng": "cotton", "translate": "бавовна" },
    { "index": 587, "words_eng": "fold", "translate": "складати, згортати" },
    { "index": 588, "words_eng": "improvement", "translate": "покращення" },
    { "index": 589, "words_eng": "loose", "translate": "широкий, вільний, не точний"},
    { "index": 590, "words_eng": "maintain", "translate": "підтримувати, керувати"},
    { "index": 591, "words_eng": "match", "translate": "поєднювати" },
    { "index": 592, "words_eng": "pile", "translate": "купа (чогось)" },
    { "index": 593, "words_eng": "rough", "translate": "грибий (щось), неточний"},
    { "index": 594, "words_eng": "shape", "translate": "форрма" },
    { "index": 595, "words_eng": "silk", "translate": "шофк" },
    { "index": 596, "words_eng": "sleeve", "translate": "рукав" },
    { "index": 597, "words_eng": "smooth", "translate": "гладкий" },
    { "index": 598, "words_eng": "stretch", "translate": "розтягувати" },
    { "index": 599, "words_eng": "striped", "translate": "волосатий" },
    { "index": 600, "words_eng": "suit", "translate": "костюм" },
    { "index": 601, "words_eng": "tear", "translate": "сльоза, рвати(на куски)"},
    { "index": 602, "words_eng": "tight", "translate": "тісний" },
    { "index": 603, "words_eng": "tool", "translate": "інтструмент" },
    { "index": 604, "words_eng": "cut off", "translate": "відрізати" },
    { "index": 605, "words_eng": "do up", "translate": "підняти замок (на кофті)"},
    { "index": 606, "words_eng": "fill up", "translate": "заповнити" },
    { "index": 607, "words_eng": "have on", "translate": "одягнути" },
    { "index": 608, "words_eng": "leave out", "translate": "не включати ( поза комплтом)"},
    { "index": 609, "words_eng": "put on", "translate": "почати носити" },
    { "index": 610, "words_eng": "take off", "translate": "зняти одяг" },
    { "index": 611, "words_eng": "try on", "translate": "приміряти" },
    { "index": 612, "words_eng": "artist", "translate": "художник" },
    { "index": 613, "words_eng": "unbreakable", "translate": "незламний (щось)"},
    { "index": 614, "words_eng": "compose", "translate": "складати" },
    { "index": 615, "words_eng": "composer", "translate": "композитор" },
    { "index": 616, "words_eng": "exhibit", "translate": "виставляти" },
    { "index": 617, "words_eng": "exhibition", "translate": "виставка" },
    { "index": 618, "words_eng": "freedom", "translate": "свобода" },
    { "index": 619, "words_eng": "handful", "translate": "жменя, той хто пригощає"},
    { "index": 620, "words_eng": "handle", "translate": "рукоятка, справлятись"},
    { "index": 621, "words_eng": "imaginative", "translate": "уявний" },
    { "index": 622, "words_eng": "intelligent", "translate": "розумний" },
    { "index": 623, "words_eng": "intelligence", "translate": "інтелект" },
    { "index": 624, "words_eng": "imperfect", "translate": "неідеальний" },
    { "index": 625, "words_eng": "amazed by", "translate": "вражений чимось" },
    { "index": 626, "words_eng": "familiar with", "translate": "знайомий з" },
    { "index": 627, "words_eng": "explain sth to", "translate": "пояснити щось комусь"},
    { "index": 628, "words_eng": "remind sb of", "translate": "нагадати комусь про"}
])


