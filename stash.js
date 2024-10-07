const itemAddBtns = document.querySelectorAll('.add-items');

const clearBtns = document.querySelectorAll('.clear__all');

//ADD MORE BUTTON FUNCTION

itemAddBtns.forEach((itemAddBtn) => {
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
    eachDayCosts.className = 'cost';

    const costHeading = document.createElement('p');
    costHeading.innerText = 'Cost';

    const expensesInput = document.createElement('input');
    expensesInput.className = 'cost-reduce';
    expensesInput.type = 'text';

    eachDayCosts.appendChild(costHeading);
    eachDayCosts.appendChild(expensesInput);

    eachDayContainer.insertBefore(eachDayCosts, itemAddBtn);
  });
});

// CLEAR BUTTON

clearBtns.forEach((clearBtn) => {
  clearBtn.addEventListener('click', () => {
    const container = clearBtn.closest('.weekdays-container');

    let itemsHolder = container.querySelectorAll('.items');
    let costHolder = container.querySelectorAll('.cost');

    // if (itemsHolder.length > 1) {
    //   while (itemsHolder.length > 1) {
    //     itemsHolder[itemsHolder.length - 1].remove();

    //     itemsHolder = container.querySelectorAll('.items');
    //   }
    // }

    // if (costHolder.length > 1) {
    //   while (costHolder.length > 1) {
    //     costHolder[costHolder.length - 1].remove();

    //     costHolder = container.querySelectorAll('.cost');
    //   }
    // }
    //BETTER & SHORTER WAY THAN THE FIRST I TRIED

    if (itemsHolder.length > 1 && costHolder.length > 1) {
      while (itemsHolder.length > 1 && costHolder.length > 1) {
        itemsHolder[itemsHolder.length - 1].remove();
        itemsHolder = container.querySelectorAll('.items');

        costHolder[itemsHolder.length - 1].remove();
        costHolder = container.querySelectorAll('.cost');
      }
    }
  });
});
