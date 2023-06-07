export const addTotalSums = (orders) => {
    const totalSums = [];
  
    return orders.map((order, idx) => {
      const size= order[1];
      if (typeof order[2] !== 'undefined') {
        return order;
      } else {
        const updatedLevel = [ ...order ];
        const totalSum = idx === 0 ? size : size + totalSums[idx - 1];
        updatedLevel[2] = totalSum;
        totalSums.push(totalSum);
        return updatedLevel;
      }
    });
  };
  

export const addDepths = (orders, maxTotal) => {
    return orders.map(order => {
      if (typeof order[3] !== 'undefined') {
        return order;
      } else {
        const calculatedTotal = order[2];
        const depth = (calculatedTotal / maxTotal) * 100;
        const updatedOrder = [ ...order ];
        updatedOrder[3] = depth;
        return updatedOrder;
      }
    });
  };


export const getMaxTotalSum = (orders)  => {
    const totalSums= orders.map(order => order[2]);
    return parseFloat(Math.max.apply(Math, totalSums));
  }

export const roundToNearest = (value, interval) => {
    return Math.floor((value) / (interval)) * (interval);
  };




export const groupByPrice = (levels) => {
    return levels.map((level, idx) => {
      const nextLevel = levels[idx + 1];
      const prevLevel = levels[idx - 1];
  
      if(nextLevel && (level[0] === nextLevel[0])) {
        return [(level[0]), (level[1]) + (nextLevel[1])]
      } else if(prevLevel && (level[0] === prevLevel[0])) {
        return [];
      } else {
        return (level);
      }
    }).filter(level => level.length > 0);
  };
  
function transformArray(arr) {
    const result = [];
    const map = new Map();
  
    for (const [key, value] of arr) {
      if (!map.has(key)) {
        map.set(key, value);
      } else {
        map.set(key, map.get(key) + value);
      }
    }
  
    for (const [key, value] of map) {
      result.push([key, value]);
    }
  
    return result;
  }
  

  export const groupByTicketSize = (levels, ticketSize) => {
    return transformArray(levels.map(level => [roundToNearest((level[0]), ticketSize), (level[1])]));
  };
  
  export const formatNumber = (arg) => {
    return new Intl.NumberFormat('en-US').format(arg);
  };



  export const BACKEND_URL = "https://byfalio.herokuapp.com/";