export interface RecipeSectionType {
    initialObjects: string[];
    inititalRecipes: RecipeType[];
}

export interface RecipeType{
    title: string;
    ingredients: string;
    steps: string;
}
