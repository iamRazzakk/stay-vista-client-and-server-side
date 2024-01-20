import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    return (
        <div>
            <Container>
                <div className="pt-4 flex items-center justify-between overflow-x-auto">
                    {categories.map(categoryItem => <CategoryBox key={categoryItem.label} label={categoryItem.label} icon={categoryItem.icon} selected={category === categoryItem.label}></CategoryBox>)}
                </div>
            </Container>
        </div>
    );
};

export default Categories;