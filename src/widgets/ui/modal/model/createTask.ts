export const createTask = (title: string, text: string) => {
  return {
    title: title,
    text: text,
    date: Date(),
  };
};
