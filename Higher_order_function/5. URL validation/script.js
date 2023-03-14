const URLValidator = (url) => {
    let pattern = RegExp(/http(s)?:\/\/.*\..*/g);
    return pattern.test(url)
};

console.log(URLValidator("https://linkedin.com/"));