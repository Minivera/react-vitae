export const hasProperties = (object, properties) => {
    if (properties.constructor !== Array)
    {
        return object.hasOwnProperty(properties);
    }
    for(let index in properties)
    {
        if (!object.hasOwnProperty(properties[index]))
        {
            return false;
        }
    }
    return true;
};