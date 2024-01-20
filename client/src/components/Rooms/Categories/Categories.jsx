import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    return (
        <div>
            <Container>
                <div className="pt-4 flex items-center justify-between overflow-x-auto">
                    {categories.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon}></CategoryBox>)}
                </div>
            </Container>
        </div>
    );
};

export default Categories;