const pokeList = [
  {
    id: 1,
    name: "bulbasaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
    },
  },
  {
    id: 2,
    name: "ivysaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      },
    },
  },
  {
    id: 3,
    name: "venusaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      },
    },
  },
  {
    id: 4,
    name: "charmander",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
    },
  },
  {
    id: 1,
    name: "bulbasaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      },
    },
  },
  {
    id: 2,
    name: "ivysaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      },
    },
  },
  {
    id: 3,
    name: "venusaur",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      },
    },
  },
  {
    id: 4,
    name: "charmander",
    images: {
      game: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
      },
      png: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      svg: {
        front:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      },
    },
  },
];

Vue.createApp({
  data() {
    return {
      pokeList: pokeList.sort(() => Math.random() - 0.5),
      selectedCards: [],
    };
  },
  computed: {
    showUnCoveredCards() {
      const uncoveredCards = [...this.selectedCards];
      // console.log("showUnCoveredCards", uncoveredCards);
      return uncoveredCards;
    },
    showCoveredCards() {
      const coveredCards = this.pokeList.filter(
        (poke) => !this.showUnCoveredCards.includes(poke)
      );
      //console.log("showCoveredCards", coveredCards);
      return coveredCards;
    },
  },
  methods: {
    handleClickCard(card) {
      this.selectedCards.push(card);
      console.log("list", this.selectedCards);
    },
  },
}).mount("#app");
