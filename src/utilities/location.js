export const getLocation = (props, includeCity) => {
    let location = '';

    if (includeCity && props.city) {
        location += `${props.city}`;
    }

    if (props.state) {
        if (includeCity && location.length) {
            location += ', ';
        }

        location += props.state;
    }

    if (props.distance) {
        if (location.length) {
            location += ' - ';
        }

        location += `${props.distance?.toFixed(0)} mi`;
    }

    return location;
};
