import { useLocation } from "react-router-dom";

const NoMatchPage: React.FC = () => {
    const location = useLocation();
    return (
        <div>
            <h3>
                No Mathch for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NoMatchPage