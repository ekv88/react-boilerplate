import React from "react";
import { withTranslation } from 'react-i18next';

const DogDescriptionEnhancer = (WrappedComponent) => {
    const DogDescriptionEnhancerHOC = ({...otherProps}) => {

        const randomNumber = (num) => Math.floor(Math.random() * num);

        const dogNames = [
            'Mr. Good Boi',
            'Snuffles',
            'Stick hunter',
        ];

        const dogQuotes = [
            'Follow stick of truth',
            'Got to find that ball',
            'I\'m good boy',
        ];

        // Append some random data as props to wrapped component
        return <WrappedComponent name={dogNames[randomNumber(dogNames.length)]} about={dogQuotes[randomNumber(dogQuotes.length)]} {...otherProps}/>
    };

    return withTranslation()(DogDescriptionEnhancerHOC)
};

export default DogDescriptionEnhancer;