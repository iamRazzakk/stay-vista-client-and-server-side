/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string"
const CategoryBox = ({ label, icon: Icon }) => {
    // console.log(label);
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    const handleClick = () => {
        // console.log(label);
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())//Why use parse? parse basically use for js object need string json formet than use .parse()
            const updateQuery = { ...currentQuery, category: label }
            const url = qs.stringifyUrl({
                url: '/',
                query: updateQuery,
            })
            navigate(url)
        }
    }
    params.get('category')
    // first time useSerchParams hook ta call dilam and useNavigate ke.than black ekta box create krlam for store it name is currentQuery.Than create condition if params jodi thake than currentQuery ta update hoi object json formet korte hbbe.json formet kra sesh e updateQuery name e ekta variable nilam jekane currentQuery cilu oita and category: label or box er name er shate store krci.Than create another variable name is url = qs.stringifyUrl({url: '/', query: updateQuery,}) and then navigate it navigate(url) .params.get('category').category basicaly use for (?category=Beach)
    return (
        <div onClick={handleClick} className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <Icon size={26} />
            <div className="text-sm font-medium">
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;