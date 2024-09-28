
const itemsBought = document.querySelector('.spending');
const costOfGoods = document.querySelector('.cost-reduce');

const addElement = document.querySelector('.add-items');
const dailyTotal = document.querySelectorAll('.daily-total');

const totalSpentDaily = document.querySelectorAll('.what___i__spent__daily');

// const costHolder = document.querySelector('.cost');
// const itemHolder = document.querySelector('.items');

const genItemContainer = document.querySelector('.weekdays-container')


addElement.addEventListener  ('click', function(){
    const itemAddition = document.createElement('div');

    
    const insideOfItemAddition = document.createElement ('p');
    insideOfItemAddition.innerText = 'item bought';
    
    const spending = document.createElement('input');
    spending.type = 'text';
    spending.className = 'spending';
    
    itemAddition.appendChild(insideOfItemAddition);
    itemAddition.appendChild(spending);
    
    genItemContainer.appendChild(itemAddition);
    
    // Cost textarea

    const costAddition = document.createElement('div');
    
    const insideOfCost = document.createElement ('p');
    insideOfCost.innerText = 'cost';
    
    const costReduce = document.createElement('input');
    costReduce.type = 'text';
    costReduce.className = 'cost-reduce';

    costAddition.appendChild(insideOfCost);
    costAddition.appendChild(costReduce);

    genItemContainer.appendChild(costAddition);



});


