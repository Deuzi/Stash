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

//DAILY TOTAL BUTTON FUNCTION

const totalBtns = document.querySelectorAll('.daily-total');

totalBtns.forEach((totalBtn) => {
  totalBtn.addEventListener('click', () => {
    //DAILY TOTAL BUTTON CALCULATE
    const container = totalBtn.closest('.weekdays');

    let costForTheDay = container.querySelectorAll('.cost-reduce');

    let costArray = Array.from(costForTheDay).map((cost) => {
      return parseFloat(cost.value || 0);
    });

    //Reduce all the numbers for each day

    let sum = costArray.reduce((acc, input) => {
      return acc + input;
    }, 0);

    const displayTotal = container.querySelectorAll('.what___i__spent__daily');

    displayTotal.forEach((display) => {
      display.textContent = `$ ${sum}`;
    });
  });
});

// CLEAR BUTTON

clearBtns.forEach((clearBtn) => {
  clearBtn.addEventListener('click', () => {
    const container = clearBtn.closest('.weekdays');

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

    //Removing the sums and data input when clear btn is clicked

    const inputFields = container.querySelectorAll('.cost-reduce');
    inputFields.forEach((inputField) => {
      inputField.value = '';
    });

    const itemInputFields = container.querySelectorAll('.spending');
    itemInputFields.forEach((itemInputField) => {
      itemInputField.value = '';
    });

    const displayTotal = container.querySelectorAll('.what___i__spent__daily');

    if (displayTotal.length > 0) {
      displayTotal.forEach((display) => {
        display.textContent = '';
      });
    }
  });
});

//WEEKLY TOTAL DISPLAY
