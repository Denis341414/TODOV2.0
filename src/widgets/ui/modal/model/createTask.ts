export const createTask = (title: string, text: string, completed: boolean) => {
  return {
    title: title,
    text: text,
    date: Date(),
    completed: false,
  };
};
