class Food {
    constructor(
      id,
      categoryIds,
      title,
      affordability,
      complexity,
      imageUrl,
      ingredients,
      time
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.complexity = complexity;
      this.affordability = affordability;
      this.title = title;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
      this.time=time;
    }
  }
  
  export default Food;
  