// function greet(neighbourName) {
//     if (neighbourName == "") {
//         return "please enter name"
//     }
//     return 'Hello, ' + neighbourName;
// }

// console.log(greet('Janine'))

function greetingNeighbour() {
    return {
        neighbourName: '',
        message: '',
        preferredLanguage: 'en',
        greetings: {
            en: 'Hello',
            iz: 'Sanibonani'
        },
        greet(neighbourName, language) {
            if (neighbourName == "") {
                return "Please enter name";
            }
            return this.greetings[language] + ', ' + neighbourName;        
        },
        greetNeighbour() {
            this.message = this.greet(this.neighbourName, this.preferredLanguage);
            setTimeout(() => {
                this.message = '';
            }, 5000);
        }
    }
}