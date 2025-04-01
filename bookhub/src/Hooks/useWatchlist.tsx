import {useContext} from "react";
import { WatchlistContext } from "./WatchlistContext";

const useWatchlist = () => {
    return useContext(WatchlistContext);
}

export default useWatchlist;