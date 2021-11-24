import React from 'react';
import Thumbnail from "../Thumbnail/Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({results}) => {

    return (
        <FlipMove className='px-5 mt-10 sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        3xl:grid-cols-4
        '>
            {results.map(result =>
                (<Thumbnail key={result.id} thumbnail={result}/>))
            }
        </FlipMove>
    );
};

export default Results;

