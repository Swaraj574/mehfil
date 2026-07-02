const generateUsername = (name) => {

    const clean = name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "");

    const random = Date.now().toString().slice(-4);

    return `${clean}${random}`;
};

export default generateUsername;