import "./PortfolioItem.css"
import { useParams } from "react-router-dom";

export default function PortfolioItem ({ portfolio }) {
    const { portfolioCategory, portfolioId } = useParams();
    return (<div>Portfolio Item</div>)
}
