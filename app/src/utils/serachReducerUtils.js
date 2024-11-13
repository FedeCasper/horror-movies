export const filterItemsByQueryAndClassification = (data, query, screen) => {
  const lowerQuery = query ? query.toLowerCase() : '';

  return data.filter(item => {
    const matchesQuery = lowerQuery
      ? (item.title?.toString().toLowerCase().includes(lowerQuery) || 
         item.optional_title?.toString().toLowerCase().includes(lowerQuery))
      : true;

    const matchesClassification = screen ? item.clasification === screen : true;

    return matchesQuery && matchesClassification;
  });
};
