module.exports = (string) => {
    try {
        const o = typeof string == 'string' ? JSON.parse(string) : string;
        if (o && typeof o === 'object') {
            return o;
        };
    } catch (err) {
        console.log(err);
    };
    return string;
};