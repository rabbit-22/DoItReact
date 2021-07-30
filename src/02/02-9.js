function parse(qs){
    const queryString = qs.substr(1); //querystring = 'banana=10&apple=20&orange=30'
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk) => {
        const [key,value] = chunk.split('=');
        result[key] = value;
    });
    return result;
}