import { faker } from "@faker-js/faker";

function generateUser(email, password) {

    return {
        url: faker.image.imageUrl(),
        name: faker.name.lastName(),
        email,
        password,
        confirmPassword: password
    }
}

const userFactory = {
    generateUser
}

export default userFactory;
