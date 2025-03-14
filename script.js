// Function to retrieve unique bean types
const getUniqueBeanTypes = () => {
    const uniqueBeanTypes = [...new Set(counters.map(counter => counter.bean))];
    return uniqueBeanTypes;
  };
  
  // Function to sort counters by names
  const sortCountersByName = () => {
    const sortedCounters = counters.slice().sort((a, b) => a.name.localeCompare(b.name));
    return sortedCounters;
  };
  
  // Function to filter counters by bean type
  const filterCountersByBeanType = (beanType) => {
    const filteredCounters = counters.filter(counter => counter.bean === beanType);
    return filteredCounters;
  };
  
  // Function to calculate total number of beans
  const getTotalBeansCount = () => {
    const totalBeans = counters.reduce((acc, counter) => acc + counter.count, 0);
    return totalBeans;
  };
  
  // Function create ordered list for each bean type
  const createBeanLists = () => {
    const uniqueBeanTypes = getUniqueBeanTypes();
    
    uniqueBeanTypes.forEach(beanType => {
      const filteredCounters = filterCountersByBeanType(beanType);
      const totalBeans = filteredCounters.reduce((acc, counter) => acc + counter.count, 0);
      
      const list = document.createElement('ol');
      list.innerHTML = `<h2>${beanType} (${totalBeans})</h2>`;
      
      filteredCounters.forEach(counter => {
        const listItem = document.createElement('li');
        listItem.textContent = `${counter.name} (${counter.count})`;
        list.appendChild(listItem);
      });
      
      document.body.appendChild(list);
    });
  };
  
  // Calling the function to create bean lists
  createBeanLists();