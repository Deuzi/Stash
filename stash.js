
const itemsBought = document.querySelector('.spending');
const costOfGoods = document.querySelector('.cost-reduce');

const addElement = document.querySelector('.add-items');
const dailyTotal = document.querySelectorAll('.daily-total');

const totalSpentDaily = document.querySelectorAll('.what___i__spent__daily');

const costHolder = document.querySelector('.cost');
const itemHolder = document.querySelector('.items');


addElement.addEventListener  ('click', function(){

    const innerItems = document.createElement('p');
    innerItems.innerText = 'item bought';

    const innerItemInput = document.createElement('input');
    innerItemInput.className = 'spending';

    
    //   
    const innerCost = document.createElement('div');
    innerCost.innerText = 'cost';
    
    const innerCostInput = document.createElement('input');
    innerCostInput.className = 'cost-reduce';

    itemHolder.appendChild(innerItems);
    itemHolder.appendChild (innerItemInput);
    
    
    costHolder.appendChild(innerCost);
    costHolder.appendChild (innerCostInput);
    
})


