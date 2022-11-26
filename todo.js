const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter((item)=> item.dueDate < new Date().toLocaleDateString("en-CA"));
    }
  
    const dueToday = () => {
      return all.filter((item)=> item.dueDate === new Date().toLocaleDateString("en-CA"));
    }
  
    const dueLater = () => {
      
      return all.filter((item)=> item.dueDate > new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList = (list) => {
        let doList = []
        list.forEach((data) => {
            if (data.completed === false) {
                if (data.dueDate===today) {
                    doList.push(`[ ] ${data.title}`)
                    
                }
                else {
                    doList.push(`[ ] ${data.title} ${data.dueDate}`)
                }
            }
            else {
                if (data.dueDate===today) {
                    doList.push(`[x] ${data.title}`)
                }
                else {
                    doList.push(`[x] ${data.title} ${data.dueDate}`)
                }          
            }
        });
      return doList.join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports = todoList;