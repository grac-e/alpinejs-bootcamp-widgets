function wordCrush() {
    return {
        sentence: '',
        theLongestWord: '',
        theShortestWord: '',
        thewordLength: '',
        longestWord(sentence) {
            const words = sentence.split(' ');
            let longest = '';
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > longest.length) {
                    longest = words[i];
                } else if (words[i].length === longest.length) {
                    if (longest !== words[i]) {
                        longest = words[i];
                    }
                }
            }
            return longest;
        },
        shortestWord(sentence) {
            const words = sentence.split(' ');
            let shortest = words[0];
            let shortestLength = shortest.length;
            for (let i = 1; i < words.length; i++) {
                if (words[i].length < shortestLength) {
                    shortest = words[i];
                    shortestLength = words[i].length;
                } else if (words[i].length === shortestLength) {
                    if (shortest !== words[i]) {
                        shortest = words[i];
                    }
                }
            }
            return shortest;
        },
        wordLengths(sentence) {
            const words = sentence.split(' ');
            let sum = 0;
            for (let i = 0; i < words.length; i++) {
                sum += words[i].length;
            }
            return sum;
        },
        wordGame() {
            this.theLongestWord = this.longestWord(this.sentence);
            this.theShortestWord = this.shortestWord(this.sentence);
            this.thewordLength = this.wordLengths(this.sentence);
            setTimeout(() => {
                this.theLongestWord = '';
                this.theShortestWord = '';
                this.thewordLength = '';
            }, 5000);
        }
    }
}

// function longestWord(sentence) {
//     const words = sentence.split(' ');
//     let longest = '';
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longest.length) {
//         longest = words[i];
//       } else if (words[i].length === longest.length) {
//         if (longest !== words[i]) {
//           longest = words[i];
//         }
//       }
//     }
//     return longest;
//   }
//   console.log(longestWord('The dog jumped over the shipyard fence'));
  
//   //shortest Word//
//   function shortestWord(sentence) {
//     const words = sentence.split(' ');
//     let shortest = words[0];
//     let shortestLength = shortest.length;
//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length < shortestLength) {
//         shortest = words[i];
//         shortestLength = words[i].length;
//       } else if (words[i].length === shortestLength) {
//         if (shortest !== words[i]) {
//           shortest = words[i];
//         }
//       }
//     }
//     return shortest;
//   }
//   console.log(shortestWord('The dog jumped over the shipyard fence'));
  
//   // length//
//   function wordLengths(sentence) {
//     const words = sentence.split(' ');
//     let sum = 0;
//     for (let i = 0; i < words.length; i++) {
//       sum += words[i].length;
//     }
//     return sum;
//   }
//   console.log(wordLengths('The dog jumped over the shipyard fence'));