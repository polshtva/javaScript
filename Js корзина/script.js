// let table = document.getElementById('goods');
let table = document.querySelector('#goods');
let titles = table.querySelectorAll('thead tr > th, thead tr > td');
Array.from(titles).forEach(function(el){
  el.addEventListener('click', function(e){
    let el = e.currentTarget;
    let index = el.cellIndex;
    let isNumeric = el.classList.contains('int');
    let isReverse = false;
    // let elCL = el.classList;
    // if(elCL.contains('sorted') && !elCL.contains('reverse')) isReverse=true;
    if(el.matches('.sorted') && !el.matches('.reverse')) isReverse=true;
    // let body = table.tBodies[0];
    let body = el.closest('thead').nextElementSibling;
    let rows = body.rows;
    let rowsSorted = Array.from(rows).sort(function(a, b){
      let cellA = a.cells[index].innerText;
      let cellB = b.cells[index].innerText;
      if(isNumeric){
        cellA*=1;
        cellB*=1;
      }
      if(cellA == cellB) return 0;
      let res = (cellA < cellB) ? -1 : 1;
      if(isReverse){
        res *= -1;
      }
      return res;
      // console.log(cellA, cellB)
    });

    console.log(index, rows, rowsSorted, isNumeric);
    body.append(...rowsSorted);
    let titles = el.closest('thead').rows[0].cells;
    for(let hl of titles){
      hl.classList.remove('sorted');
      hl.classList.remove('reverse');
    }
    el.classList.add('sorted');
    if(isReverse){
      el.classList.add('reverse');
    }
    // console.log(this,e.target,e.currentTarget);
  });
});
console.log(table, titles)

// let arCounter = document.querySelectorAll('.counter');
// for(let elCounterRoot of arCounter){
//   let clickHandler = (e) => {
//     // console.log(e.target);
//     // n = (e.target.classList.contains('minus')) ? -1 : 1;
//     let data= e.target.dataset;
//     let n = e.target.dataset.n;
//     counter_pus(n);
//   }
//     let elInput = elCounterRoot.querySelector('input');
//     let elTrigger = elCounterRoot.querySelectorAll('.counter__plus');
//     elTrigger.forEach(el => el.addEventListener('click', clickHandler));
//     let counter_pus = (n) => {
//   // n == 1 ? elInput.value++ : elInput.value--;
//   let value = +(elInput.value);
//   value += +n;
//   let {min, max} = elInput;
//   if(min.length > 0 && value < +min) return;
//   if(max.length > 0 && value > +max) return;
//   console.log(`min - ${min}; max - ${max}`); //деконструктор
//   elInput.value = value;
//   console.log(n, value);
// }
// }
// let elCounterRoot = document.querySelector('.counter');



// let elCounterRoot = document.querySelector('.counter')
// // let elInput = elCounterRoot.querySelector('input');

// let elTrigger = document.querySelectorAll('.counter .counter__plus');
// let clickHandler = (e) => {
//     let el = e.target
//     let elRoot = el.closest('.counter');
//     let elInput = elRoot.querySelector('input');
//     // console.log(e.target);
//     // n = (e.target.classList.contains('minus')) ? -1 : 1;
//     let data= el.dataset;
//     let n = el.dataset.n;
//     counter_pus(n, elInput);
// }
// // elTrigger.forEach(el => el.addEventListener('click', clickHandler));
// function counter_pus(n,elInput){
//   // n == 1 ? elInput.value++ : elInput.value--;
//   let value = +(elInput.value);
//   value += +n;
//   let {min, max} = elInput;
//   if(min.length > 0 && value < +min) return;
//   if(max.length > 0 && value > +max) return;
//   console.log(`min - ${min}; max - ${max}`); //деконструктор
//   elInput.value = value;
//   console.log(n, value);
// } 
function DfCounter(subject){
  // let that = this;
 
  if(typeof subject == 'string'){
    let roots = document.querySelectorAll(subject);
    if(roots.length > 0){
      return Array.from(roots).map(el => new DfCounter(el))
    }
    console.log('css');
  }
     this.clickHandler = (e) => {
      let el = e.target
      let n = el.dataset.n;
      this.counter_pus(n);
  }
  if(subject instanceof HTMLElement){
      this.root = subject;
      this.elInput = this.root.querySelector('input');
      this.elTrigger = this.root.querySelectorAll('.counter__plus');
      // console.log(this.elTrigger);
      this.elTrigger.forEach(el => el.addEventListener('click', this.clickHandler));
  }
  this.counter_pus = (n) => {
    let value = +(this.elInput.value);
    value += +n;
    let {min, max} = this.elInput;
    if(min.length > 0 && value < +min) return;
    if(max.length > 0 && value > +max) return;
    console.log(`min - ${min}; max - ${max}`); //деконструктор
    this.elInput.value = value;
    console.log(n, value);
  } 
}

let cnt = new DfCounter('.counter');
console.log(cnt)


// function DfCounter(subject){  <= код Тимофея
//   let that = this;
//   if(typeof subject == "string"){
//     let roots = document.querySelectorAll(subject);
//     if(roots.length > 0){
//       return Array.from(roots).map(el => new DfCounter(el))
//     }
//     console.log('css');
//     // return [1,2,3];
//   }
//   this.clickHandler = (e)=>{
//     // console.log(e,this);
//     let el = e.target;
//     let n = el.dataset.n;
//     this.counter_plus(n);
//   }
//   if(subject instanceof HTMLElement){
//     this.root = subject;
//     this.elInput = this.root.querySelector('input');
//     this.elTriggers = this.root.querySelectorAll('.counter_plus');
//     // console.log(this.elTriggers)
//     this.elTriggers.forEach(el => el.addEventListener('click',this.clickHandler));
//   }
//   this.counter_plus = (n)=>{
//       let value = Number(this.elInput.value); // n*1 // Number(n) // +n
//       value += +n;
//       let { min, max } = this.elInput;
//       if (min.length > 0 && value < +min) return;
//       if (max.length > 0 && value > +max) return;
//       this.elInput.value = value;
//   }
//   // console.log(subject)
// }
// let cnt = new DfCounter('.counter');
// console.log(cnt)