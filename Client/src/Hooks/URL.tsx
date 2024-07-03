const URLValidate = (url: string): boolean => {
  const functionvalidateURL = () => {
    try {
      const parsed = new URL(url);
      return ["https:", "http:"].includes(parsed.protocol);
    } catch (error) {
      console.error("Invalid URL:", error);
      return false;
    }
  };
  return functionvalidateURL();
};

export default URLValidate;
