let personalInfo = () => {

    let pii = {
        name: 'Sheldon Ferguson',
        ssn: '333-33-3333',
    };

    return {
        getName: () => {
            return pii.name;
        }
    };

};

console.log(personalInfo().getName());