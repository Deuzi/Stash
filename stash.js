
const itemAddBtns = document.querySelectorAll('.add-items');

const clearBtns = document.querySelectorAll('.clear__all');

//ADD MORE BUTTON FUNCTION

itemAddBtns.forEach(itemAddBtn => {
    itemAddBtn.addEventListener('click', () => {

        const eachDayContainer = itemAddBtn.closest('.weekdays-container');
            
        const eachDayItems = document.createElement('div');
        eachDayItems.className = 'items';

        const newItems = document.createElement('p');
        newItems.innerText = 'item bought';

        const newInputs = document.createElement('input');
        newInputs.type = 'text';
        newInputs.className = 'spending';

        eachDayItems.appendChild(newItems);
        eachDayItems.appendChild(newInputs);

        eachDayContainer.insertBefore(eachDayItems, itemAddBtn);
        
        //--- COST SECTION ---

        const eachDayCosts = document.createElement('div');
        eachDayCosts.className = 'costs';

        const costHeading = document.createElement('p');
        costHeading.innerText = 'Cost';

        const expensesInput =  document.createElement('input');
        expensesInput.className = 'cost-reduce';
        expensesInput.type = 'text';

        eachDayCosts.appendChild(costHeading);
        eachDayCosts.appendChild(expensesInput);

        eachDayContainer.insertBefore(eachDayCosts, itemAddBtn);
        
    });
});


// CLEAR BUTTON 


clearBtns.forEach(clearBtn => {
    clearBtn.addEventListener('click', () => {
        const itemsToRemove = 2;

        let itemNcostContainer = document.querySelectorAll('.items-container');
        if(itemNcostContainer.length > 2){
           for(let i = 0; i < itemsToRemove; i++){
            if(itemNcostContainer.length > 2){
                itemNcostContainer[itemNcostContainer.length - 1].remove();

                itemNcostContainer = document.querySelectorAll('.items-container');
            };
           };
        };
    });
});






