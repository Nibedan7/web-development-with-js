let regex = new RegExp(/^https:\/\/www\.linkedin\.com\/in\/*[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gm);

const printsIsValid = (url) => {
    if(regex.test(url)){
        console.log(`"${url}" is a valid URL`);
    } else {
        console.log(`"${url}" is not a valid URL`);
    }
};

let url = "https://www.linkedin.com/in/nibedan-pattanaik";
printsIsValid(url);