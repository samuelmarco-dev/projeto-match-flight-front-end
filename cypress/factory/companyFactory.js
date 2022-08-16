function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generateCompany(email, password) {
    return {
        name: `Agency ${faker.name.lastName()}`,
        url: faker.image.imageUrl(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        cnpj: `${getRandomInt(10, 99)}.560.0${getRandomInt(10, 99)}/0001-${getRandomInt(10, 99)}`,
        type: 'TravelAgency',
        email,
        password,
        confirmPassword: password
    }
}

const companyFactory = {
    generateCompany
}

export default companyFactory;
