export function orderDataByUsername(incomingData) {
    return incomingData
        .slice()
        .sort((a, b) => a.username.localeCompare(b.username));
}

// ADD NULL TO SECOND PARAM IF ALL DEPARTMENTS ARE SELECTED
export function sectionTitleFilter(incomingData, filterName) {
    if (filterName === null) {
        return orderDataByUsername(incomingData);
    }

    return orderDataByUsername(incomingData)
        .filter((entry) => entry.title === filterName);
}