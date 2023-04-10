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
      pairedCards: [],
      gameResult: { win: false, lose: false },
      gameData: {
        hearts: 3,
      },
    };
  },
  computed: {
    showUnCoveredCards() {
      const uncoveredCards = [...this.selectedCards, ...this.pairedCards];
      // console.log("showUnCoveredCards", uncoveredCards);
      return uncoveredCards;
    },
    showCoveredCards() {
      const coveredCards = this.pokeList.filter(
        (poke) => !this.showUnCoveredCards.includes(poke)
      );
      //console.log("showCoveredCards", coveredCards);
      if (coveredCards.length === 0) {
        this.gameResult = {
          ...this.gameResult,
          win: true,
        };
      }
      return coveredCards;
    },
  },
  watch: {
    "gameData.hearts": function (newValue, oldValue) {
      // console.log("watch", newValue, oldValue);
      if (newValue <= 0) {
        this.gameResult = {
          ...this.gameResult,
          lose: true,
        };
      }
    },
  },
  methods: {
    handleClickCard(card) {
      this.selectedCards.push(card);
      if (this.selectedCards.length === 2) {
        const [card1, card2] = this.selectedCards;
        if (card1.id === card2.id) {
          this.pairedCards.push(card1);
          this.pairedCards.push(card2);
        } else {
          this.gameData = {
            hearts: this.gameData.hearts - 1,
          };
        }

        setTimeout(() => {
          this.selectedCards = [];
        }, 700);
      }
    },
    handleResetGame() {
      this.pokeList = this.cards.sort(() => Math.random() - 0.5);
      this.selectedCards = [];
      this.pairedCards = [];
      this.gameResult = {
        win: false,
        lose: false,
      };
      this.gameData = {
        hearts: 3,
      };
    },
  },
}).mount("#app");
