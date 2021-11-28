export const todoSelector = state => state.todos.data;
export const todoSelectorDone = state => state.todos.data.filter((i)=> i.status === true);
export const todoSelectorUndone = state => state.todos.data.filter((i)=> i.status === false);
export const notificationSelector = state => state.notification.data;