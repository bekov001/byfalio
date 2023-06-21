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
  

  export const groupByTicketSizeAsks = (levels, ticketSize, value) => {
    return group(transformArray(levels.map(level => [roundToNearest((level[0]), ticketSize), (level[1])])), "asks", value);
  };

  export const groupByTicketSizeBids = (levels, ticketSize, value) => {
    return group((levels.map(level => [roundToNearest((level[0]), ticketSize), (level[1])])), "bids", value);
  };
  
  export const formatNumber = (arg) => {
    return new Intl.NumberFormat('en-US').format(arg);
  };


  const group = (data, type, value) => {
      const level = parseFloat(value);
      const countOfLevels = 10;
      data.sort((a, b) => parseFloat(a) - parseFloat(b));
      let first =  Math.floor(data[0][0] / level) * level + level
      let last = first + (countOfLevels - 1) * level
      if (type === "bids"){
         last =  Math.floor(data.at(-1)[0] / level) * level + level
         first = last - (countOfLevels) * level
      }
      
      
      const src = {
      }

      for (var i = 0; i < countOfLevels; ++i) {
        src[first + i * level] = [];
    }
    data.forEach(element => 
      {
        if (element[0] < first){
          src[first].push((element[1]))
        } else if (element[0] > last) {
          src[last].push((element[1]))
        } else {
          src[Math.floor(element[0] / level) * level].push(element[1])
        }
      });
      



    let newData = [];

    for (const [key, value] of Object.entries(src)) {
      newData.push([key, value.reduce(function(a, b){
        return a + b;
      }, 0.1)])
    }
      return newData;
  }


  // export const BACKEND_URL = "https://byfalio.herokuapp.com";
  export const BACKEND_URL = "http://127.0.0.1:8000";