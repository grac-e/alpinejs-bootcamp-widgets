// function transportFee(shift) {
// if (shift == 'morning') {
//     return 'R20';
// } else if (shift == 'afternoon') {
//     return 'R10';
// } else if (shift == 'nightshift') {
//     return 'free';
// }
// }

function totalFees() {
    return {
        selectShift: '',
        message: '',
        transportFee(shift) {
            if (shift == 'morning') {
                return 'R20';
            } else if (shift == 'afternoon') {
                return 'R10';
            } else if (shift == 'nightshift') {
                return 'Free';
            } else {
                return 'Please select a shift';
            }
        },
        calculateFee() {
            this.message = this.transportFee(this.selectShift);
        }
    }
}