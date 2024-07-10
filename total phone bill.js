// function totalPhoneBill(data) {
//     var calls = 0;
//     var sms = 0;
  
//     var items = data.split(', ');
    
//   for (var i = 0; i < items.length; i++) {
//     if (items[i] === 'call') {
//       calls++;
//     } else if (items[i] === 'sms') {
//               sms++;
//     }
//   }
    
//    var total = (calls * 2.75) + (sms * 0.65);
//     return 'R' + total.toFixed(2); 
//   }
  
//   console.log(totalPhoneBill('call, sms, call, sms, sms'));

function phoneBill() {
    return {
        phoneData: '',
        bill: '',
        totalPhoneBill(data) {
            var calls = 0;
            var sms = 0;

            var items = data.split(', ');

            for (var i = 0; i < items.length; i++) {
                if (items[i] === 'call') {
                    calls++;
                } else if (items[i] === 'sms') {
                    sms++;
                }
            }

            var total = (calls * 2.75) + (sms * 0.65);
            return 'R' + total.toFixed(2);
        },
        calculateBill() {
            this.bill = this.totalPhoneBill(this.phoneData);
            setTimeout(() => {
                this.bill = '';
            }, 5000);
        }
    }
}