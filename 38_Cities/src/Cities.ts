// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function describe_city(city: string, country:string = 'Default Country.'){
    console.log(` ${city} is in ${country}`);
}

describe_city('Karachi','Pakistan');
describe_city('Tokyo','Japan');
describe_city('Paris');