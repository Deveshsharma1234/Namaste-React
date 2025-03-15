import Shimmer from "../components/Shimmer";

export const useLoader = (data) => {
    return () => {
        if (data == null || data===0 || data===undefined) {
            const shimmerElemet = [];
            for (let i = 0; i < 10; i++) {
                shimmerElemet.push(<Shimmer key={i} />);
            }
            
            return shimmerElemet;
        }
        return null;
    }

}