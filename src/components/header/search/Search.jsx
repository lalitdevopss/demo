import React from 'react'

const Search = () => {
    return (
        <>
            <div className="search-open">
                <div className="search-in">
                    <form>
                        <input placeholder="Search" type="text" id="txtSearchTop" maxlength="250" autocomplete="off" />
                        <button id="btnSearchTop"></button> <button className="micBtn" id="btnMicTop"></button>
                    </form>
                    <div className="sugestion" id="dvTrends">
                        <div className="st-txt">Trending</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search